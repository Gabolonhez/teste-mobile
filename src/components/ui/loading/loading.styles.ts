import { StyleSheet } from 'react-native';
import { colors, spacing } from '@/theme';

export const createStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: colors.overlay,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 999,
    },
    content: {
      alignItems: 'center',
      gap: spacing.md,
    },
    text: {
      color: colors.white,
      fontSize: 16,
      fontWeight: '500',
    },
  });
};
