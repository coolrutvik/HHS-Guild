import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SeasonRewindScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Season Rewind</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Guild Ranking</Text>
        <Text style={styles.cardText}>Top 10</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Members Recruited</Text>
        <Text style={styles.cardText}>150+</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Guild Activities</Text>
        <Text style={styles.cardText}>24/7 Active</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090B12',
    padding: 20,
  },

  title: {
    color: '#E8D4DF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#171B27',
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
  },

  cardTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },

  cardText: {
    color: '#B0B0B0',
    marginTop: 8,
  },
});