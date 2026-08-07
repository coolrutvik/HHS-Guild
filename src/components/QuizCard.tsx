import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { Quiz } from '../firebase/quizzes';

interface Props {
  quiz: Quiz;
  onPress: () => void;
}

export default function QuizCard({
  quiz,
  onPress,
}: Props) {
  const formatDate = (date: any) => {
  const actualDate =
    typeof date?.toDate === 'function'
      ? date.toDate()
      : date;

  return actualDate.toLocaleString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {quiz.title}
      </Text>

      <Text style={styles.description}>
        {quiz.description}
      </Text>

      <Text style={styles.info}>
        ⏱ {quiz.secondsPerQuestion} sec/question
      </Text>

      <Text style={styles.status}>
        {quiz.status.toUpperCase()}
      </Text>

      <Text style={styles.label}>
        Opens
      </Text>

      <Text style={styles.value}>
        {formatDate(quiz.startTime)}
      </Text>

      {quiz.type === 'live' && (
        <>
          <Text style={styles.label}>
            Join Code
          </Text>

          <Text style={styles.code}>
            {quiz.joinCode}
          </Text>
        </>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>
          OPEN QUIZ ROOM
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(15,15,20,0.75)',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    padding: 20,
    marginBottom: 20,
  },

  title: {
    color: '#F3E5EC',
    fontSize: 22,
    fontWeight: 'bold',
  },

  description: {
    color: '#F6D2D2',
    marginTop: 8,
    fontSize: 15,
  },

  info: {
    color: '#FBB7D9',
    marginTop: 12,
  },

  status: {
    color: '#FBB7D9',
    marginTop: 12,
    fontWeight: 'bold',
  },

  label: {
    color: '#FBB7D9',
    marginTop: 15,
    fontWeight: '600',
  },

  value: {
    color: '#FFF',
    marginTop: 5,
  },

  code: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 5,
  },

  button: {
    marginTop: 20,
    backgroundColor: '#FBB7D9',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#090B12',
    fontWeight: 'bold',
    fontSize: 16,
  },
});