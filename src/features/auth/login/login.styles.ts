import { StyleSheet } from 'react-native';
import { colors, spacing, fontSize, fontWeight, borderRadius } from '@/theme';

export const createStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      paddingHorizontal: spacing.lg,
      paddingTop: spacing.lg,
      paddingBottom: spacing.md,
    },
    backButton: {
      width: 40,
      height: 40,
      borderRadius: borderRadius.full,
      backgroundColor: colors.backgroundDark,
      justifyContent: 'center',
      alignItems: 'center',
    },
    backButtonText: {
      fontSize: fontSize.lg,
    },
    content: {
      flex: 1,
      paddingHorizontal: spacing.xl,
      paddingTop: spacing.xxxl,
    },
    title: {
      fontSize: fontSize.xxxl,
      fontWeight: fontWeight.bold,
      color: colors.text,
      marginBottom: spacing.md,
    },
    subtitle: {
      fontSize: fontSize.md,
      color: colors.textSecondary,
      marginBottom: spacing.xl,
      lineHeight: 24,
    },
    form: {
      marginBottom: spacing.lg,
    },
    footer: {
      paddingHorizontal: spacing.xl,
      paddingVertical: spacing.lg,
      alignItems: 'center',
    },
    footerText: {
      fontSize: fontSize.sm,
      color: colors.textSecondary,
      marginTop: spacing.md,
    },
    footerLink: {
      color: colors.primary,
      fontWeight: fontWeight.semiBold,
    },
  });
};
