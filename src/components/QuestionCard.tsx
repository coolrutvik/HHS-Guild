import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuestionCardProps {
  index: number;
  question: QuizQuestion;
  onChangeQuestion: (text: string) => void;
  onChangeOption: (index: number, text: string) => void;
  onChangeCorrectAnswer: (text: string) => void;
  onDelete: () => void;
}

const QuestionCard = ({
  index,
  question,
  onChangeQuestion,
  onChangeOption,
  onChangeCorrectAnswer,
  onDelete,
}: QuestionCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.heading}>
          Question {index + 1}
        </Text>

        <TouchableOpacity onPress={onDelete}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Enter Question"
        placeholderTextColor="#999"
        value={question.question}
        onChangeText={onChangeQuestion}
      />

      <TextInput
        style={styles.input}
        placeholder="Option A"
        placeholderTextColor="#999"
        value={question.options[0]}
        onChangeText={text => onChangeOption(0, text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Option B"
        placeholderTextColor="#999"
        value={question.options[1]}
        onChangeText={text => onChangeOption(1, text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Option C"
        placeholderTextColor="#999"
        value={question.options[2]}
        onChangeText={text => onChangeOption(2, text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Option D"
        placeholderTextColor="#999"
        value={question.options[3]}
        onChangeText={text => onChangeOption(3, text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Correct Answer"
        placeholderTextColor="#999"
        value={question.correctAnswer}
        onChangeText={onChangeCorrectAnswer}
      />
    </View>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1F2937',
    borderRadius: 14,
    padding: 16,
    marginBottom: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  heading: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  deleteText: {
    color: '#EF4444',
    fontWeight: 'bold',
    fontSize: 14,
  },

  input: {
    backgroundColor: '#111827',
    color: '#FFFFFF',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
});