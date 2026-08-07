import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface Props {
  title: string;
  description: string;
  totalQuestions: number;
  secondsPerQuestion: number;
  nickname: string;
  onJoin: () => void;
}

export default function QuizLobby({
  title,
  description,
  totalQuestions,
  secondsPerQuestion,
  nickname,
  onJoin,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.smallTitle}>
        HIGHHEAVENSECT • QUIZ ROOM
      </Text>

      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.description}>
        {description}
      </Text>

      <View style={styles.infoBox}>
        <Text style={styles.info}>
          Questions: {totalQuestions}
        </Text>

        <Text style={styles.info}>
          {secondsPerQuestion} sec / question
        </Text>
      </View>

      <Text style={styles.welcome}>
        Welcome
      </Text>

      <Text style={styles.nickname}>
        {nickname}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onJoin}
      >
        <Text style={styles.buttonText}>
          JOIN QUIZ
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
  },

  smallTitle: {
    color: '#FBB7D9',
    fontSize: 14,
  },

  title: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 8,
  },

  description: {
    color: '#D9C7CF',
    marginTop: 10,
    lineHeight: 22,
  },

  infoBox: {
    marginTop: 20,
  },

  info: {
    color: '#FBB7D9',
    fontSize: 15,
    marginBottom: 6,
  },

  welcome: {
    color: '#D9C7CF',
    marginTop: 25,
  },

  nickname: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 6,
  },

  button: {
    marginTop: 30,
    backgroundColor: '#FBB7D9',
    borderRadius: 15,
    paddingVertical: 16,
    alignItems: 'center',
  },

  buttonText: {
    color: '#111',
    fontWeight: '700',
    fontSize: 16,
  },
});