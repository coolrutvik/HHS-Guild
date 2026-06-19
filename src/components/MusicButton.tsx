import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

export default function MusicButton() {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    async function loadMusic() {
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/audio/HHS-Theme.mp3'),
        {
          shouldPlay: true,
          isLooping: true,
          volume: 0.5,
        }
      );

      setSound(sound);
    }

    loadMusic();

    return () => {
      sound?.unloadAsync();
    };
  }, []);

  async function toggleMusic() {
    if (!sound) return;

    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }

    setIsPlaying(!isPlaying);
  }

  return (
    <TouchableOpacity
      onPress={toggleMusic}
      style={{
        position: 'absolute',
        top: 50,
        right: 20,
        zIndex: 999,
      }}
    >
      <Ionicons
        name={isPlaying ? 'volume-high' : 'volume-mute'}
        size={28}
        color="white"
      />
    </TouchableOpacity>
  );
}