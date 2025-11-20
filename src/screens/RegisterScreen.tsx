import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const API_URL = 'http://10.0.2.2:8000/api';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const nav = useNavigation<any>();

  const handleRegister = async () => {
    await axios.post(`${API_URL}/register`, {name, email, password: pass});
    nav.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar</Text>
      <TextInput label="Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" style={styles.input} />
      <TextInput label="Password" value={pass} onChangeText={setPass} secureTextEntry style={styles.input} />
      <Button mode="contained" onPress={handleRegister} style={styles.btn}>Sign Up</Button>
      <Text style={styles.link} onPress={() => nav.navigate('Login')}>Sudah punya akun? Masuk</Text>
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