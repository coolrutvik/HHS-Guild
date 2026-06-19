import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';

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

      <TouchableOpacity
        style={styles.discordButton}
        onPress={() =>
          Linking.openURL('https://discord.com/invite/erogetof')
        }
      >
        <Text style={styles.discordTitle}>
          JOIN US ON DISCORD
        </Text>

        <Text style={styles.discordLink}>
          discord.gg/erogetof
        </Text>
      </TouchableOpacity>

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

  discordButton: {
    marginTop: 25,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 30,
    alignItems: 'center',
  },

  discordTitle: {
    color: '#F3E5EC',
    fontSize: 18,
    fontWeight: '600',
  },

  discordLink: {
    color: '#D9D9D9',
    marginTop: 6,
    fontSize: 14,
  },

  copyright: {
    color: '#707070',
    marginTop: 20,
    fontSize: 12,
  },
});