import { useCallback } from 'react';
import { useRouter } from 'expo-router';

export const useWelcomeLogic = () => {
  const router = useRouter();

  const handleGetStarted = useCallback(() => {
    router.push('/(auth)/onboarding/step1');
  }, [router]);

  const handleLogin = useCallback(() => {
    router.push('/(auth)/login');
  }, [router]);

  return {
    handleGetStarted,
    handleLogin,
  };
};
