import { useState, useCallback } from 'react';

export const useInputLogic = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const togglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible((prev) => !prev);
  }, []);

  return {
    isFocused,
    isPasswordVisible,
    handleFocus,
    handleBlur,
    togglePasswordVisibility,
  };
};
