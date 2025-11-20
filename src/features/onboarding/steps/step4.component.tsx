import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useMutation } from '@tanstack/react-query';
import { Button, ErrorMessage } from '@/components/ui';
import { useOnboardingContext } from '../onboarding-context';
import { createStyles } from '../onboarding.styles';
import { authApi } from '@/lib/api';
import { useAuthStore } from '@/store';

const PLANS = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Ideal para começar e explorar recursos básicos',
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Para usuários avançados com recursos premium',
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Acesso completo a todos os recursos e suporte prioritário',
  },
];

export const OnboardingStep4 = () => {
  const { data, updateData, resetData } = useOnboardingContext();
  const [selectedPlan, setSelectedPlan] = useState(data.plan);
  const [error, setError] = useState('');
  const router = useRouter();
  const styles = createStyles();
  const setAuth = useAuthStore((state) => state.setAuth);

  const registerMutation = useMutation({
    mutationFn: authApi.register,
    onSuccess: async () => {
      const loginResponse = await authApi.login({
        email: data.email,
        password: data.password,
      });
      setAuth(loginResponse.token, loginResponse.user);
      resetData();
      router.replace('/(app)/home');
    },
    onError: (error: any) => {
      const message = error.response?.data?.message || 'Erro ao criar conta. Tente novamente.';
      setError(message);
    },
  });

  const handleFinish = () => {
    if (!selectedPlan) {
      setError('Por favor, selecione um plano');
      return;
    }
    
    updateData({ plan: selectedPlan });
    
    registerMutation.mutate({
      name: data.name,
      email: data.email,
      password: data.password,
      plan: selectedPlan,
    });
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={handleBack}
          disabled={registerMutation.isPending}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <View style={styles.progressContainer}>
          <View style={[styles.progressDot, styles.progressDotActive]} />
          <View style={[styles.progressDot, styles.progressDotActive]} />
          <View style={[styles.progressDot, styles.progressDotActive]} />
          <View style={[styles.progressDot, styles.progressDotActive]} />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Escolha seu plano</Text>
        <Text style={styles.subtitle}>
          Selecione o plano que melhor se adequa às suas necessidades.
        </Text>

        <View style={styles.form}>
          <ErrorMessage message={error} />
          <View style={styles.planContainer}>
            {PLANS.map((plan) => (
              <TouchableOpacity
                key={plan.id}
                style={[
                  styles.planCard,
                  selectedPlan === plan.name && styles.planCardSelected,
                ]}
                onPress={() => {
                  setSelectedPlan(plan.name);
                  setError('');
                }}
                activeOpacity={0.7}
                disabled={registerMutation.isPending}
              >
                <Text style={styles.planName}>{plan.name}</Text>
                <Text style={styles.planDescription}>{plan.description}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button 
          title="Finalizar cadastro" 
          onPress={handleFinish}
          loading={registerMutation.isPending}
          disabled={registerMutation.isPending}
        />
      </View>
    </SafeAreaView>
  );
};
