import React from 'react';
import {
  ImageBackground,
  StyleSheet,
} from 'react-native';

export default function AppBackground({
  children,
}: any) {
  return (
    <ImageBackground
      source={require('../../assets/images/HHS-BG.png')}
      style={styles.background}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});