import { View, Text } from 'react-native';
import { createStyles } from './error-message.styles';
import type { ErrorMessageProps } from './error-message.types';

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  const styles = createStyles();

  if (!message) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};
