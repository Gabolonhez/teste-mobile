import { StyleSheet } from 'react-native';
import { colors, spacing, fontSize, fontWeight, borderRadius } from '@/theme';

export const createStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.primary,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: spacing.xl,
    },
    iconContainer: {
      width: 120,
      height: 120,
      borderRadius: borderRadius.full,
      backgroundColor: colors.white,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: spacing.xl,
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.2,
      shadowRadius: 8,
      elevation: 8,
    },
    icon: {
      fontSize: 60,
    },
    title: {
      fontSize: fontSize.huge,
      fontWeight: fontWeight.bold,
      color: colors.white,
      marginBottom: spacing.md,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: fontSize.lg,
      color: colors.white,
      textAlign: 'center',
      opacity: 0.9,
      marginBottom: spacing.xxxl,
      lineHeight: 28,
    },
    buttonContainer: {
      width: '100%',
      gap: spacing.md,
    },
    button: {
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      borderRadius: borderRadius.md,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 56,
    },
    primaryButton: {
      backgroundColor: colors.white,
    },
    outlineButton: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: colors.white,
    },
    primaryButtonText: {
      fontSize: fontSize.md,
      fontWeight: fontWeight.semiBold,
      color: colors.primary,
    },
    outlineButtonText: {
      fontSize: fontSize.md,
      fontWeight: fontWeight.semiBold,
      color: colors.white,
    },
  });
};
