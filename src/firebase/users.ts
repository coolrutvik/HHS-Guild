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

export const getApprovedUsers = async () => {
  const snapshot = await db
    .collection('users')
    .where('status', '==', 'approved')
    .get();

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getBlockedUsers = async () => {
  const snapshot = await db
    .collection('users')
    .where('status', '==', 'blocked')
    .get();

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const unblockUser = async (uid: string) => {
  await db
    .collection('users')
    .doc(uid)
    .update({
      status: 'approved',
    });
};

export const updateGuildRole = async (
  uid: string,
  guildRole: string
) => {
  await db
    .collection('users')
    .doc(uid)
    .update({
      guildRole,
    });
};

export const leaderExists = async () => {
  const snapshot = await db
    .collection('users')
    .where('guildRole', '==', 'Leader')
    .where('status', '==', 'approved')
    .get();

  return !snapshot.empty;
};

export const viceLeaderExists = async () => {
  const snapshot = await db
    .collection('users')
    .where('guildRole', '==', 'Vice-Leader')
    .where('status', '==', 'approved')
    .get();

  return !snapshot.empty;
};