import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MembersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Members</Text>

      <Text style={styles.subtitle}>
       Guild Members data will be loaded from your guild API.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090B12',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#E8D4DF',
    fontSize: 28,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#B0B0B0',
    marginTop: 10,
  },
});