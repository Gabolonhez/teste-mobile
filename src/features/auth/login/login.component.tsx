import { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input, Button, ErrorMessage } from '@/components/ui';
import { useLoginLogic } from './login.logic';
import { createStyles } from './login.styles';

export const LoginScreen = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    isLoading,
    handleLogin,
    handleBack,
  } = useLoginLogic();
  
  const styles = createStyles();

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack} disabled={isLoading}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView 
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            <Text style={styles.title}>Bem-vindo de volta!</Text>
            <Text style={styles.subtitle}>
              Entre com sua conta para continuar
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
                editable={!isLoading}
              />
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
                editable={!isLoading}
              />
            </View>

            <View style={styles.buttonContainer}>
              <Button 
                title="Entrar" 
                onPress={handleLogin}
                loading={isLoading}
                disabled={isLoading}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
