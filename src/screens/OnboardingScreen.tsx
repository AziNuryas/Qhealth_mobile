import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OnboardingScreen() {
  const nav = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>QHealth</Text>
      <Text style={styles.sub}>Your Wellness Journey Starts Here</Text>
      <Button title="Lanjut" onPress={() => nav.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212' },
  title: { fontSize: 32, fontWeight: 'bold', color: '#1E88E5' },
  sub: { fontSize: 16, color: '#B0BEC5', marginVertical: 12 },
});