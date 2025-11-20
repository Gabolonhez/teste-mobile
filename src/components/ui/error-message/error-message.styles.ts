import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, fontSize } from '@/theme';

export const createStyles = () => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.error,
      padding: spacing.md,
      borderRadius: borderRadius.md,
      marginBottom: spacing.md,
    },
    text: {
      color: colors.white,
      fontSize: fontSize.sm,
      textAlign: 'center',
    },
  });
};
