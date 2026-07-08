import { db } from './firestore';

export const getPendingUsers = async () => {
  const snapshot = await db
    .collection('users')
    .where('status', '==', 'pending')
    .get();

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const approveUser = async (uid: string) => {
  await db
    .collection('users')
    .doc(uid)
    .update({
      status: 'approved',
    });
};

export const blockUser = async (uid: string) => {
  await db
    .collection('users')
    .doc(uid)
    .update({
      status: 'blocked',
    });
};