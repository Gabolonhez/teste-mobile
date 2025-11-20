import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, fontSize } from '@/theme';

export const createStyles = () => {
  return StyleSheet.create({
    container: {
      marginBottom: spacing.md,
    },
    label: {
      fontSize: fontSize.sm,
      color: colors.text,
      marginBottom: spacing.xs,
      fontWeight: '500',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.backgroundDark,
      borderRadius: borderRadius.md,
      borderWidth: 1,
      borderColor: colors.border,
      paddingHorizontal: spacing.md,
    },
    inputContainerFocused: {
      borderColor: colors.primary,
      backgroundColor: colors.white,
    },
    inputContainerError: {
      borderColor: colors.error,
    },
    input: {
      flex: 1,
      fontSize: fontSize.md,
      color: colors.text,
      paddingVertical: spacing.md,
      minHeight: 50,
    },
    icon: {
      marginLeft: spacing.sm,
    },
    error: {
      fontSize: fontSize.xs,
      color: colors.error,
      marginTop: spacing.xs,
    },
  });
};
