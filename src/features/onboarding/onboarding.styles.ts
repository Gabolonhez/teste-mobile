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
    progressContainer: {
      flexDirection: 'row',
      gap: spacing.xs,
      marginTop: spacing.md,
    },
    progressDot: {
      flex: 1,
      height: 4,
      borderRadius: borderRadius.xs,
      backgroundColor: colors.borderLight,
    },
    progressDotActive: {
      backgroundColor: colors.primary,
    },
    content: {
      flex: 1,
      paddingHorizontal: spacing.xl,
      paddingTop: spacing.xl,
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
      flex: 1,
    },
    footer: {
      paddingHorizontal: spacing.xl,
      paddingVertical: spacing.lg,
      borderTopWidth: 1,
      borderTopColor: colors.borderLight,
    },
    planContainer: {
      gap: spacing.md,
    },
    planCard: {
      padding: spacing.lg,
      borderRadius: borderRadius.md,
      borderWidth: 2,
      borderColor: colors.border,
      backgroundColor: colors.backgroundDark,
    },
    planCardSelected: {
      borderColor: colors.primary,
      backgroundColor: colors.primaryLight + '10',
    },
    planName: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.semiBold,
      color: colors.text,
      marginBottom: spacing.xs,
    },
    planDescription: {
      fontSize: fontSize.sm,
      color: colors.textSecondary,
    },
  });
};
