import auth from '@react-native-firebase/auth';
import { db } from './firestore';

export const signIn = async (email: string, password: string) => {
  return auth().signInWithEmailAndPassword(email, password);
};

export const signUp = async (email: string, password: string) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

export const signOut = async () => {
  return auth().signOut();
};

export const getCurrentUser = () => {
  return auth().currentUser;
};

export const getUserProfile = async (uid: string) => {
  const document = await db.collection('users').doc(uid).get();
  return document.data();
};

export const refreshUserProfile = async () => {
  const user = auth().currentUser;

  if (!user) {
    return null;
  }

  return await getUserProfile(user.uid);
};