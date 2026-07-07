import React, { createContext, useContext, useState } from 'react';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export type UserStatus =
  | 'approved'
  | 'pending'
  | 'blocked'
  | 'loading';

type UserProfile = {
  email: string;
  nickname: string;
  guildRole: string;
  status: string;
  createdAt?: string;
};

type AuthContextType = {
  user: FirebaseAuthTypes.User | null;
  setUser: React.Dispatch<
    React.SetStateAction<FirebaseAuthTypes.User | null>
  >;

  profile: UserProfile | null;
  setProfile: React.Dispatch<
    React.SetStateAction<UserProfile | null>
  >;

  status: UserStatus;
  setStatus: React.Dispatch<
    React.SetStateAction<UserStatus>
  >;
};

const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] =
    useState<FirebaseAuthTypes.User | null>(null);

  const [profile, setProfile] =
    useState<UserProfile | null>(null);

  const [status, setStatus] =
    useState<UserStatus>('loading');

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        profile,
        setProfile,
        status,
        setStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuth must be used inside AuthProvider'
    );
  }

  return context;
}