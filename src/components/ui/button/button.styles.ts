import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, fontSize, fontWeight } from '@/theme';

export const createStyles = () => {
  return StyleSheet.create({
    button: {
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      borderRadius: borderRadius.md,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      minHeight: 50,
    },
    primary: {
      backgroundColor: colors.primary,
    },
    secondary: {
      backgroundColor: colors.secondary,
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: colors.primary,
    },
    disabled: {
      opacity: 0.5,
    },
    text: {
      fontSize: fontSize.md,
      fontWeight: fontWeight.semiBold,
      color: colors.white,
    },
    textOutline: {
      color: colors.primary,
    },
    loading: {
      marginLeft: spacing.sm,
    },
  });
};
