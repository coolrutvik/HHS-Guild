import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function AboutSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        WHO WE ARE
      </Text>

      <Text style={styles.description}>
        We play Where Winds Meet (WWM), a casual SEA English guild and
        community for the jianghu.
      </Text>

      <Text style={styles.description}>
        Chill runs, clear comms, and good company on the long road.
      </Text>

      <Text style={styles.description}>
        No elitist drama, just cultivators who show up, help each other,
        and enjoy the game together.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(23,27,39,0.85)',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 20,

    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },

  title: {
    color: '#F3E5EC',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  description: {
    color: '#C7C7C7',
    fontSize: 16,
    lineHeight: 28,
    marginBottom: 10,
  },
});