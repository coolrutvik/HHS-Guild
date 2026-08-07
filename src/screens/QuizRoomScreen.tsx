import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';

import {
  hasUserAttemptedQuiz,
  subscribeToLeaderboard,
  QuizAttempt,
} from '../firebase/quizzes';

import { useNavigation } from '@react-navigation/native';
import AppBackground from '../components/AppBackground';
import FooterSection from '../components/FooterSection';
import { getQuizQuestions } from '../firebase/quizzes';
import { useAuth } from '../context/AuthContext';

export default function QuizRoomScreen() {
  const navigation: any = useNavigation();
  const [username, setUsername] = useState('');
  const [leaderboard, setLeaderboard] = useState<QuizAttempt[]>([]);
  const route: any = useRoute();
  const initialQuiz = route.params?.quiz;

const [quiz, setQuiz] =
  useState(initialQuiz);
  
  useEffect(() => {
    console.log('Leaderboard quizId:', quiz.id);
  if (!quiz?.id) {
    return;
  }

  const unsubscribe = subscribeToLeaderboard(
    quiz.id,
    setLeaderboard
  );

  return unsubscribe;
}, [quiz]);

if (!quiz) {
  return (
    <AppBackground>
      <ActivityIndicator
        size="large"
        color="#FBB7D9"
        style={{ flex: 1 }}
      />
    </AppBackground>
  );
}

  const { profile } = useAuth();
  console.log('Logged in email:', profile?.email);
  console.log('Quiz creator email:', quiz.createdByEmail);

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
    🏆 PAST LEADERBOARD
  </Text>

  {leaderboard.map((item, index) => (
  <View
    key={item.id}
    style={styles.leaderboardRow}
  >
    <Text style={styles.rankText}>
      #{index + 1}
    </Text>

    <Text style={styles.playerText}>
      {item.nickname}
    </Text>

    <Text style={styles.scoreText}>
      {item.score}/{item.totalQuestions}
    </Text>
  </View>
))}

{leaderboard.length === 0 && (
  <Text style={styles.playerText}>
    No attempts yet.
  </Text>
)}

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
  value={username}
  onChangeText={setUsername}
/>

<TouchableOpacity
  style={styles.lockedButton}
  activeOpacity={0.8}
  onPress={async () => {
    if (!username.trim()) {
      Alert.alert(
        'Username Required',
        'Please enter your username.'
      );
      return;
    }

    try {
      const email = profile?.email;

if (!email) {
  Alert.alert(
    'Error',
    'No email found.'
  );
  return;
}

const attempted =
  await hasUserAttemptedQuiz(
    quiz.id,
    email
  );

if (attempted) {
  Alert.alert(
    'Quiz Already Attempted',
    'You have already attempted this quiz.'
  );
  return;
}

      const questions = await getQuizQuestions(
        quiz.id
      );

      if (questions.length === 0) {
        Alert.alert(
          'No Questions',
          'This quiz has no questions yet.'
        );
        return;
      }

      navigation.navigate('QuestionPlayer', {
        quiz,
        username,
        questions,
      });

    } catch (e) {
      console.log(e);

      Alert.alert(
        'Error',
        'Failed to load quiz questions.'
      );
    }
  }}
>
  <Text style={styles.lockedButtonText}>
    JOIN QUIZ
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