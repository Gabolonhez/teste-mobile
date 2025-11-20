import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Input, Button, ErrorMessage } from '@/components/ui';
import { useOnboardingContext } from '../onboarding-context';
import { createStyles } from '../onboarding.styles';

export const OnboardingStep3 = () => {
  const { data, updateData } = useOnboardingContext();
  const [password, setPassword] = useState(data.password);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const styles = createStyles();

  const handleNext = () => {
    if (!password) {
      setError('Por favor, insira uma senha');
      return;
    }
    if (password.length < 8) {
      setError('A senha deve ter no mínimo 8 caracteres');
      return;
    }
    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }
    updateData({ password });
    router.push('/(auth)/onboarding/step4');
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
          <View style={[styles.progressDot, styles.progressDotActive]} />
          <View style={styles.progressDot} />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Crie uma senha</Text>
        <Text style={styles.subtitle}>
          Escolha uma senha segura com no mínimo 8 caracteres.
        </Text>

        <View style={styles.form}>
          <ErrorMessage message={error} />
          <Input
            label="Senha"
            value={password}
            onChangeText={(text: string) => {
              setPassword(text);
              setError('');
            }}
            placeholder="Digite sua senha"
            secureTextEntry
            showPasswordToggle
          />
          <Input
            label="Confirmar senha"
            value={confirmPassword}
            onChangeText={(text: string) => {
              setConfirmPassword(text);
              setError('');
            }}
            placeholder="Digite sua senha novamente"
            secureTextEntry
            showPasswordToggle
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button title="Continuar" onPress={handleNext} />
      </View>
    </SafeAreaView>
  );
};
