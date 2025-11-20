import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useInputLogic } from './input.logic';
import { createStyles } from './input.styles';
import type { InputProps } from './input.types';

export const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  error,
  keyboardType = 'default',
  autoCapitalize = 'none',
  editable = true,
  showPasswordToggle = false,
}: InputProps) => {
  const { isFocused, isPasswordVisible, handleFocus, handleBlur, togglePasswordVisibility } = 
    useInputLogic();
  const styles = createStyles();

  const inputContainerStyle = [
    styles.inputContainer,
    isFocused && styles.inputContainerFocused,
    error && styles.inputContainerError,
  ];

  const isSecure = secureTextEntry && !isPasswordVisible;

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={inputContainerStyle}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#ADB5BD"
          secureTextEntry={isSecure}
          onFocus={handleFocus}
          onBlur={handleBlur}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          editable={editable}
        />
        {showPasswordToggle && secureTextEntry && (
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.icon}>
            <Text>{isPasswordVisible ? '👁️' : '👁️‍🗨️'}</Text>
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
