import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SeasonRewindCard() {
    const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.badge}>
        REWIND
      </Text>

      <Text style={styles.title}>
        SEASON REWIND
      </Text>

      <Text style={styles.description}>
        Explore our journey through rankings,
        guild growth, major victories and
        unforgettable moments.
      </Text>

      <Text style={styles.sectionTitle}>
         League Rewind Standings
      </Text>

      <Text style={styles.sectionDescription}>
    Latest Season Rewind summary, Guild rank, streaks, and how HighHeavenSect placed in league play.
      </Text>

      <Image
      source={require('../../assets/images/league_rewind.png')}
      style={styles.rewindImage}
      />

      <Text style={styles.sectionTitle}>
          Iron Triangle Trio
      </Text>

      <Text style={styles.sectionDescription}>
    Top performers in damage, tanking pressure, and healing, The carries who shaped our season rewind.
      </Text>

      <Image
      source={require('../../assets/images/iron_triangle.png')}
      style={styles.rewindImage}
      />

     <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('SeasonRewind')}
     >
        <Text style={styles.buttonText}>
          View Rewind
        </Text>
      </TouchableOpacity>
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
    fontSize: 30,
    fontWeight: 'bold',
  },

  description: {
    color: '#C7C7C7',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 12,
  },

  button: {
    marginTop: 20,
    backgroundColor: '#D9A7BC',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },

  buttonText: {
    color: '#000',
    fontWeight: '600',
  },

  sectionTitle: {
  color: '#F3E5EC',
  fontSize: 18,
  fontWeight: '600',
  marginTop: 20,
  marginBottom: 10,
  },

  sectionDescription: {
  color: '#C7C7C7',
  fontSize: 14,
  lineHeight: 22,
  marginBottom: 12,
},

  rewindImage: {
  width: '100%',
  height: 220,
  borderRadius: 16,
  },

});