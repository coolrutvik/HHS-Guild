import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import AppBackground from '../components/AppBackground';
import FooterSection from '../components/FooterSection';

export default function GiveawayScreen() {
  return (
    <AppBackground>
      <ScrollView style={styles.container}>

        <View style={styles.headerContainer}>
          <Text style={styles.smallTitle}>
            HIGHHEAVENSECT • GIVEAWAYS
          </Text>

          <Text style={styles.title}>
            GIVEAWAYS
          </Text>

          <Text style={styles.subtitle}>
            Guild giveaways and reward events.
          </Text>
        </View>

        <View style={styles.giveawayCard}>

          <Text style={styles.giveawayTitle}>
            MONTHLY PASS GIVEAWAY
          </Text>

          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>
              ✅ COMPLETED
            </Text>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.infoLabel}>
              Prize
            </Text>

            <Text style={styles.infoValue}>
              Monthly Pass
            </Text>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.infoLabel}>
              Winner
            </Text>

            <Text style={styles.winnerName}>
              藍櫻月
            </Text>
          </View>

          <Text style={styles.thankYou}>
            Thank you to everyone who participated!
          </Text>

        </View>

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

  giveawayCard: {
  backgroundColor: 'rgba(15,15,20,0.75)',
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.15)',
  borderRadius: 20,
  padding: 20,
  marginBottom: 20,
},

giveawayTitle: {
  color: '#F3E5EC',
  fontSize: 24,
  fontWeight: 'bold',
},

statusBadge: {
  alignSelf: 'flex-start',
  backgroundColor: 'rgba(50,205,50,0.15)',
  borderWidth: 1,
  borderColor: '#32CD32',
  borderRadius: 20,
  paddingHorizontal: 12,
  paddingVertical: 6,
  marginTop: 15,
},

statusText: {
  color: '#7CFF7C',
  fontWeight: '700',
},

infoSection: {
  marginTop: 22,
},

infoLabel: {
  color: '#fbb7d9',
  fontSize: 14,
},

infoValue: {
  color: '#F3E5EC',
  fontSize: 20,
  marginTop: 6,
  fontWeight: '600',
},

winnerName: {
  color: '#FFD26A',
  fontSize: 24,
  fontWeight: 'bold',
  marginTop: 6,
},

thankYou: {
  color: '#F6D2D2',
  marginTop: 24,
  lineHeight: 22,
  textAlign: 'center',
},
});