import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import { canAccessAdminPanel } from '../utils/permissions';

export default function QuizHeader() {
  const navigation: any = useNavigation();
  const { profile } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.smallTitle}>
        HIGHHEAVENSECT • QUIZZES
      </Text>

      <Text style={styles.title}>
        QUIZZES
      </Text>

      <Text style={styles.subtitle}>
        Test your knowledge and participate in guild quizzes.
      </Text>

      {canAccessAdminPanel(profile?.guildRole) && (
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('QuizDetails')
          }
        >
          <Text style={styles.buttonText}>
            + Create Quiz
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(15,15,20,0.65)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },

  smallTitle: {
    color: '#FBB7D9',
    fontSize: 14,
  },

  title: {
    color: '#F3E5EC',
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 8,
  },

  subtitle: {
    color: '#D9C7CF',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 10,
  },

  button: {
    alignSelf: 'flex-end',
    marginTop: 20,
    backgroundColor: '#FBB7D9',
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },

  buttonText: {
    color: '#111',
    fontWeight: '700',
    fontSize: 15,
  },
});