import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export interface QuestionData {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface Props {
  index: number;
  data: QuestionData;

  onQuestionChange: (text: string) => void;

  onOptionChange: (
    optionIndex: number,
    text: string
  ) => void;

  onCorrectAnswerChange: (
    optionIndex: number
  ) => void;

  onDelete?: () => void;
}

const optionLabels = ['A', 'B', 'C', 'D'];

export default function QuestionEditor({
  index,
  data,
  onQuestionChange,
  onOptionChange,
  onCorrectAnswerChange,
  onDelete,
}: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Question {index + 1}
        </Text>

        {index > 0 && (
          <TouchableOpacity
            onPress={onDelete}
          >
            <Text style={styles.delete}>
              Delete
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.label}>
        Question
      </Text>

      <TextInput
        style={[
          styles.input,
          styles.questionInput,
        ]}
        multiline
        placeholder="Enter your question..."
        placeholderTextColor="#777"
        value={data.question}
        onChangeText={onQuestionChange}
      />

      {data.options.map((option, optionIndex) => (
        <View
          key={optionIndex}
          style={styles.optionContainer}
        >
          <Text style={styles.label}>
            Option {optionLabels[optionIndex]}
          </Text>

          <TextInput
            style={styles.input}
            placeholder={`Option ${optionLabels[optionIndex]}`}
            placeholderTextColor="#777"
            value={option}
            onChangeText={(text) =>
              onOptionChange(
                optionIndex,
                text
              )
            }
          />
        </View>
      ))}

      <Text style={styles.label}>
        Correct Answer
      </Text>

      <View style={styles.answerRow}>
        {optionLabels.map(
          (label, optionIndex) => (
            <TouchableOpacity
              key={label}
              style={[
                styles.answerButton,
                data.correctAnswer ===
                  optionIndex &&
                  styles.selectedAnswer,
              ]}
              onPress={() =>
                onCorrectAnswerChange(
                  optionIndex
                )
              }
            >
              <Text
                style={[
                  styles.answerText,
                  data.correctAnswer ===
                    optionIndex &&
                    styles.selectedAnswerText,
                ]}
              >
                {label}
              </Text>
            </TouchableOpacity>
          )
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor:
      'rgba(15,15,20,0.75)',

    borderRadius: 20,

    borderWidth: 1,
    borderColor:
      'rgba(255,255,255,0.15)',

    padding: 20,
    marginBottom: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: 20,
  },

  title: {
    color: '#F3E5EC',
    fontSize: 24,
    fontWeight: 'bold',
  },

  delete: {
    color: '#FF6B6B',
    fontWeight: '700',
    fontSize: 15,
  },

  label: {
    color: '#FBB7D9',
    fontSize: 15,
    fontWeight: '600',

    marginBottom: 8,
    marginTop: 10,
  },

  input: {
    backgroundColor:
      'rgba(255,255,255,0.05)',

    borderRadius: 14,

    borderWidth: 1,
    borderColor:
      'rgba(255,255,255,0.08)',

    color: '#FFFFFF',

    paddingHorizontal: 15,
    paddingVertical: 14,

    fontSize: 16,
  },

  questionInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },

  optionContainer: {
    marginTop: 10,
  },

  answerRow: {
    flexDirection: 'row',
    justifyContent:
      'space-between',

    marginTop: 15,
  },

  answerButton: {
    width: 65,
    height: 50,

    borderRadius: 14,

    borderWidth: 1,
    borderColor:
      'rgba(255,255,255,0.15)',

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor:
      'rgba(255,255,255,0.05)',
  },

  selectedAnswer: {
    backgroundColor: '#FBB7D9',
    borderColor: '#FBB7D9',
  },

  answerText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },

  selectedAnswerText: {
    color: '#111111',
  },
});