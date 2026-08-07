import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

import { useAuth } from '../context/AuthContext';

import {
  submitQuizAttempt,
} from '../firebase/quizzes';

import { useNavigation, useRoute } from '@react-navigation/native';

import AppBackground from '../components/AppBackground';
import FooterSection from '../components/FooterSection';

export default function QuestionPlayer() {
  const navigation: any = useNavigation();
  const route: any = useRoute();
  const { profile } = useAuth();

  const { quiz, username, questions } = route.params;

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
  useState<number | null>(null);

  const [answers, setAnswers] =
  useState<number[]>(
    Array(questions.length).fill(-1)
  );

  const question = questions[currentQuestion];

const nextQuestion = async () => {
  if (selectedAnswer === null) {
    Alert.alert(
      'Select an answer',
      'Please choose an option first.'
    );
    return;
  }

  const updatedAnswers = [...answers];
  updatedAnswers[currentQuestion] = selectedAnswer;
  setAnswers(updatedAnswers);

  if (currentQuestion === questions.length - 1) {

    let score = 0;

    updatedAnswers.forEach((answer, index) => {
      if (
        answer ===
        questions[index].correctAnswer
      ) {
        score++;
      }
    });

    try {

      await submitQuizAttempt(
        quiz.id,
        profile?.email ?? '',
        username,
        score,
        questions.length
      );

      Alert.alert(
  'Quiz Completed 🎉',
  `Score: ${score}/${questions.length}`,
  [
    {
      text: 'OK',
      onPress: () => navigation.goBack(),
    },
  ]
);

    } catch (e) {
      console.log(e);

      Alert.alert(
        'Error',
        'Failed to submit quiz.'
      );
    }

    return;
  }

  setCurrentQuestion(currentQuestion + 1);
  setSelectedAnswer(null);
};

    return (
    <AppBackground>
      <ScrollView
        contentContainerStyle={
          styles.container
        }
      >
        <Text style={styles.title}>
          {quiz.title}
        </Text>

        <Text style={styles.subtitle}>
          {username}
        </Text>

        <Text style={styles.counter}>
          Question {currentQuestion + 1} /{' '}
          {questions.length}
        </Text>

        <View style={styles.card}>
          <Text style={styles.question}>
            {question.question}
          </Text>

          {question.options.map(
            (
              option: string,
              index: number
            ) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.option,
                  selectedAnswer === index &&
                    styles.selectedOption,
                ]}
                onPress={() =>
                  setSelectedAnswer(index)
                }
              >
                <Text
                  style={styles.optionText}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            )
          )}

          <TouchableOpacity
            style={styles.button}
            onPress={nextQuestion}
          >
            <Text
              style={styles.buttonText}
            >
              {currentQuestion ===
              questions.length - 1
                ? 'SUBMIT QUIZ'
                : 'NEXT'}
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
    padding: 20,
    paddingTop: 30,
    paddingBottom: 60,
  },

  title: {
    color: '#F3E5EC',
    fontSize: 30,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#FBB7D9',
    marginTop: 8,
    marginBottom: 20,
  },

  counter: {
    color: '#FFF',
    marginBottom: 20,
  },

  card: {
    backgroundColor:
      'rgba(15,15,20,0.75)',
    borderRadius: 20,
    padding: 20,
  },

  question: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  option: {
    backgroundColor:
      'rgba(255,255,255,0.08)',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },

  selectedOption: {
    backgroundColor: '#FBB7D9',
  },

  optionText: {
    color: '#FFF',
    fontSize: 16,
  },

  button: {
    backgroundColor: '#FBB7D9',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#111',
    fontWeight: '700',
    fontSize: 16,
  },
});