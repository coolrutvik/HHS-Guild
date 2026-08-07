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
import QuizCard from '../components/QuizCard';
import QuizHeader from '../components/QuizHeader';
import AppBackground from '../components/AppBackground';
import FooterSection from '../components/FooterSection';

export default function QuizListScreen() {
  const navigation: any = useNavigation();

  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('QuizListScreen mounted');

    const unsubscribe = subscribeToQuizzes((data) => {
      console.log('QUIZZES:', data);

      setQuizzes(data);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#FFFFFF" />
      </View>
    );
  }

return (
  <AppBackground>
    <FlatList
      contentContainerStyle={styles.content}
      data={quizzes}
      keyExtractor={(item) => item.id!}
      ListHeaderComponent={<QuizHeader />}
      ListFooterComponent={<FooterSection />}
      ListEmptyComponent={
        <View style={styles.emptyCard}>
          <Text style={styles.emptyTitle}>
            No quizzes available
          </Text>

          <Text style={styles.emptyDescription}>
            Create your first quiz to get started.
          </Text>
        </View>
      }
      renderItem={({ item }) => (
        <QuizCard
          quiz={item}
          onPress={() =>
            navigation.navigate('QuizRoom', {
              quiz: item,
            })
          }
        />
      )}
    />
  </AppBackground>
);
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
},

center: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},

content: {
  paddingHorizontal: 20,
  paddingTop: 30,
  paddingBottom: 60,
},

emptyCard: {
  marginTop: 10,

  backgroundColor: 'rgba(15,15,20,0.75)',

  borderRadius: 20,

  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.15)',

  paddingVertical: 45,
  paddingHorizontal: 25,

  alignItems: 'center',
},

emptyTitle: {
  color: '#F3E5EC',
  fontSize: 24,
  fontWeight: 'bold',
},

emptyDescription: {
  color: '#D9C7CF',
  marginTop: 12,
  textAlign: 'center',
  fontSize: 16,
  lineHeight: 24,
},



});