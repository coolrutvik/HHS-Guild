import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import { useAuth } from '../context/AuthContext';
import { addEvent } from '../firebase/events';

export default function AddEventScreen() {
  const { profile } = useAuth();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSave = async () => {
    if (!title || !date || !time) {
      Alert.alert(
        'Missing Information',
        'Please fill in Title, Date and Time.'
      );
      return;
    }

    await addEvent(
      title,
      description,
      date,
      time,
      profile?.nickname ?? 'Unknown'
    );

    Alert.alert(
      'Success',
      'Guild event created.'
    );

    setTitle('');
    setDescription('');
    setDate('');
    setTime('');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Add Guild Event
      </Text>

      <TextInput
        placeholder="Event Title"
        placeholderTextColor="#888"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Description"
        placeholderTextColor="#888"
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />

      <TextInput
        placeholder="Date (e.g. Saturday)"
        placeholderTextColor="#888"
        style={styles.input}
        value={date}
        onChangeText={setDate}
      />

      <TextInput
        placeholder="Time (e.g. 8:00 PM)"
        placeholderTextColor="#888"
        style={styles.input}
        value={time}
        onChangeText={setTime}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSave}
      >
        <Text style={styles.buttonText}>
          Create Event
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090B12',
    padding: 20,
  },

  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 30,
    textAlign: 'center',
  },

  input: {
    backgroundColor: '#171B27',
    color: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 15,
  },

  button: {
    marginTop: 10,
    backgroundColor: '#8B5CF6',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});