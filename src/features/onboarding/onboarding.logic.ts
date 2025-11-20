import { useState, useCallback } from 'react';
import { useRouter } from 'expo-router';
import type { OnboardingData } from './types';

const INITIAL_DATA: OnboardingData = {
  name: '',
  email: '',
  password: '',
  plan: '',
};

export const useOnboardingStore = () => {
  const [data, setData] = useState<OnboardingData>(INITIAL_DATA);

  const updateData = useCallback((newData: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...newData }));
  }, []);

  const resetData = useCallback(() => {
    setData(INITIAL_DATA);
  }, []);

  return {
    data,
    updateData,
    resetData,
  };
};

export const useOnboardingNavigation = (currentStep: number, totalSteps: number) => {
  const router = useRouter();

  const canGoBack = currentStep > 1;
  const isLastStep = currentStep === totalSteps;

  const goBack = useCallback(() => {
    if (currentStep === 1) {
      router.back();
    } else {
      router.back();
    }
  }, [currentStep, router]);

  const goToNextStep = useCallback(() => {
    const nextStep = currentStep + 1;
    if (nextStep <= totalSteps) {
      router.push(`/(auth)/onboarding/step${nextStep}` as any);
    }
  }, [currentStep, totalSteps, router]);

  return {
    canGoBack,
    isLastStep,
    goBack,
    goToNextStep,
  };
};
