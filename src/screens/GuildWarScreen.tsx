import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import AppBackground from '../components/AppBackground';
import FooterSection from '../components/FooterSection';

const dpsPlayers = [
  'MAIKEE',
  'Sayaka',
  'Sylvely',
  'Beleriand',
  'Carefree',
];

const tankPlayers = [
  'RayAsher',
];

const healerPlayers = [
  'SigmaSSR',
  'CatterMint',
];

const fillPlayers = [
  'Sleepy Linqi',
];

export default function GuildWarScreen() {

  const [ign, setIgn] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  return (
  <AppBackground>
    <ScrollView style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.smallTitle}>
          HIGHHEAVENSECT • GUILD WAR
        </Text>

        <Text style={styles.title}>
          GUILD WAR
        </Text>

        <Text style={styles.subtitle}>
          Sign up for the next Guild War and choose your preferred role.
        </Text>
      </View>
      <View style={styles.infoCard}>

  <View style={styles.infoTop}>

    <View style={styles.infoLeft}>
      <Text style={styles.infoSmall}>
        GUILD WAR SIGNUP
      </Text>

      <Text style={styles.infoTitle}>
        Reminder to Sign Up In Game
      </Text>

      <Text style={styles.infoDate}>
        Sat, 27 Jun • 6:00 PM IST
      </Text>
    </View>

    <View style={styles.slotBox}>
      <Text style={styles.slotLabel}>
        SLOTS
      </Text>

      <Text style={styles.slotCount}>
        11/30
      </Text>

      <Text style={styles.slotOpen}>
        19 Open
      </Text>
    </View>

  </View>

  <View style={styles.noticeBox}>
    <Text style={styles.noticeTitle}>
      IMPORTANT
    </Text>

    <Text style={styles.noticeText}>
      Signing up here does not replace signing up inside the game.
      Please join the Discord voice channel at least five minutes before Guild War begins.
    </Text>
  </View>
</View>

<View style={styles.signupCard}>

  <Text style={styles.signupTitle}>
    SIGN UP
  </Text>

  <Text style={styles.label}>
    In Game Name
  </Text>

  <TextInput
    style={styles.input}
    placeholder="Enter your IGN"
    placeholderTextColor="#8C8C8C"
    value={ign}
    onChangeText={setIgn}
  />

  <Text style={styles.label}>
    Preferred Role
  </Text>

  <View style={styles.roleContainer}>

    {['DPS', 'Tank', 'Healer', 'Can Fill'].map(role => (

      <TouchableOpacity
        key={role}
        style={[
          styles.roleButton,
          selectedRole === role && styles.roleButtonActive,
        ]}
        onPress={() => setSelectedRole(role)}
      >

        <Text
          style={[
            styles.roleText,
            selectedRole === role && styles.roleTextActive,
          ]}
        >
          {role}
        </Text>

      </TouchableOpacity>

    ))}

  </View>

  <TouchableOpacity style={styles.submitButton}>
    <Text style={styles.submitButtonText}>
      SIGN UP
    </Text>
  </TouchableOpacity>

</View>

<View style={styles.rosterCard}>

  <Text style={styles.rosterTitle}>
    CURRENT SIGNUPS
  </Text>

  <View style={styles.roleSection}>
    <Text style={styles.roleHeading}>⚔ DPS</Text>

    {dpsPlayers.map(player => (
      <Text key={player} style={styles.playerName}>
        • {player}
      </Text>
    ))}
  </View>

  <View style={styles.roleSection}>
    <Text style={styles.roleHeading}>🛡 Tank</Text>

    {tankPlayers.map(player => (
      <Text key={player} style={styles.playerName}>
        • {player}
      </Text>
    ))}
  </View>

  <View style={styles.roleSection}>
    <Text style={styles.roleHeading}>💚 Healer</Text>

    {healerPlayers.map(player => (
      <Text key={player} style={styles.playerName}>
        • {player}
      </Text>
    ))}
  </View>

  <View style={styles.roleSection}>
    <Text style={styles.roleHeading}>🔄 Can Fill</Text>

    {fillPlayers.map(player => (
      <Text key={player} style={styles.playerName}>
        • {player}
      </Text>
    ))}
  </View>

</View>

      <FooterSection />

    </ScrollView>
  </AppBackground>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 20,
  },

  headerContainer: {
    backgroundColor: 'rgba(15,15,20,0.65)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    borderRadius: 20,
    padding: 20,
    marginTop: 30,
    marginBottom: 25,
  },

  smallTitle: {
    color: '#fbb7d9',
    fontSize: 15,
  },

  title: {
    color: '#fbb7d9',
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 10,
  },

  subtitle: {
    color: '#f6d2d2',
    fontSize: 16,
    marginTop: 15,
    lineHeight: 24,
  },

  infoCard: {
  backgroundColor: 'rgba(15,15,20,0.75)',
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.15)',
  borderRadius: 20,
  padding: 20,
  marginBottom: 20,

  position: 'relative',
},

