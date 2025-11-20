import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Input, Button, ErrorMessage } from '@/components/ui';
import { useOnboardingContext } from '../onboarding-context';
import { createStyles } from '../onboarding.styles';

export const OnboardingStep2 = () => {
  const { data, updateData } = useOnboardingContext();
  const [email, setEmail] = useState(data.email);
  const [error, setError] = useState('');
  const router = useRouter();
  const styles = createStyles();

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
    updateData({ email });
    router.push('/(auth)/onboarding/step3');
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
        <Button title="Continuar" onPress={handleNext} />
      </View>
    </SafeAreaView>
  );
};
