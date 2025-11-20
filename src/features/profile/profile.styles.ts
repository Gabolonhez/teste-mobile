import { StyleSheet } from 'react-native';
import { colors, spacing, fontSize, fontWeight, borderRadius } from '@/theme';

export const createStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      backgroundColor: colors.primary,
      paddingHorizontal: spacing.xl,
      paddingTop: spacing.lg,
      paddingBottom: spacing.xxxl,
      borderBottomLeftRadius: borderRadius.xl,
      borderBottomRightRadius: borderRadius.xl,
    },
    backButton: {
      width: 40,
      height: 40,
      borderRadius: borderRadius.full,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: spacing.lg,
    },
    backButtonText: {
      fontSize: fontSize.lg,
      color: colors.white,
    },
    headerTitle: {
      fontSize: fontSize.xxxl,
      fontWeight: fontWeight.bold,
      color: colors.white,
    },
    content: {
      flex: 1,
      paddingHorizontal: spacing.xl,
      marginTop: -spacing.xl,
    },
    card: {
      backgroundColor: colors.white,
      borderRadius: borderRadius.lg,
      padding: spacing.lg,
      marginBottom: spacing.md,
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    sectionTitle: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.semiBold,
      color: colors.text,
      marginBottom: spacing.md,
    },
    buttonContainer: {
      gap: spacing.sm,
    },
    dangerButton: {
      backgroundColor: colors.error,
    },
    planCard: {
      backgroundColor: colors.white,
      borderRadius: borderRadius.md,
      padding: spacing.md,
      borderWidth: 2,
      borderColor: colors.border,
    },
    planCardSelected: {
      borderColor: colors.primary,
      backgroundColor: 'rgba(108, 99, 255, 0.05)',
    },
    planName: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.semiBold,
      color: colors.text,
      marginBottom: spacing.xs,
    },
    planDescription: {
      fontSize: fontSize.sm,
      color: colors.textLight,
    },
    footer: {
      paddingHorizontal: spacing.xl,
      paddingVertical: spacing.lg,
    },
  });
};
