import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import AppBackground from '../components/AppBackground';
import FooterSection from '../components/FooterSection';

export default function QuizzesScreen() {
  const navigation = useNavigation<any>();
 return (
  <AppBackground>
    <ScrollView style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.smallTitle}>
          HIGHHEAVENSECT • QUIZZES
        </Text>

        <Text style={styles.title}>
          QUIZZES
        </Text>

        <Text style={styles.subtitle}>
          Test your knowledge and participate in guild quizzes.
        </Text>
      </View>

      <View style={styles.quizCard}>

  <Text style={styles.quizTitle}>
    HIGHHEAVENSECT FIRST QUIZ
  </Text>

  <Text style={styles.quizDescription}>
    Heavenly Tournament • 20 seconds per question
  </Text>

  <Text style={styles.quizStatus}>
    Status: Scheduled (Locked)
  </Text>

  <Text style={styles.quizTime}>
    Opens: Sat, 27 Jun • 8:00 PM IST
  </Text>

  <Text style={styles.quizCode}>
    Code: a2ac5493
  </Text>

  <TouchableOpacity
  style={styles.quizButton}
  onPress={() => navigation.navigate('QuizRoom')}
>
    <Text style={styles.quizButtonText}>
      OPEN QUIZ ROOM
    </Text>
  </TouchableOpacity>

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

  quizCard: {
  backgroundColor: 'rgba(15,15,20,0.75)',
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.15)',
  borderRadius: 20,
  padding: 20,
  marginBottom: 20,
},

quizTitle: {
  color: '#F3E5EC',
  fontSize: 21.3,
  fontWeight: 'bold',
},

quizDescription: {
  color: '#F6D2D2',
  fontSize: 16,
  marginTop: 10,
},

quizStatus: {
  color: '#fbb7d9',
  fontSize: 16,
  marginTop: 10,
},

quizTime: {
  color: '#FFFFFF',
  marginTop: 8,
},

quizCode: {
  color: '#FFD26A',
  fontWeight: 'bold',
  marginTop: 12,
},

quizButton: {
  backgroundColor: '#fbb7d9',
  borderRadius: 12,
  paddingVertical: 14,
  alignItems: 'center',
  marginTop: 20,
},

quizButtonText: {
  color: '#090B12',
  fontWeight: 'bold',
  fontSize: 16,
},
});