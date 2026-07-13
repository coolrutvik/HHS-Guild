import firestore from '@react-native-firebase/firestore';

const db = firestore();

export const getEvents = async () => {
  const snapshot = await db
    .collection('events')
    .orderBy('createdAt', 'desc')
    .get();

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const addEvent = async (
  title: string,
  description: string,
  date: string,
  time: string,
  createdBy: string
) => {
  await db.collection('events').add({
    title,
    description,
    date,
    time,
    createdBy,
    createdAt: new Date().toISOString(),
  });
};

export const subscribeToEvents = (
  callback: (events: any[]) => void
) => {
  return db
    .collection('events')
    .orderBy('createdAt', 'desc')
    .onSnapshot(snapshot => {
      const events = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      callback(events);
    });
};