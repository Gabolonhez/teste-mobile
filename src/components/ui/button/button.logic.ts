import { useCallback } from 'react';
import type { ButtonLogicProps } from './button.types';

export const useButtonLogic = ({ onPress, disabled, loading }: ButtonLogicProps) => {
  const handlePress = useCallback(() => {
    if (!disabled && !loading && onPress) {
      onPress();
    }
  }, [disabled, loading, onPress]);

  return {
    handlePress,
  };
};
