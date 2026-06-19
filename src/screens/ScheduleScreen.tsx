import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ScheduleScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Schedule</Text>
      <Text style={styles.subtitle}>
        Guild events and schedules will appear here.
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