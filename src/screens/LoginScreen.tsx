import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const {login} = useAuth();
  const nav = useNavigation<any>();

  const handleLogin = async () => {
    await login(email, pass);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Masuk</Text>
      <TextInput label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" style={styles.input} />
      <TextInput label="Password" value={pass} onChangeText={setPass} secureTextEntry style={styles.input} />
      <Button mode="contained" onPress={handleLogin} style={styles.btn}>Sign In</Button>
      <Text style={styles.link} onPress={() => nav.navigate('Register')}>Don't have an account? Sign up</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#121212' },
  title: { fontSize: 24, color: '#FFF', marginBottom: 16 },
  input: { marginBottom: 12, backgroundColor: '#1E1E1E' },
  btn: { marginTop: 8 },
  link: { marginTop: 12, color: '#1E88E5', textAlign: 'center' },
});