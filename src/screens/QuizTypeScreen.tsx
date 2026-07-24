import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const QuizTypeScreen = () => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Create New Quiz</Text>
      <Text style={styles.subHeading}>
        Select the type of quiz you want to create.
      </Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('QuizDetails', {
            type: 'scheduled',
          })
        }
      >
        <Text style={styles.cardTitle}>📅 Scheduled Quiz</Text>
        <Text style={styles.cardDescription}>
          Opens automatically during a scheduled time window.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate('QuizDetails', {
            type: 'live',
          })
        }
      >
        <Text style={styles.cardTitle}>⚡ Live Quiz</Text>
        <Text style={styles.cardDescription}>
          Host-controlled quiz with players joining in real time.
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default QuizTypeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subHeading: {
    color: '#BDBDBD',
    fontSize: 16,
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#1F2937',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#374151',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  cardDescription: {
    color: '#D1D5DB',
    fontSize: 15,
    lineHeight: 22,
  },
});