import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import DateTimeField from '../components/DateTimeField';
import { createQuiz } from '../firebase/quizzes';
import { useAuth } from '../context/AuthContext';

export default function QuizDetailsScreen() {
  const navigation: any = useNavigation();

  const { user, profile } = useAuth();

  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [type, setType] = useState<
    'scheduled' | 'live'
  >('scheduled');

  const [startTime, setStartTime] =
    useState(new Date());

  const [endTime, setEndTime] =
    useState(
      new Date(Date.now() + 60 * 60 * 1000)
    );

  const generateJoinCode = () => {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    let code = '';

    for (let i = 0; i < 6; i++) {
      code += chars[
        Math.floor(Math.random() * chars.length)
      ];
    }

    return code;
  };

  const handleContinue = async () => {
    if (!title.trim()) {
      Alert.alert(
        'Validation',
        'Please enter a quiz title.'
      );
      return;
    }

    if (
      type === 'scheduled' &&
      endTime <= startTime
    ) {
      Alert.alert(
        'Validation',
        'End time must be after start time.'
      );
      return;
    }

    try {
      setLoading(true);

      const quizId = await createQuiz({
        title,
        description,
        type,

        status: 'draft',

        joinCode:
          type === 'live'
            ? generateJoinCode()
            : '',

        startTime,

        endTime:
          type === 'scheduled'
            ? endTime
            : undefined,

        totalQuestions: 0,
        secondsPerQuestion: 20,

        createdByUid: user?.uid ?? '',

        createdByName:
          profile?.nickname ?? '',

        createdByEmail: profile?.email ?? '',

        createdAt: new Date(),

        published: false,
      });

      navigation.navigate(
        'QuestionBuilder',
        {
          quizId,
        }
      );
    } catch (error) {
      console.log(error);

      Alert.alert(
        'Error',
        'Failed to create quiz.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingBottom: 60,
      }}
    >
      <Text style={styles.heading}>
        Create Quiz
      </Text>

      <Text style={styles.subHeading}>
        Configure your quiz before adding
        questions.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Quiz Title"
        placeholderTextColor="#888"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={[
          styles.input,
          {
            height: 110,
          },
        ]}
        multiline
        textAlignVertical="top"
        placeholder="Description"
        placeholderTextColor="#888"
        value={description}
        onChangeText={setDescription}
      />

      <Text style={styles.sectionTitle}>
        Quiz Type
      </Text>

      <View style={styles.typeRow}>
        <TouchableOpacity
          style={[
            styles.typeCard,
            type === 'scheduled' &&
              styles.selectedCard,
          ]}
          onPress={() =>
            setType('scheduled')
          }
        >
          <Text style={styles.typeTitle}>
            📅 Scheduled
          </Text>

          <Text style={styles.typeDesc}>
            Available during a time
            window.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.typeCard,
            type === 'live' &&
              styles.selectedCard,
          ]}
          onPress={() => setType('live')}
        >
          <Text style={styles.typeTitle}>
            ⚡ Live
          </Text>

          <Text style={styles.typeDesc}>
            Everyone joins together.
          </Text>
        </TouchableOpacity>
      </View>

      <DateTimeField
        label="Start Time"
        value={startTime}
        onChange={setStartTime}
      />

      {type === 'scheduled' && (
        <DateTimeField
          label="End Time"
          value={endTime}
          onChange={setEndTime}
          minimumDate={startTime}
        />
      )}

      <TouchableOpacity
        style={styles.button}
        disabled={loading}
        onPress={handleContinue}
      >
        {loading ? (
          <ActivityIndicator
            color="#fff"
          />
        ) : (
          <Text style={styles.buttonText}>
            Continue
          </Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1115',
    padding: 20,
  },

  heading: {
    color: '#F3E5EC',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
  },

  subHeading: {
    color: '#D9C7CF',
    marginTop: 10,
    marginBottom: 25,
    fontSize: 16,
    lineHeight: 22,
  },

  input: {
    backgroundColor: 'rgba(23,27,39,0.85)',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 15,
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },

  sectionTitle: {
    color: '#F3E5EC',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },

  typeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },

  typeCard: {
    width: '48%',
    backgroundColor: 'rgba(23,27,39,0.85)',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },

  selectedCard: {
    borderColor: '#FBB7D9',
    borderWidth: 2,
  },

  typeTitle: {
    color: '#FBB7D9',
    fontSize: 18,
    fontWeight: '700',
  },

  typeDesc: {
    color: '#D9C7CF',
    marginTop: 8,
    lineHeight: 20,
  },

  button: {
    marginTop: 20,
    backgroundColor: '#FBB7D9',
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: 'center',
  },

  buttonText: {
    color: '#111',
    fontWeight: 'bold',
    fontSize: 17,
  },
});