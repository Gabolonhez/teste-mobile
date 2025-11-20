import { useState, useCallback } from 'react';
import { useRouter } from 'expo-router';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Alert } from 'react-native';
import { userApi } from '@/lib/api';
import { useAuthStore } from '@/store';
import { queryKeys } from '@/lib/react-query';

export const useProfileLogic = () => {
  const router = useRouter();
  const { user, clearAuth, updateUser } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [plan, setPlan] = useState(user?.plan || '');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');

  const { refetch } = useQuery({
    queryKey: queryKeys.user(user?.id || 0),
    queryFn: () => userApi.getUser(user?.id || 0),
    enabled: !!user?.id,
  });

  const updateMutation = useMutation({
    mutationFn: userApi.updateUser,
    onSuccess: async () => {
      const response = await refetch();
      if (response.data?.user) {
        updateUser(response.data.user);
        setName(response.data.user.name);
        setEmail(response.data.user.email);
        setPlan(response.data.user.plan);
      }
      setIsEditing(false);
      setOldPassword('');
      setNewPassword('');
      Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
    },
    onError: (error: any) => {
      const message = error.response?.data?.message || 'Erro ao atualizar perfil.';
      setError(message);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: userApi.deleteUser,
    onSuccess: () => {
      clearAuth();
      router.replace('/(auth)/welcome');
    },
    onError: (error: any) => {
      const message = error.response?.data?.message || 'Erro ao deletar conta.';
      Alert.alert('Erro', message);
    },
  });

  const handleEdit = useCallback(() => {
    setName(user?.name || '');
    setEmail(user?.email || '');
    setPlan(user?.plan || '');
    setIsEditing(true);
    setError('');
  }, [user]);

  const handleCancel = useCallback(() => {
    setIsEditing(false);
    setName(user?.name || '');
    setEmail(user?.email || '');
    setPlan(user?.plan || '');
    setOldPassword('');
    setNewPassword('');
    setError('');
  }, [user]);

  const handleSave = useCallback(() => {
    if (!user?.id) return;

    setError('');

    if (!name.trim() || !email.trim()) {
      setError('Nome e email são obrigatórios');
      return;
    }

    const updateData: any = {
      userId: user.id,
      name,
      email,
      plan,
    };

    if (newPassword) {
      if (!oldPassword) {
        setError('Informe a senha atual para alterá-la');
        return;
      }
      if (newPassword.length < 8) {
        setError('A nova senha deve ter no mínimo 8 caracteres');
        return;
      }
      updateData.oldPassword = oldPassword;
      updateData.password = newPassword;
    }

    updateMutation.mutate(updateData);
  }, [user, name, email, plan, oldPassword, newPassword, updateMutation]);

  const handleDelete = useCallback(() => {
    Alert.alert(
      'Confirmar Exclusão',
      'Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () => {
            if (user?.id) {
              deleteMutation.mutate({ userId: user.id });
            }
          },
        },
      ]
    );
  }, [user, deleteMutation]);

  const handleLogout = useCallback(() => {
    Alert.alert(
      'Confirmar Logout',
      'Tem certeza que deseja sair?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sair',
          onPress: () => {
            clearAuth();
            router.replace('/(auth)/welcome');
          },
        },
      ]
    );
  }, [clearAuth, router]);

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return {
    user,
    isEditing,
    name,
    setName,
    email,
    setEmail,
    plan,
    setPlan,
    oldPassword,
    setOldPassword,
    newPassword,
    setNewPassword,
    error,
    setError,
    isLoading: updateMutation.isPending || deleteMutation.isPending,
    handleEdit,
    handleCancel,
    handleSave,
    handleDelete,
    handleLogout,
    handleBack,
  };
};