infoTop: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
},

infoLeft: {
  paddingRight: 100,
},

infoSmall: {
  color: '#F6D2D2',
  fontSize: 13,
  letterSpacing: 2,
},

infoTitle: {
  color: '#F3E5EC',
  fontSize: 28,
  marginTop: 10,
},

infoDate: {
  color: '#fbb7d9',
  marginTop: 8,
  fontSize: 16,
},

slotBox: {
  position: 'absolute',
  top: 18,
  right: 18,

  width: 105,      // was 90
  height: 110,     // optional
  borderWidth: 1,
  borderColor: '#FFFFFF55',
  borderRadius: 15,
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: 'rgba(15,15,20,0.9)',
},

slotLabel: {
  color: '#FFFFFF',
  fontSize: 12,
},

slotCount: {
  color: '#F3E5EC',
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center',
},

slotOpen: {
  color: '#fbb7d9',
  marginTop: 5,
},

noticeBox: {
  marginTop: 20,
  borderWidth: 1,
  borderColor: '#9C6B17',
  backgroundColor: 'rgba(90,60,10,0.35)',
  borderRadius: 15,
  padding: 15,
},

noticeTitle: {
  color: '#FFD26A',
  fontWeight: 'bold',
  marginBottom: 8,
},

noticeText: {
  color: '#F6D2D2',
  lineHeight: 22,
},

signupCard: {
  backgroundColor: 'rgba(15,15,20,0.75)',
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.15)',
  borderRadius: 20,
  padding: 20,
  marginBottom: 20,
},

signupTitle: {
  color: '#F3E5EC',
  fontSize: 24,
  fontWeight: 'bold',
},

label: {
  color: '#F6D2D2',
  marginTop: 18,
  marginBottom: 8,
},

input: {
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.15)',
  backgroundColor: 'rgba(255,255,255,0.05)',
  borderRadius: 12,
  color: '#FFF',
  paddingHorizontal: 15,
  paddingVertical: 12,
},

roleContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
},

roleButton: {
  width: '48%',
  borderWidth: 1,
  borderColor: '#555',
  borderRadius: 12,
  paddingVertical: 14,
  marginBottom: 10,
  alignItems: 'center',
},

roleButtonActive: {
  backgroundColor: '#fbb7d9',
  borderColor: '#fbb7d9',
},

roleText: {
  color: '#FFF',
  fontWeight: '600',
},

roleTextActive: {
  color: '#090B12',
},

submitButton: {
  backgroundColor: '#fbb7d9',
  borderRadius: 12,
  paddingVertical: 15,
  marginTop: 10,
  alignItems: 'center',
},

submitButtonText: {
  color: '#090B12',
  fontWeight: 'bold',
  fontSize: 16,
},

rosterCard: {
  backgroundColor: 'rgba(15,15,20,0.75)',
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.15)',
  borderRadius: 20,
  padding: 20,
  marginBottom: 20,
},

rosterTitle: {
  color: '#F3E5EC',
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
},

roleSection: {
  marginBottom: 18,
},

roleHeading: {
  color: '#fbb7d9',
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 8,
},

playerName: {
  color: '#F6D2D2',
  fontSize: 15,
  marginBottom: 5,
},
});