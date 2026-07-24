import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { addAnnouncement } from '../firebase/announcements';
import { useAuth } from '../context/AuthContext';

const AddAnnouncementScreen = ({ navigation }: any) => {
  const { profile } = useAuth();

  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleAddAnnouncement = async () => {
    if (!title.trim() || !message.trim()) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    try {
      await addAnnouncement(
        title,
        message,
        profile?.nickname || 'Unknown'
      );

      Alert.alert('Success', 'Announcement posted successfully.');

      navigation.goBack();
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Failed to post announcement.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Announcement</Text>

      <TextInput
        placeholder="Title"
        placeholderTextColor="#999"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <TextInput
        placeholder="Message"
        placeholderTextColor="#999"
        value={message}
        onChangeText={setMessage}
        style={[styles.input, styles.messageInput]}
        multiline
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleAddAnnouncement}
      >
        <Text style={styles.buttonText}>Post Announcement</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddAnnouncementScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
    padding: 20,
  },
  heading: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#1F2937',
    color: '#fff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 15,
  },
  messageInput: {
    height: 140,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#6D28D9',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});