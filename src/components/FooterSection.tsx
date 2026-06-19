import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FooterSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        HIGH HEAVEN SECT
      </Text>

      <Text style={styles.subtitle}>
        Walk The Martial Path Together
      </Text>

      <Text style={styles.description}>
        Where Winds Meet • SEA Community
      </Text>

      <Text style={styles.copyright}>
        © High Heaven Sect
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 25,
    alignItems: 'center',
  },

  title: {
    color: '#F3E5EC',
    fontSize: 24,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#D9A7BC',
    marginTop: 8,
  },

  description: {
    color: '#B0B0B0',
    marginTop: 15,
  },

  copyright: {
    color: '#707070',
    marginTop: 20,
    fontSize: 12,
  },
});