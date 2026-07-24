import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../context/AuthContext';
import { canAccessAdminPanel } from '../utils/permissions';


export default function FeatureGrid() {
    const navigation: any = useNavigation();
    const { profile } = useAuth();

    const features = [
                     'Profile',
                     'Schedule',
                     'Announcements',
                     'Quizzes',
                     'Giveaways',
                     'Members',
                     'Recruitment',
                     'Leadership',
                     'Gallery',
                     ];

if (canAccessAdminPanel(profile?.guildRole)) {
  features.push('Admin Panel');
}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        FEATURES
      </Text>

      <View style={styles.grid}>
        {features.map(feature => (
          <TouchableOpacity
          key={feature}
          style={styles.card}
         onPress={() => {
  if (feature === 'Members') {
    navigation.navigate('Members');
  }

  if (feature === 'Leadership') {
    navigation.navigate('Leadership');
  }

  if (feature === 'Recruitment') {
    navigation.navigate('Recruitment');
  }

  if (feature === 'Schedule') {
    navigation.navigate('Schedule');
  }

  if (feature === 'Announcements') {
    navigation.navigate('Announcements');
  }

  if (feature === 'Quizzes') {
    navigation.navigate('Quizzes');
  }

  if (feature === 'Giveaways') {
    navigation.navigate('Giveaways');
  }

  if (feature === 'Gallery') {
    navigation.navigate('Gallery');
  }

  if (feature === 'Admin Panel') {
    navigation.navigate('AdminPanel');
  }

  if (feature === 'Profile') {
  navigation.navigate('Profile');
  }
}}
>
  <Text style={styles.cardText}>
    {feature}
  </Text>
</TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginHorizontal: 20,
  },

  title: {
    color: '#F3E5EC',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48%',
    backgroundColor: 'rgba(23,27,39,0.85)',
    borderRadius: 18,
    paddingVertical: 30,
    marginBottom: 15,
    alignItems: 'center',

    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },

  cardText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});