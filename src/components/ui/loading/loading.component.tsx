import { View, ActivityIndicator, Text } from 'react-native';
import { createStyles } from './loading.styles';
import type { LoadingProps } from './loading.types';

export const Loading = ({ overlay = false, message }: LoadingProps) => {
  const styles = createStyles();

  const Container = overlay ? View : View;
  const containerStyle = overlay ? styles.overlay : styles.container;

  return (
    <Container style={containerStyle}>
      <View style={styles.content}>
        <ActivityIndicator size="large" color="#6C63FF" />
        {message && <Text style={styles.text}>{message}</Text>}
      </View>
    </Container>
  );
};
