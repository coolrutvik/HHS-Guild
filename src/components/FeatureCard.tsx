import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

type Props = {
  title: string;
  icon: any;
  onPress: () => void;
};

export default function FeatureCard({
  title,
  icon,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
    >
      <Ionicons
        name={icon}
        size={32}
        color="#E8D4DF"
      />

      <Text style={styles.cardText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#171B27',
    borderRadius: 16,
    paddingVertical: 30,
    marginBottom: 15,
    alignItems: 'center',
  },

  cardText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
    marginTop: 10,
  },
});