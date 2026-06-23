import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import ImageViewerModal from './ImageViewerModal';

export default function HeroSection() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.smallTitle}>
        江湖 • HIGHHEAVENSECT
      </Text>

      <Text style={styles.title}>
        HIGHHEAVEN SECT: 
      </Text>

      <Text style={styles.title}>
        WALK THE
      </Text>

      <Text style={styles.title}>
        MARTIAL PATH
      </Text>

      <Text style={styles.title}>
        TOGETHER
      </Text>

      <Text style={styles.subtitle}>
        The Martial Path is long,
        but no cultivator walks it alone.
      </Text>

      <TouchableOpacity style={styles.discordButton}
         onPress={() =>
                  Linking.openURL('https://discord.com/invite/erogetof')
                }
      >
      <Text style={styles.buttonText}>
                JOIN US ON DISCORD
      </Text>

      </TouchableOpacity>
      
      <TouchableOpacity
       onPress={() => setModalVisible(true)}
      >
      
      <Image
         source={require('../../assets/images/guild_showcase.png')}
         style={styles.guildImage}
      />

      </TouchableOpacity>
      
      <ImageViewerModal
         visible={modalVisible}
         imageSource={require('../../assets/images/guild_showcase.png')}
         onClose={() => setModalVisible(false)}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
  },

  smallTitle: {
    color: '#E8C8D6',
    fontSize: 16,
    marginBottom: 10,
  },

  title: {
  color: '#F3E5EC',
  fontSize: 32,
  fontWeight: 'bold',
  lineHeight: 42,
},

  subtitle: {
    color: '#F3E5EC',
    fontSize: 18,
    marginTop: 20,
    lineHeight: 28,
  },

  discordButton: {
    marginTop: 25,
    backgroundColor: '#E3B9CB',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },

  guildImage: {
  width: '100%',
  height: 260,
  marginTop: 25,
  borderRadius: 20,
},

  buttonText: {
    color: '#1F1F1F',
    fontWeight: '600',
  },
});
