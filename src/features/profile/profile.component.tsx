import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Input, Button, ErrorMessage } from '@/components/ui';
import { useProfileLogic } from './profile.logic';
import { createStyles } from './profile.styles';

export const ProfileScreen = () => {
  const {
    user,
    isEditing,
    name,
    setName,
    email,
    setEmail,
    plan,
    setPlan,
    oldPassword,
    setOldPassword,
    newPassword,
    setNewPassword,
    error,
    setError,
    isLoading,
    handleEdit,
    handleCancel,
    handleSave,
    handleDelete,
    handleLogout,
    handleBack,
  } = useProfileLogic();

  const styles = createStyles();

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Perfil</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Informações Pessoais</Text>
          <ErrorMessage message={error} />
          
          <Input
            label="Nome"
            value={name}
            onChangeText={(text: string) => {
              setName(text);
              setError('');
            }}
            editable={isEditing && !isLoading}
          />
          
          <Input
            label="Email"
            value={email}
            onChangeText={(text: string) => {
              setEmail(text);
              setError('');
            }}
            keyboardType="email-address"
            editable={isEditing && !isLoading}
          />

          {isEditing && (
            <>
              <Text style={styles.sectionTitle}>Alterar Senha (Opcional)</Text>
              <Input
                label="Senha Atual"
                value={oldPassword}
                onChangeText={(text: string) => {
                  setOldPassword(text);
                  setError('');
                }}
                secureTextEntry
                showPasswordToggle
                editable={!isLoading}
                placeholder="Digite sua senha atual"
              />
              <Input
                label="Nova Senha"
                value={newPassword}
                onChangeText={(text: string) => {
                  setNewPassword(text);
                  setError('');
                }}
                secureTextEntry
                showPasswordToggle
                editable={!isLoading}
                placeholder="Digite sua nova senha"
              />
            </>
          )}

          <View style={styles.buttonContainer}>
            {isEditing ? (
              <>
                <Button
                  title="Salvar Alterações"
                  onPress={handleSave}
                  loading={isLoading}
                  disabled={isLoading}
                />
                <Button
                  title="Cancelar"
                  onPress={handleCancel}
                  variant="outline"
                  disabled={isLoading}
                />
              </>
            ) : (
              <Button
                title="Editar Perfil"
                onPress={handleEdit}
                variant="outline"
              />
            )}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Plano Atual</Text>
          {isEditing ? (
            <View style={{ gap: 12, marginTop: 8 }}>
              {[
                { id: 'basic', name: 'Basic', description: 'Ideal para começar e explorar recursos básicos' },
                { id: 'pro', name: 'Pro', description: 'Para usuários avançados com recursos premium' },
                { id: 'premium', name: 'Premium', description: 'Acesso completo a todos os recursos e suporte prioritário' },
              ].map((planOption) => (
                <TouchableOpacity
                  key={planOption.id}
                  style={[
                    styles.planCard,
                    plan === planOption.name && styles.planCardSelected,
                  ]}
                  onPress={() => {
                    setPlan(planOption.name);
                    setError('');
                  }}
                  activeOpacity={0.7}
                  disabled={isLoading}
                >
                  <Text style={styles.planName}>{planOption.name}</Text>
                  <Text style={styles.planDescription}>{planOption.description}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <Text style={{ fontSize: 16, color: '#6C757D', marginBottom: 16 }}>
              Você está no plano <Text style={{ fontWeight: '600' }}>{user?.plan}</Text>
            </Text>
          )}
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Ações da Conta</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Sair"
              onPress={handleLogout}
              variant="outline"
              disabled={isLoading}
            />
            <Button
              title="Excluir Conta"
              onPress={handleDelete}
              variant="secondary"
              disabled={isLoading}
              loading={isLoading}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
