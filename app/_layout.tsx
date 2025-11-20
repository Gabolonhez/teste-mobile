import { Slot, SplashScreen } from 'expo-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { queryClient } from '@/lib/react-query';
import { useAuthStore } from '@/store';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const isLoading = useAuthStore((state) => state.isLoading);

  useEffect(() => {
    if (!isLoading) {
      SplashScreen.hideAsync();
    }
  }, [isLoading]);

  return (
    <QueryClientProvider client={queryClient}>
      <Slot />
    </QueryClientProvider>
  );
}
