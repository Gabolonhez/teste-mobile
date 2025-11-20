import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Input, Button, ErrorMessage } from '@/components/ui';
import { useOnboardingContext } from '../onboarding-context';
import { createStyles } from '../onboarding.styles';

export const OnboardingStep1 = () => {
  const { data, updateData } = useOnboardingContext();
  const [name, setName] = useState(data.name);
  const [error, setError] = useState('');
  const router = useRouter();
  const styles = createStyles();

  const handleNext = () => {
    if (!name.trim()) {
      setError('Por favor, insira seu nome');
      return;
    }
    updateData({ name });
    router.push('/(auth)/onboarding/step2');
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
          <View style={styles.progressDot} />
          <View style={styles.progressDot} />
          <View style={styles.progressDot} />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Como você se chama?</Text>
        <Text style={styles.subtitle}>
          Vamos começar com o básico. Qual é o seu nome completo?
        </Text>

        <View style={styles.form}>
          <ErrorMessage message={error} />
          <Input
            label="Nome completo"
            value={name}
            onChangeText={(text: string) => {
              setName(text);
              setError('');
            }}
            placeholder="Digite seu nome"
            autoCapitalize="words"
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button title="Continuar" onPress={handleNext} />
      </View>
    </SafeAreaView>
  );
};
