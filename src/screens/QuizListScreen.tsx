import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Quiz, subscribeToQuizzes } from '../firebase/quizzes';

const QuizListScreen = () => {
  const navigation: any = useNavigation();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeToQuizzes((data) => {
      setQuizzes(data);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (quizzes.length === 0) {
    return (
      <View style={styles.center}>
        <Text>No quizzes available.</Text>
      </View>
    );
  }

 return (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.createButton}
      onPress={() => navigation.navigate('QuizType')}
    >
      <Text style={styles.createButtonText}>+ Create Quiz</Text>
    </TouchableOpacity>

    <FlatList
      data={quizzes}
      keyExtractor={(item) => item.id!}
      renderItem={({ item }) => (
        <View style={styles.quizItem}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      )}
    />
  </View>
);
};

export default QuizListScreen;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  quizItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
  },

  container: {
    flex: 1,
    backgroundColor: '#111827',
  },

  createButton: {
    margin: 16,
    backgroundColor: '#8B5CF6',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  createButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});