import firestore from '@react-native-firebase/firestore';

export interface Quiz {
  id?: string;
  title: string;
  description: string;
  type: 'scheduled' | 'live';
  status: 'draft' | 'scheduled' | 'waiting' | 'running' | 'finished';
  joinCode: string;
  startTime: Date;
  endTime?: Date;
  totalQuestions: number;
  createdByUid: string;
  createdByName: string;
  createdByEmail: string;
  createdAt: Date;
  published: boolean;
  secondsPerQuestion: number;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  order: number;
}

export interface QuizAttempt {
  id?: string;
  quizId: string;
  email: string;
  nickname: string;
  score: number;
  totalQuestions: number;
  submittedAt: any;
}

const db = firestore();

export const createQuiz = async (
  quiz: Omit<Quiz, 'id'>
) => {
  const docRef = await db.collection('quizzes').add({
    ...quiz,
    startTime: firestore.Timestamp.fromDate(quiz.startTime),
    endTime: quiz.endTime
      ? firestore.Timestamp.fromDate(quiz.endTime)
      : null,
    createdAt: firestore.Timestamp.fromDate(quiz.createdAt),
  });

  return docRef.id;
};

export const updateQuizQuestions = async (
  quizId: string,
  questions: QuizQuestion[]
) => {
  const batch = db.batch();

  questions.forEach(question => {
    const docRef = db
      .collection('quizzes')
      .doc(quizId)
      .collection('questions')
      .doc();

    batch.set(docRef, {
  ...question,
  createdAt: firestore.FieldValue.serverTimestamp(),
});
  });

  await batch.commit();
};

export const publishQuiz = async (
  quizId: string,
  totalQuestions: number
) => {
  await db
    .collection('quizzes')
    .doc(quizId)
    .update({
      published: true,
      status: 'scheduled',
      totalQuestions,
      publishedAt: firestore.FieldValue.serverTimestamp(),
    });
};

export const getQuizQuestions = async (
  quizId: string
) => {
  const snapshot = await db
    .collection('quizzes')
    .doc(quizId)
    .collection('questions')
    .orderBy('order')
    .get();

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...(doc.data() as QuizQuestion),
  }));
};

export const subscribeToQuizzes = (
  callback: (quizzes: Quiz[]) => void
) => {
  return db
    .collection('quizzes')
    .orderBy('createdAt', 'desc')
    .onSnapshot(snapshot => {
      const quizzes: Quiz[] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<Quiz, 'id'>),
      }));

      callback(quizzes);
    });
};

export const submitQuizAttempt = async (
  quizId: string,
  email: string,
  nickname: string,
  score: number,
  totalQuestions: number
) => {
  await db.collection('quizAttempts').add({
    quizId,
    email,
    nickname,
    score,
    totalQuestions,
    submittedAt:  firestore.FieldValue.serverTimestamp(),
  });
};

export const hasUserAttemptedQuiz = async (
  quizId: string,
  email: string
) => {
  const snapshot = await db
    .collection('quizAttempts')
    .where('quizId', '==', quizId)
    .where('email', '==', email)
    .limit(1)
    .get();

  return !snapshot.empty;
};

export const subscribeToLeaderboard = (
  quizId: string,
  callback: (data: QuizAttempt[]) => void
) => {
  console.log('Querying leaderboard for quizId:', quizId);
  return db
    .collection('quizAttempts')
    .where('quizId', '==', quizId)
    .orderBy('score', 'desc')
    .orderBy('submittedAt', 'asc')
    .onSnapshot(
      snapshot => {
        if (!snapshot) {
          callback([]);
          return;
        }

        callback(
          snapshot.docs.map(doc => ({
            id: doc.id,
            ...(doc.data() as QuizAttempt),
          }))
        );
      },
      error => {
        console.log('Leaderboard Error:', error);
        callback([]);
      }
    );
};

export const startQuiz = async (quizId: string) => {
  await db
    .collection('quizzes')
    .doc(quizId)
    .update({
      status: 'running',
    });
};

export const endQuiz = async (quizId: string) => {
  await db
    .collection('quizzes')
    .doc(quizId)
    .update({
      status: 'closed',
    });
};

export const subscribeToQuiz = (
  quizId: string,
  callback: (quiz: Quiz | null) => void
) => {
  return db
    .collection('quizzes')
    .doc(quizId)
    .onSnapshot(doc => {
      if (!doc.exists) {
        callback(null);
        return;
      }

      callback({
        id: doc.id,
        ...(doc.data() as Quiz),
      });
    });
};