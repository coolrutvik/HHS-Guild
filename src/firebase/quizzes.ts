import firestore from '@react-native-firebase/firestore';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  order: number;
}

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
  createdAt: Date;
  published: boolean;
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

    batch.set(docRef, question);
  });

  await batch.commit();
};

export const publishQuiz = async (
  quizId: string,
  status: Quiz['status']
) => {
  await db
    .collection('quizzes')
    .doc(quizId)
    .update({
      published: true,
      status,
    });
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
  userId: string,
  nickname: string,
  score: number,
  totalQuestions: number
) => {
  await db.collection('quizAttempts').add({
    quizId,
    userId,
    nickname,
    score,
    totalQuestions,
    submittedAt: new Date().toISOString(),
  });
};