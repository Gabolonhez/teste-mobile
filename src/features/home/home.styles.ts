import { StyleSheet } from 'react-native';
import { colors, spacing, fontSize, fontWeight, borderRadius } from '@/theme';

export const createStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: {
      flex: 1,
      paddingHorizontal: spacing.xl,
      paddingTop: spacing.xl,
    },
    header: {
      marginBottom: spacing.xl,
    },
    greeting: {
      fontSize: fontSize.xxl,
      fontWeight: fontWeight.bold,
      color: colors.text,
      marginBottom: spacing.xs,
    },
    subGreeting: {
      fontSize: fontSize.md,
      color: colors.textSecondary,
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
    cardTitle: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.semiBold,
      color: colors.text,
      marginBottom: spacing.sm,
    },
    cardContent: {
      fontSize: fontSize.md,
      color: colors.textSecondary,
      lineHeight: 22,
    },
    statusCard: {
      backgroundColor: colors.primary,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    statusText: {
      fontSize: fontSize.lg,
      fontWeight: fontWeight.semiBold,
      color: colors.white,
    },
    statusIcon: {
      fontSize: 32,
    },
    errorCard: {
      backgroundColor: colors.error,
    },
    footer: {
      paddingHorizontal: spacing.xl,
      paddingVertical: spacing.lg,
      borderTopWidth: 1,
      borderTopColor: colors.borderLight,
    },
  });
};
