import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import { Alert, TouchableOpacity } from 'react-native';
import { signOut, refreshUserProfile } from '../firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';

const background = require('../../assets/images/HHS-BG.png');

const handleBackToLogin = async () => {
  await signOut();
};

const handleCheckAgain = async () => {
  const profile = await refreshUserProfile();

  if (!profile) {
    return;
  }

  if (profile.status === 'approved') {
    Alert.alert(
      'Approved!',
      'Your account has been approved.'
    );

    return;
  }

  Alert.alert(
    'Still Pending',
    'Your account is still waiting for approval.'
  );
};



export default function PendingApprovalScreen() {
  return (
    <ImageBackground
      source={background}
      style={styles.background}
      resizeMode="cover"
    >
     <SafeAreaView style={styles.safeArea}>
      <View style={styles.overlay}>
        <Text style={styles.title}>
          Account Pending
        </Text>

        <Text style={styles.message}>
          Your registration was successful.
        </Text>

        <Text style={styles.message}>
          Your account is waiting for admin approval.
        </Text>

        <Text style={styles.message}>
          Please try logging in again later.
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleCheckAgain}
      >
       <Text style={styles.buttonText}>
         Check Again
       </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={handleBackToLogin}
      >
       <Text style={styles.buttonText}>
         Back to Login
       </Text>
      </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(9,11,18,0.65)',
    padding: 25,
  },

  title: {
    fontSize: 34,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 30,
  },

  message: {
    color: '#ddd',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 28,
  },

  button: {
    marginTop: 35,
    backgroundColor: '#8B5CF6',
    paddingVertical: 15,
    paddingHorizontal: 45,
    borderRadius: 12,
  },

  buttonSecondary: {
    marginTop: 15,
    backgroundColor: '#2B3445',
    paddingVertical: 15,
    paddingHorizontal: 45,
    borderRadius: 12,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  safeArea: {
  flex: 1,
},
});