import React from 'react';
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

export default function QuizRoomScreen() {
  return (
    <AppBackground>
      <ScrollView style={styles.container}>

        <View style={styles.headerContainer}>
          <Text style={styles.smallTitle}>
            HIGHHEAVENSECT • QUIZ ROOM
          </Text>

          <Text style={styles.title}>
            HIGHHEAVENSECT FIRST QUIZ
          </Text>

          <Text style={styles.subtitle}>
            Guild Quiz (Join Code)
          </Text>
        </View>

        <View style={styles.leaderboardCard}>

  <Text style={styles.leaderboardTitle}>
    🏆 FINAL LEADERBOARD
  </Text>

  {[
    ['#1', 'Salmon', '8243'],
    ['#2', 'VAASANTH', '7525'],
    ['#3', 'Linqi', '6486'],
    ['#4', 'Lu', '4624'],
    ['#5', 'Sirano', '3281'],
    ['#6', 'Demonsau', '861'],
    ['#7', 'Sylvely (Spectator)', '0'],
  ].map(([rank, name, score]) => (

    <View
      key={rank}
      style={styles.leaderboardRow}
    >

      <Text style={styles.rankText}>
        {rank}
      </Text>

      <Text style={styles.playerText}>
        {name}
      </Text>

      <Text style={styles.scoreText}>
        {score}
      </Text>

    </View>

  ))}

</View>

<View style={styles.joinCard}>

  <Text style={styles.joinTitle}>
    JOIN QUIZ
  </Text>

  <Text style={styles.label}>
    Username
  </Text>

  <TextInput
    style={styles.input}
    placeholder="Enter Username"
    placeholderTextColor="#8C8C8C"
    editable={false}
  />

  <TouchableOpacity
    style={styles.lockedButton}
    activeOpacity={1}
  >
    <Text style={styles.lockedButtonText}>
      JOINING LOCKED
    </Text>
  </TouchableOpacity>

  <Text style={styles.rankTextInfo}>
    Rank: — | No re-entry after start.
  </Text>

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
    color: '#F3E5EC',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },

  subtitle: {
    color: '#f6d2d2',
    fontSize: 16,
    marginTop: 10,
  },

  leaderboardCard: {
  backgroundColor: 'rgba(15,15,20,0.75)',
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.15)',
  borderRadius: 20,
  padding: 20,
  marginBottom: 20,
},

leaderboardTitle: {
  color: '#F3E5EC',
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: 20,
},

leaderboardRow: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 14,
},

rankText: {
  width: 45,
  color: '#fbb7d9',
  fontWeight: 'bold',
},

playerText: {
  flex: 1,
  color: '#F6D2D2',
  fontSize: 16,
},

scoreText: {
  color: '#FFFFFF',
  fontWeight: '700',
},

joinCard: {
  backgroundColor: 'rgba(15,15,20,0.75)',
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.15)',
  borderRadius: 20,
  padding: 20,
  marginBottom: 20,
},

joinTitle: {
  color: '#F3E5EC',
  fontSize: 22,
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

lockedButton: {
  backgroundColor: '#9C7A87',
  borderRadius: 12,
  paddingVertical: 15,
  alignItems: 'center',
  marginTop: 18,
},

lockedButtonText: {
  color: '#090B12',
  fontWeight: 'bold',
  fontSize: 16,
},

rankTextInfo: {
  color: '#F6D2D2',
  marginTop: 18,
  fontSize: 14,
},
});