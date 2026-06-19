import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FeatureCard from '../components/FeatureCard';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeatureGrid from '../components/FeatureGrid';
import MilestoneCard from '../components/MilestoneCard';
import SeasonRewindCard from '../components/SeasonRewindCard';
import FooterSection from '../components/FooterSection';
import AppBackground from '../components/AppBackground';
//import MusicButton from '../components/MusicButton';

export default function HomeScreen() {
   const navigation: any = useNavigation();
return (
  <ImageBackground
  source={require('../../assets/images/HHS-BG.png')}
  style={{ flex: 1 }}
  resizeMode="cover"
>
  <View
    style={{
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.45)',
    }}
  >
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <HeroSection />
      <AboutSection />
      <FeatureGrid />
      <MilestoneCard />
      <SeasonRewindCard />
      <FooterSection />
      {/*<MusicButton />*/}
    </ScrollView>
    </View>
  </ImageBackground>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  content: {
  paddingBottom: 150,
},

  hero: {
    alignItems: 'center',
  },

  title: {
    color: '#E8D4DF',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitle: {
    color: '#C7C7C7',
    marginTop: 10,
    textAlign: 'center',
  },

  discordButton: {
    marginTop: 20,
    backgroundColor: '#6D28D9',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },

  discordText: {
    color: '#FFF',
    fontWeight: '600',
  },

  cardsContainer: {
    marginTop: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48%',
    backgroundColor: '#171B27',
    borderRadius: 16,
    paddingVertical: 30,
    marginBottom: 15,
    alignItems: 'center',
  },

  cardText: {
  color: '#FFFFFF',
  fontWeight: '600',
  fontSize: 16,
  marginTop: 10,
},

  statCard: {
    backgroundColor: '#171B27',
    borderRadius: 16,
    paddingVertical: 20,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
  },

  statNumber: {
    color: '#E8D4DF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  statLabel: {
    color: '#A0A0A0',
    marginTop: 6,
    fontSize: 12,
  },

rewindTitle: {
  color: '#E8D4DF',
  fontSize: 22,
  fontWeight: 'bold',
},

rewindText: {
  color: '#B0B0B0',
  marginTop: 10,
  lineHeight: 22,
},

rewindButton: {
  marginTop: 20,
  backgroundColor: '#6D28D9',
  alignSelf: 'flex-start',
  paddingHorizontal: 20,
  paddingVertical: 10,
  borderRadius: 10,
},

rewindButtonText: {
  color: '#FFF',
  fontWeight: '600',
},
});