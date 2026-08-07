import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';

import {
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import AppBackground from '../components/AppBackground';
import FooterSection from '../components/FooterSection';

import QuestionEditor, {
  QuestionData,
} from '../components/QuestionEditor';

import {
  updateQuizQuestions,
  publishQuiz,
} from '../firebase/quizzes';

export default function QuestionBuilderScreen() {
  const navigation: any = useNavigation();

const route: any = useRoute();

const { quizId } = route.params;
  const [questions, setQuestions] = useState<QuestionData[]>([
    {
      question: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
    },
  ]);

  const updateQuestion = (
    index: number,
    data: Partial<QuestionData>
  ) => {
    const updated = [...questions];

    updated[index] = {
      ...updated[index],
      ...data,
    };

    setQuestions(updated);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: '',
        options: ['', '', '', ''],
        correctAnswer: 0,
      },
    ]);
  };

  const deleteQuestion = (index: number) => {
    setQuestions(
      questions.filter((_, i) => i !== index)
    );
  };

  const handlePublish = async () => {
  try {
    for (const question of questions) {
      if (!question.question.trim()) {
        Alert.alert(
          'Validation',
          'Please enter every question.'
        );
        return;
      }

      if (
        question.options.some(
          option => !option.trim()
        )
      ) {
        Alert.alert(
          'Validation',
          'Please fill every option.'
        );
        return;
      }
    }

    await updateQuizQuestions(
      quizId,
      questions.map((question, index) => ({
        ...question,
        order: index + 1,
      }))
    );

    await publishQuiz(
      quizId,
      questions.length
    );

    Alert.alert(
      'Success',
      'Quiz published successfully!',
      [
        {
          text: 'OK',
          onPress: () =>
            navigation.navigate('Quizzes'),
        },
      ]
    );
  } catch (error) {
    console.log(error);

    Alert.alert(
      'Error',
      'Failed to publish quiz.'
    );
  }
};

  return (
    <AppBackground>
      <FlatList
        contentContainerStyle={styles.content}
        data={questions}
        keyExtractor={(_, index) =>
          index.toString()
        }
        renderItem={({ item, index }) => (
          <QuestionEditor
            index={index}
            data={item}
            onQuestionChange={(text) =>
              updateQuestion(index, {
                question: text,
              })
            }
            onOptionChange={(
              optionIndex,
              text
            ) => {
              const options = [...item.options];

              options[optionIndex] = text;

              updateQuestion(index, {
                options,
              });
            }}
            onCorrectAnswerChange={(
              answer
            ) =>
              updateQuestion(index, {
                correctAnswer: answer,
              })
            }
            onDelete={() =>
              deleteQuestion(index)
            }
          />
        )}
        ListFooterComponent={
          <>
            <TouchableOpacity
              style={styles.addButton}
              onPress={addQuestion}
            >
              <Text style={styles.buttonText}>
                + Add Another Question
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.publishButton}
              onPress={handlePublish}
            >
              <Text style={styles.publishText}>
                Publish Quiz
              </Text>
            </TouchableOpacity>

            <FooterSection />
          </>
        }
      />
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    paddingTop: 30,
    paddingBottom: 60,
  },

  addButton: {
    backgroundColor: '#FBB7D9',
    borderRadius: 15,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 15,
  },

  publishButton: {
    backgroundColor: '#7C3AED',
    borderRadius: 15,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 30,
  },

  buttonText: {
    color: '#111',
    fontWeight: '700',
    fontSize: 16,
  },

  publishText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 16,
  },
});