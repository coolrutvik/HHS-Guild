import React, { useEffect } from 'react';
import auth from '@react-native-firebase/auth';

import { useAuth } from '../context/AuthContext';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

import PendingApprovalScreen from '../screens/PendingApprovalScreen';

import { getUserProfile } from '../firebase/auth';

type AuthStatus = 'approved' | 'pending' | 'blocked' | 'loading';

export default function AuthGate() {
  const {
  user,
  setUser,
  profile,
  setProfile,
  status,
  setStatus,
} = useAuth();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async currentUser => {

     if (!currentUser) {
         setUser(null);
         setProfile(null);
         setStatus('blocked');
         return;
    }

      try {
        const profile = await getUserProfile(currentUser.uid);
        setProfile(profile as any);

        console.log('Firebase User:', currentUser.email);
        console.log('Firestore Profile:', profile);

        setUser(currentUser);

        if (!profile) {
          setStatus('blocked');
          return;
        }

        switch (profile.status) {
          case 'approved':
            setStatus('approved');
            break;

          case 'pending':
            setStatus('pending');
            break;

          default:
            setStatus('blocked');
        }

      } catch (error) {
        console.log(error);
        setStatus('blocked');
      }

    });

    return unsubscribe;
  }, []);

  if (status === 'loading') {
    return null;
  }

  if (!user) {
    return <AuthNavigator />;
  }

  if (status === 'pending') {
    return <PendingApprovalScreen />;
  }

  if (status === 'approved') {
    return <AppNavigator />;
  }

  return <AuthNavigator />;
}