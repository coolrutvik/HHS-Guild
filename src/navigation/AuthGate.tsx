import React, { useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

import PendingApprovalScreen from '../screens/PendingApprovalScreen';

import { getUserProfile } from '../firebase/auth';

type AuthStatus = 'approved' | 'pending' | 'blocked' | 'loading';

export default function AuthGate() {
  const [user, setUser] =
    useState<FirebaseAuthTypes.User | null>(null);

  const [status, setStatus] =
    useState<AuthStatus>('loading');

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async currentUser => {

      if (!currentUser) {
        setUser(null);
        setStatus('blocked'); // Any non-loading value is fine
        return;
      }

      try {
        const profile = await getUserProfile(currentUser.uid);

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