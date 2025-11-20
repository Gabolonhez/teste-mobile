import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useMutation } from '@tanstack/react-query';
import { Input, Button, ErrorMessage } from '@/components/ui';
import { useOnboardingContext } from '../onboarding-context';
import { createStyles } from '../onboarding.styles';
import { authApi } from '@/lib/api';

export const OnboardingStep2 = () => {
  const { data, updateData } = useOnboardingContext();
  const [email, setEmail] = useState(data.email);
  const [error, setError] = useState('');
  const router = useRouter();
  const styles = createStyles();

  const checkEmailMutation = useMutation({
    mutationFn: async (emailToCheck: string) => {
      try {
        await authApi.register({
          name: 'temp',
          email: emailToCheck,
          password: 'temp12345',
          plan: 'Basic',
        });
        return { exists: false };
      } catch (error: any) {
        const message = error.response?.data?.message || '';
        if (message.toLowerCase().includes('já existe') || 
            message.toLowerCase().includes('already exists') ||
            message.toLowerCase().includes('duplicat')) {
          return { exists: true };
        }
        return { exists: false };
      }
    },
    onSuccess: (result) => {
      if (result.exists) {
        setError('Este email já está em uso. Por favor, use outro email.');
      } else {
        updateData({ email });
        router.push('/(auth)/onboarding/step3');
      }
    },
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNext = () => {
    if (!email.trim()) {
      setError('Por favor, insira seu email');
      return;
    }
    if (!validateEmail(email)) {
      setError('Por favor, insira um email válido');
      return;
    }
    
    checkEmailMutation.mutate(email);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <View style={styles.progressContainer}>
          <View style={[styles.progressDot, styles.progressDotActive]} />
          <View style={[styles.progressDot, styles.progressDotActive]} />
          <View style={styles.progressDot} />
          <View style={styles.progressDot} />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Qual é o seu email?</Text>
        <Text style={styles.subtitle}>
          Usaremos este email para sua conta e notificações importantes.
        </Text>

        <View style={styles.form}>
          <ErrorMessage message={error} />
          <Input
            label="Email"
            value={email}
            onChangeText={(text: string) => {
              setEmail(text);
              setError('');
            }}
            placeholder="seu@email.com"
            keyboardType="email-address"
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button 
          title="Continuar" 
          onPress={handleNext}
          loading={checkEmailMutation.isPending}
          disabled={checkEmailMutation.isPending}
        />
      </View>
    </SafeAreaView>
  );
};
