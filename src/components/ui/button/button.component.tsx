import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { useButtonLogic } from './button.logic';
import { createStyles } from './button.styles';
import type { ButtonProps } from './button.types';

export const Button = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
}: ButtonProps) => {
  const { handlePress } = useButtonLogic({ onPress, disabled, loading });
  const styles = createStyles();

  const buttonStyle = [
    styles.button,
    variant === 'primary' && styles.primary,
    variant === 'secondary' && styles.secondary,
    variant === 'outline' && styles.outline,
    (disabled || loading) && styles.disabled,
  ];

  const textStyle = [
    styles.text,
    variant === 'outline' && styles.textOutline,
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={handlePress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      <Text style={textStyle}>{title}</Text>
      {loading && (
        <ActivityIndicator
          size="small"
          color={variant === 'outline' ? '#6C63FF' : '#FFFFFF'}
          style={styles.loading}
        />
      )}
    </TouchableOpacity>
  );
};
