import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MilestoneCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.badge}>
        MILESTONE
      </Text>

      <Text style={styles.title}>
        2 MILLION
      </Text>

      <Text style={styles.title}>
        PROSPERITY
      </Text>

      <Text style={styles.description}>
        High Heaven Sect has surpassed
        2 million prosperity, becoming one
        of the most established guilds in
        the jianghu.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(23,27,39,0.85)',
    marginHorizontal: 20,
    marginTop: 25,
    padding: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },

  badge: {
    color: '#D9A7BC',
    fontSize: 14,
    marginBottom: 10,
  },

  title: {
    color: '#F3E5EC',
    fontSize: 34,
    fontWeight: 'bold',
  },

  description: {
    color: '#C7C7C7',
    marginTop: 15,
    lineHeight: 24,
    fontSize: 16,
  },
});