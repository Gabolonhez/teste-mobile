import { View, Text, ScrollView, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Loading } from '@/components/ui';
import { useHomeLogic } from './home.logic';
import { createStyles } from './home.styles';

export const HomeScreen = () => {
  const {
    user,
    isApiWorking,
    isLoading,
    error,
    refetch,
    handleGoToProfile,
  } = useHomeLogic();
  
  const styles = createStyles();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={() => refetch()} />
        }
      >
        <View style={styles.header}>
          <Text style={styles.greeting}>Olá, {user?.name?.split(' ')[0]}! 👋</Text>
          <Text style={styles.subGreeting}>Bem-vindo de volta</Text>
        </View>

        <View style={[styles.card, styles.statusCard, error && styles.errorCard]}>
          <Text style={styles.statusText}>
            {error ? 'API Offline' : isApiWorking ? 'API Online' : 'Verificando...'}
          </Text>
          <Text style={styles.statusIcon}>
            {error ? '❌' : isApiWorking ? '✅' : '⏳'}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Seu Plano</Text>
          <Text style={styles.cardContent}>
            Você está no plano <Text style={{ fontWeight: '600' }}>{user?.plan}</Text>
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Status da Conta</Text>
          <Text style={styles.cardContent}>
            Status: <Text style={{ fontWeight: '600', textTransform: 'capitalize' }}>{user?.status}</Text>
            {'\n'}Email: {user?.email}
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button title="Ir para o Perfil" onPress={handleGoToProfile} variant="outline" />
      </View>
    </SafeAreaView>
  );
};
