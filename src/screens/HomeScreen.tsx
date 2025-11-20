import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useAuth } from '../context/AuthContext';

export default function HomeScreen() {
  const {logout} = useAuth();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Q&A</Text>
      <Text style={styles.sub}>List & search segera hadir</Text>
      <Button mode="outlined" onPress={logout} style={styles.btn}>Keluar</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212' },
  title: { fontSize: 24, color: '#FFF' },
  sub: { fontSize: 14, color: '#B0BEC5', marginVertical: 8 },
  btn: { marginTop: 16 },
});