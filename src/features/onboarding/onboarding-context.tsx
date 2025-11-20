import React, { createContext, useContext, useState, useCallback } from 'react';
import type { OnboardingData } from './types';

interface OnboardingContextData {
  data: OnboardingData;
  updateData: (newData: Partial<OnboardingData>) => void;
  resetData: () => void;
}

const OnboardingContext = createContext<OnboardingContextData | undefined>(undefined);

const INITIAL_DATA: OnboardingData = {
  name: '',
  email: '',
  password: '',
  plan: '',
};

export const OnboardingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<OnboardingData>(INITIAL_DATA);

  const updateData = useCallback((newData: Partial<OnboardingData>) => {
    setData((prev) => ({ ...prev, ...newData }));
  }, []);

  const resetData = useCallback(() => {
    setData(INITIAL_DATA);
  }, []);

  return (
    <OnboardingContext.Provider value={{ data, updateData, resetData }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboardingContext = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboardingContext must be used within OnboardingProvider');
  }
  return context;
};
