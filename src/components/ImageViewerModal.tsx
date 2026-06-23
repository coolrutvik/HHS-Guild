import React from 'react';
import {
  Modal,
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

type Props = {
  visible: boolean;
  imageSource: any;
  title?: string;
  caption?: string;
  author?: string;
  orientation?: string;
  onClose: () => void;
};

export default function ImageViewerModal({
  visible,
  imageSource,
  title,
  caption,
  author,
  orientation,
  onClose,
}: Props) {
  return (
    <Modal
     visible={visible}
     animationType="fade"
     onRequestClose={onClose}
    >
      <View style={styles.overlay}>

        <TouchableOpacity
          style={StyleSheet.absoluteFill}
          activeOpacity={1}
          onPress={onClose}
        />

        <TouchableOpacity
          style={styles.closeButton}
          onPress={onClose}
        >
          <Text style={styles.closeText}>
            Close
          </Text>
        </TouchableOpacity>

        <View style={styles.content}>
          <Image
            source={imageSource}
            style={
              orientation === 'landscape'
              ? styles.imageLandscape
              : styles.imagePortrait
              }
            resizeMode="contain"
          />

          <Text style={styles.title}>
            {title}
          </Text>

          {!!caption && (
            <Text style={styles.caption}>
              {caption}
            </Text>
          )}

          <Text style={styles.author}>
            SHARED BY {author?.toUpperCase()}
          </Text>
        </View>

      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#000',
  },

  content: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    paddingTop: 0,
    paddingBottom: 20,
  },

  imagePortrait: {
    width: '100%',
    height: '82%',
  },

  imageLandscape: {
    width: '100%',
    height: '65%',
  },

  closeButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 100,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
    backgroundColor: 'rgba(255,255,255,0.08)',
  },

  closeText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  title: {
    color: '#F3E5EC',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    width: '100%',
    marginTop: 15,
  },

  caption: {
    color: '#D9D9D9',
    fontSize: 15,
    textAlign: 'center',
    width: '100%',
    marginTop: 5,
    paddingHorizontal: 20,
  },
  
  author: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 2,
    marginTop: 8,
    textAlign: 'center',
    width: '100%',
  },
});