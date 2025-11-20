import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatbotScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Health Assistant</Text>
      <Text style={styles.sub}>Chat segera hadir</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212' },
  title: { fontSize: 24, color: '#FFF' },
  sub: { fontSize: 14, color: '#B0BEC5', marginVertical: 8 },
});