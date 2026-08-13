import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../context/AuthContext';
import { updateProfile } from '../firebase/users';
import { refreshUserProfile } from '../firebase/auth';

export default function EditProfileScreen() {
  const navigation: any = useNavigation();

  const { user, profile, setProfile } = useAuth();

  const [nickname, setNickname] = useState(
    profile?.nickname ?? ''
  );

  const [discordUsername, setDiscordUsername] = useState(
    profile?.discordUsername ?? ''
  );

  const [discordId, setDiscordId] = useState(
  profile?.discordId ?? ''
);

const [ign, setIgn] = useState(
  profile?.ign ?? ''
);

  const [bio, setBio] = useState(
    profile?.bio ?? ''
  );

  const saveProfile = async () => {
    if (!user) return;

    try {
      await updateProfile(
        user.uid,
        nickname,
        discordUsername,
        discordId,
        ign,
        bio
      );

      const updated = await refreshUserProfile();

      setProfile(updated as any);

      Alert.alert(
        'Success',
        'Profile updated successfully.'
      );

      navigation.goBack();

    } catch (e) {
      console.log(e);

      Alert.alert(
        'Error',
        'Failed to update profile.'
      );
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
    >

      <Text style={styles.title}>
        Edit Profile
      </Text>

      <Text style={styles.label}>
        Nickname
      </Text>

      <TextInput
        style={styles.input}
        value={nickname}
        onChangeText={setNickname}
      />

      <Text style={styles.label}>
        Discord Username
      </Text>

      <TextInput
        style={styles.input}
        value={discordUsername}
        onChangeText={setDiscordUsername}
      />

      <Text style={styles.label}>
  Discord ID
</Text>

<TextInput
  style={styles.input}
  value={discordId}
  onChangeText={setDiscordId}
/>

<Text style={styles.label}>
  In-Game Name
</Text>

<TextInput
  style={styles.input}
  value={ign}
  onChangeText={setIgn}
/>

      <Text style={styles.label}>
        Bio
      </Text>

      <TextInput
        style={[styles.input, { height: 120 }]}
        multiline
        textAlignVertical="top"
        value={bio}
        onChangeText={setBio}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={saveProfile}
      >
        <Text style={styles.buttonText}>
          SAVE
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#090B12',
    flexGrow: 1,
  },

  title: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  label: {
    color: '#AAA',
    marginTop: 20,
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#171B27',
    color: '#FFF',
    borderRadius: 12,
    padding: 15,
  },

  button: {
    marginTop: 40,
    backgroundColor: '#8B5CF6',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});