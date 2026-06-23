import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import AppBackground from '../components/AppBackground';
import ImageViewerModal from '../components/ImageViewerModal';
import FooterSection from '../components/FooterSection';
import { TextInput } from 'react-native';

const galleryImages = [
  {
    title: 'Crush 😳😳',
    author: 'MAIKEE',
    image: require('../../assets/images/Gallery1.png'),
    orientation: 'landscape',
  },

  {
    title: 'Vampire of the Lunar Throne',
    author: 'VAASANTH',
    image: require('../../assets/images/Gallery2.png'),
    orientation: 'landscape',
  },

  {
    title: 'The Last Stand Beneath the White Beast',
    author: 'VAASANTH',
    image: require('../../assets/images/Gallery3.png'),
    orientation: 'landscape',
  },

  {
    title: 'The Naked Cult Take Over The World',
    author: 'INSANELY',
    image: require('../../assets/images/Gallery4.png'),
    orientation: 'portrait',
  },

  {
    title: 'Shared by Demonsau',
    author: 'DEMONSAU',
    image: require('../../assets/images/Gallery5.png'),
    orientation: 'landscape',
  },

  {
    title: 'Petals of the Blue Moon',
    caption: 'Just adding pics to gallery',
    author: 'LU',
    image: require('../../assets/images/Gallery6.png'),
    orientation: 'landscape',
  }, 

  {
    title: "Just flexing Don't mind me",
    caption: 'Im standing there with my new hair looks cool right',
    author: 'CHEUNGMYUNG',
    image: require('../../assets/images/Gallery7.png'),
    orientation: 'landscape',
  },
  
  {
    title: "Naked Cult Leader",
    caption: 'Anime Pose',
    author: 'INSANELY',
    image: require('../../assets/images/Gallery8.png'),
    orientation: 'landscape',
  },

   {
    title: "Velved Shade Rank 1",
    caption: '',
    author: 'SAYAKA',
    image: require('../../assets/images/Gallery9.png'),
    orientation: 'landscape',
  },

  {
    title: "Through the Misty Bamboo",
    caption: 'Nice Place',
    author: 'LINQI',
    image: require('../../assets/images/Gallery10.png'),
    orientation: 'landscape',
  },

  {
    title: "Among the Verdant Peaks",
    caption: 'Testing 3',
    author: 'LINQI',
    image: require('../../assets/images/Gallery11.png'),
    orientation: 'landscape',
  },

  {
    title: "Where Water Meets the Moon",
    caption: 'Testing 2',
    author: 'LINQI',
    image: require('../../assets/images/Gallery12.png'),
    orientation: 'landscape',
  },

   {
    title: "Beneath the Lights of Kaifeng",
    caption: 'Testing 1',
    author: 'LINQI',
    image: require('../../assets/images/Gallery13.png'),
    orientation: 'landscape',
  },

  {
    title: "Velvet Shade",
    caption: '',
    author: 'SAYAKA',
    image: require('../../assets/images/Gallery14.png'),
    orientation: 'landscape',
  },

  {
    title: "Sunset Reflections Over Kaifeng River",
    caption: '',
    author: 'SAYAKA',
    image: require('../../assets/images/Gallery15.png'),
    orientation: 'landscape',
  },

  {
    title: "Moonlit Veil of Sayaka",
    caption: '',
    author: 'SAYAKA',
    image: require('../../assets/images/Gallery16.png'),
    orientation: 'landscape',
  },

  {
    title: "Lanterns of Wisdom in My Study Room",
    caption: '',
    author: 'SAYAKA',
    image: require('../../assets/images/Gallery17.png'),
    orientation: 'landscape',
  },

  {
    title: "Grand Elder Beneath the Winter Gate",
    caption: '',
    author: 'SAYAKA',
    image: require('../../assets/images/Gallery18.png'),
    orientation: 'landscape',
  },

   {
    title: "Water paint",
    caption: '',
    author: 'JAMES VENOM',
    image: require('../../assets/images/Gallery19.png'),
    orientation: 'landscape',
  },

  // add remaining 17 images here
];

