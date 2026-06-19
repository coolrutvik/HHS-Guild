import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
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

      <TouchableOpacity style={styles.discordButton}>
        <Text style={styles.buttonText}>
          Join Discord Now
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
    color: '#D9A7BC',
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
    color: '#C7C7C7',
    fontSize: 18,
    marginTop: 20,
    lineHeight: 28,
  },

  discordButton: {
    marginTop: 25,
    backgroundColor: '#D9A7BC',
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
    color: '#000',
    fontWeight: '600',
  },
});
