import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { healthApi } from '@/lib/api';
import { queryKeys } from '@/lib/react-query';
import { useAuthStore } from '@/store';

export const useHomeLogic = () => {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  const { data: healthStatus, isLoading, error, refetch } = useQuery({
    queryKey: queryKeys.health,
    queryFn: healthApi.check,
    refetchInterval: 30000,
  });

  const handleGoToProfile = useCallback(() => {
    router.push('/(app)/profile');
  }, [router]);

  const isApiWorking = healthStatus === 'API Working';

  return {
    user,
    isApiWorking,
    isLoading,
    error,
    refetch,
    handleGoToProfile,
  };
};
