import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';

import AppBackground from '../components/AppBackground';
import FooterSection from '../components/FooterSection';

export default function RecruitmentScreen() {
  return (
    <AppBackground>
      <ScrollView style={styles.container}>

        <View style={styles.headerContainer}>
          <Text style={styles.smallTitle}>
            JOIN • HIGHHEAVENSECT
          </Text>

          <Text style={styles.title}>
            RECRUITMENT
          </Text>

          <Text style={styles.subtitle}>
            The gate is open to fellow wanderers
          </Text>
        </View>

        <View style={styles.posterCard}>
         <Image
           source={require('../../assets/images/HHS_Guild_Recruitment.png')}
           style={styles.posterImage}
           resizeMode="contain"
         />
         </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            CASUAL FIRST
          </Text>

          <Text style={styles.item}>
          We're a relaxed guild. Real life comes first, and the jianghu second. Show up when you can, be kind, and we'll get along.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            No hard requirements
          </Text>

          <Text style={styles.item}>
          No DPS parse gates or rigid rosters for everyday play. We run content together and figure things out as a group.
          </Text>
        </View>

         <View style={styles.card}>
          <Text style={styles.cardTitle}>
           Stay active
          </Text>

          <Text style={styles.item}>
          A quick hello on Discord from time to time is enough. Long silences make it hard to know you're still with us.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
           HOW TO JOIN US?
          </Text>

          <Text style={styles.item}>
            1) Join Discord and message any officer or admin so we know you are in.
          </Text>

          <Text style={styles.item}>
            2) In game, find the guild with name search: HighHeavenSect, id 10004908, and apply, or message a recruiter (e.g. Yami), officer, or the leader in game.
          </Text>

          <Text style={styles.item}>
            3) Schedules, tags, and call-outs still live in Discord. If one path is slow, use the other.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.discordButton}
          onPress={() =>
            Linking.openURL('https://discord.gg/erogetof')
          }
        >
          <Text style={styles.discordButtonText}>
            Open discord.gg/erogetof
          </Text>
        </TouchableOpacity>

        <FooterSection />

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

  card: {
    backgroundColor: 'rgba(15,15,20,0.75)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },

  cardTitle: {
    color: '#fbb7d9',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  item: {
    color: '#f6d2d2',
    fontSize: 16,
    marginBottom: 12,
  },

  discordButton: {
    backgroundColor: '#fbb7d9',
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 25,
  },

  discordButtonText: {
    color: '#090B12',
    fontWeight: 'bold',
    fontSize: 16,
  },

  posterCard: {
  backgroundColor: 'rgba(15,15,20,0.75)',
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.15)',
  borderRadius: 20,
  padding: 10,
  marginBottom: 20,
},

posterImage: {
  width: '100%',
  height: 500,
  borderRadius: 15,
},
});