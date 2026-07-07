import React, { useState } from 'react';
import {
  View,
 Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import { Alert } from 'react-native';
import { signUp } from '../firebase/auth';
import { db } from '../firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { signOut } from '../firebase/auth';


const background = require('../../assets/images/HHS-BG.png');

export default function RegisterScreen() {
  const navigation = useNavigation<any>();
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
  if (!nickname || !email || !password || !confirmPassword) {
    Alert.alert('Error', 'Please fill in all fields.');
    return;
  }

  if (password !== confirmPassword) {
    Alert.alert('Error', 'Passwords do not match.');
    return;
  }

  try {
    const userCredential = await signUp(
      email.trim(),
      password
    );

    await db
      .collection('users')
      .doc(userCredential.user.uid)
      .set({
        email: email.trim(),
        nickname,
        guildRole: 'Member',
        status: 'pending',
        createdAt: new Date().toISOString(),
      });

await signOut();

Alert.alert(
  'Registration Successful',
  'Your account has been created and is waiting for guild approval.'
);

  } catch (error: any) {
    Alert.alert('Registration Failed', error.message);
  }
};

  return (
    <ImageBackground
      source={background}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>HIGH HEAVEN SECT</Text>
        <Text style={styles.subtitle}>Create Your Account</Text>

        <TextInput
          placeholder="In-Game Nickname"
          placeholderTextColor="#888"
          value={nickname}
          onChangeText={setNickname}
          style={styles.input}
        />

        <TextInput
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />

        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.input}
        />

        <TouchableOpacity
            style={styles.button}
            onPress={handleRegister}
        >
         <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
         <Text style={styles.loginText}>
            Already have an account? Login
         </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(9,11,18,0.65)',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },

  title: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitle: {
    color: '#bbb',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
  },

  input: {
    backgroundColor: '#1B2230',
    color: '#fff',
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 16,
    marginBottom: 18,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#8B5CF6',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  loginText: {
    color: '#D8B4FE',
    textAlign: 'center',
    marginTop: 25,
    fontSize: 15,
  },
});