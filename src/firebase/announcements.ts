import firestore from '@react-native-firebase/firestore';

const db = firestore();

export const addAnnouncement = async (
  title: string,
  message: string,
  createdBy: string
) => {
  await db.collection('announcements').add({
    title,
    message,
    createdBy,
    createdAt: new Date().toISOString(),
  });
};

export const subscribeToAnnouncements = (
  callback: (announcements: any[]) => void
) => {
  return db
    .collection('announcements')
    .orderBy('createdAt', 'desc')
    .onSnapshot(snapshot => {
      const announcements = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      callback(announcements);
    });
};