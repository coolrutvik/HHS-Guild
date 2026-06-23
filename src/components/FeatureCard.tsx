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
  backgroundColor: 'rgba(20,20,25,0.45)',
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.25)',
  borderRadius: 20,
  paddingVertical: 30,
  marginBottom: 15,
  alignItems: 'center',
},

  cardText: {
  color: '#F3E5EC',
  fontWeight: '700',
  fontSize: 16,
  marginTop: 10,
},
});