import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useWelcomeLogic } from './welcome.logic';
import { createStyles } from './welcome.styles';

export const WelcomeScreen = () => {
  const { handleGetStarted, handleLogin } = useWelcomeLogic();
  const styles = createStyles();

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>🚀</Text>
        </View>
        
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.subtitle}>
          Cadastre-se ou faça login agora.
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.primaryButton]}
            onPress={handleGetStarted}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>Começar</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.outlineButton]}
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <Text style={styles.outlineButtonText}>Já tenho conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
