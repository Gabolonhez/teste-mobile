import { useState, useCallback } from 'react';
import { useRouter } from 'expo-router';
import { useMutation } from '@tanstack/react-query';
import { authApi } from '@/lib/api';
import { useAuthStore } from '@/store';

export const useLoginLogic = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);

  const loginMutation = useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      setAuth(data.token, data.user);
      router.replace('/(app)/home');
    },
    onError: (error: any) => {
      const message = error.response?.data?.message || 'Erro ao fazer login. Tente novamente.';
      setError(message);
    },
  });

  const handleLogin = useCallback(() => {
    setError('');

    if (!email.trim()) {
      setError('Por favor, insira seu email');
      return;
    }

    if (!password) {
      setError('Por favor, insira sua senha');
      return;
    }

    loginMutation.mutate({ email, password });
  }, [email, password, loginMutation]);

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    isLoading: loginMutation.isPending,
    handleLogin,
    handleBack,
  };
};