export default function GalleryScreen() {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [modalVisible, setModalVisible] = useState(false);
  return (
  <AppBackground>
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.smallTitle}>
          MEMORIES • HIGHHEAVENSECT
        </Text>

        <Text style={styles.title}>
          GALLERY
        </Text>

        <Text style={styles.subtitle}>
          Explore memories and screenshots
          from High Heaven Sect.
        </Text>
      </View>

      <View style={styles.submitCard}>

  <Text style={styles.submitTitle}>
    SHARE A MEMORY
  </Text>

  <Text style={styles.submitDescription}>
    Guild members can submit screenshots here. Every image goes through admin approval before appearing publicly.
  </Text>

  <Text style={styles.label}>
    Your in-game name / username
  </Text>

  <TextInput
    style={styles.input}
    placeholder="Example: Demonsau"
    placeholderTextColor="#6B7280"
  />

  <Text style={styles.label}>
    Title (optional)
  </Text>

  <TextInput
    style={styles.input}
    placeholder="Guild raid victory"
    placeholderTextColor="#6B7280"
  />

  <Text style={styles.label}>
    Caption (optional)
  </Text>

  <TextInput
    style={styles.captionInput}
    placeholder="Tell the elders what was happening in the screenshot."
    placeholderTextColor="#6B7280"
    multiline
  />

  <Text style={styles.label}>
    Image File
  </Text>

  <TouchableOpacity style={styles.fileButton}>
    <Text style={styles.fileButtonText}>
      Choose File
    </Text>
  </TouchableOpacity>

  <Text style={styles.infoText}>
    JPG, PNG or WEBP. Max 8 MB.
  </Text>

  <TouchableOpacity style={styles.submitButton}>
    <Text style={styles.submitButtonText}>
      SUBMIT FOR APPROVAL
    </Text>
  </TouchableOpacity>

</View>
  
      {galleryImages.map(item => (
      <TouchableOpacity
        key={item.title}
        style={styles.imageCard}
        onPress={() => {
        setSelectedImage(item);
        setModalVisible(true);
       }}
      >
      <Image
        source={item.image}
        style={styles.galleryImage}
      />

      <Text style={styles.imageTitle}>
           {item.title}
      </Text>

      <Text style={styles.imageAuthor}>
        SHARED BY {item.author.toUpperCase()}
      </Text>
      </TouchableOpacity>
     ))}
     <FooterSection />
     <ImageViewerModal
       visible={modalVisible}
       imageSource={selectedImage?.image}
       title={selectedImage?.title}
       caption={selectedImage?.caption}
       author={selectedImage?.author}
       orientation={selectedImage?.orientation}
       onClose={() => setModalVisible(false)}
     />
    </ScrollView>
   </AppBackground>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 20,
  },

  headerContainer: {
    backgroundColor: 'rgba(15,15,20,0.65)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    borderRadius: 20,
    padding: 20,
    marginTop: 30,
    marginBottom: 25,
  },

  smallTitle: {
    color: '#fbb7d9',
    fontSize: 15,
  },

  title: {
    color: '#fbb7d9',
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 10,
  },

  subtitle: {
    color: '#f6d2d2',
    fontSize: 16,
    marginTop: 15,
    lineHeight: 24,
  },

  submitCard: {
  backgroundColor: 'rgba(15,15,20,0.75)',
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.15)',
  borderRadius: 20,
  padding: 20,
  marginBottom: 25,
},

submitTitle: {
  color: '#fbb7d9',
  fontSize: 24,
  fontWeight: 'bold',
},

submitDescription: {
  color: '#f6d2d2',
  marginTop: 10,
  lineHeight: 22,
},

label: {
  color: '#F6D2D2',
  fontSize: 15,
  marginTop: 15,
  marginBottom: 8,
},

input: {
  backgroundColor: '#0E111B',
  color: '#FFF',
  borderRadius: 10,
  paddingHorizontal: 15,
  paddingVertical: 12,
},

captionInput: {
  backgroundColor: '#0E111B',
  color: '#FFF',
  borderRadius: 10,
  paddingHorizontal: 15,
  paddingVertical: 12,
  minHeight: 100,
  textAlignVertical: 'top',
},

fileButton: {
  backgroundColor: '#fbb7d9',
  alignSelf: 'flex-start',
  paddingHorizontal: 20,
  paddingVertical: 12,
  borderRadius: 10,
  marginTop: 8,
},

fileButtonText: {
  color: '#090B12',
  fontWeight: 'bold',
},

infoText: {
  color: '#B8B8B8',
  marginTop: 10,
  fontSize: 13,
},

uploadButton: {
  backgroundColor: '#171B27',
  borderRadius: 12,
  paddingVertical: 14,
  marginTop: 20,
  alignItems: 'center',
},

uploadButtonText: {
  color: '#fbb7d9',
  fontWeight: '600',
},

submitButton: {
  backgroundColor: '#fbb7d9',
  borderRadius: 12,
  paddingVertical: 16, // was 14
  marginTop: 20,
  alignItems: 'center',
},

submitButtonText: {
  color: '#090B12',
  fontWeight: 'bold',
},

  imageCard: {
    backgroundColor: 'rgba(15,15,20,0.75)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
    overflow: 'hidden',
  },

  galleryImage: {
    width: '100%',
    height: 220,
    borderRadius: 15,
    resizeMode: 'contain',
  },

  imageTitle: {
    color: '#fbb7d9',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 12,
  },

  imageAuthor: {
    color: '#f6d2d2',
    textAlign: 'center',
    marginTop: 6,
    letterSpacing: 1,
  },
});