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
  onClose: () => void;
};

export default function ImageViewerModal({
  visible,
  imageSource,
  onClose,
}: Props) {
  return (
       <Modal
          visible={visible}
          transparent
          animationType="fade"
          onRequestClose={onClose}
        >
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={onClose}
        >

        <TouchableOpacity
          style={styles.closeButton}
          onPress={onClose}
        >
          <Text style={styles.closeText}>
            Close
          </Text>
        </TouchableOpacity>

        <Image
          source={imageSource}
          style={styles.image}
          resizeMode="contain"
        />

      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.95)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '95%',
    height: '80%',
  },

  closeButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 100,
  },

  closeText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});