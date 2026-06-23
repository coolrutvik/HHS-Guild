import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import AppBackground from '../components/AppBackground';
import FooterSection from '../components/FooterSection';

const events = [
  {
    title: 'Guild Heroes Realm',
    Days: 'Mon, Wed, Sat, Sun (Sunday optional)',
    Time: '8:00 PM',
    Desc: 'Kill 2 bosses with 10 members',
  },
  {
    title: 'Breaking Army',
    Days: 'Wednesday or Saturday',
    Time: '7:30 PM',
    Desc: 'Solo boss, 2 hour window',
  },
  {
    title: 'Guild Party',
    Days: 'Every day (see note for weekend)',
    Time: 'Default time: 9:00 PM',
    Desc: 'Stay 15 to 30 min. On Saturday and Sunday, Guild War usually ends around 7:00 PM; Guild Party on those days typically starts around 7:30 PM (your local time).',
  },
  {
    title: 'Guild PvP',
    Days: 'Thursday & Sunday',
    Time: '8:30 PM',
    Desc: '1 hour of practice PvP battles with guild members',
  },
  {
    title: 'Guild War',
    Days: 'Saturday & Sunday',
    Time: '6:00 PM',
    Desc: 'Massive 30v30 competitive mode that combines traditional Wuxia combat with MOBA-style map objectives.',
  },
];

export default function ScheduleScreen() {
  return (
    <AppBackground>
    <ScrollView
  style={styles.container}
  contentContainerStyle={styles.content}
>
    <View style={styles.headerContainer}>
      <Text style={styles.smallTitle}>
         EVENTS • HIGHHEAVENSECT
      </Text>

      <Text style={styles.title}>
             SCHEDULE
      </Text>

      <Text style={styles.subtitle}>
        Upcoming guild activities,
        meetings and war events.
      </Text>
    </View>

      {events.map(event => (
        <View
          key={event.title}
          style={styles.eventCard}
        >
          <Text style={styles.eventTitle}>
            {event.title}
          </Text>

          <Text style={styles.eventDays}>
            📅 {event.Days}
          </Text>

          <Text style={styles.eventTime}>
            🕒 {event.Time}
          </Text>

          <Text style={styles.eventDesc}>
            {event.Desc}
          </Text>
        </View>
      ))}
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

  content: {
  paddingBottom: 80,
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
  marginTop: 0,
  textShadowColor: 'rgba(0,0,0,0.8)',
  textShadowOffset: { width: 0, height: 1 },
  textShadowRadius: 4,
},

  title: {
  color: '#fbb7d9',
  fontSize: 34,
  fontWeight: 'bold',
  marginTop: 10,
  textShadowColor: 'rgba(0,0,0,0.8)',
  textShadowOffset: { width: 0, height: 2 },
  textShadowRadius: 6,
},

  subtitle: {
  color: '#f6d2d2',
  fontSize: 16,
  marginTop: 15,
  lineHeight: 24,
  marginBottom: 30,
  textShadowColor: 'rgba(0,0,0,0.8)',
  textShadowOffset: { width: 0, height: 1 },
  textShadowRadius: 4,
},

discordCard: {
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.45)',
  borderRadius: 18,
  paddingVertical: 16,
  paddingHorizontal: 25,
  alignItems: 'center',
  marginTop: 20,
  marginBottom: 25,
  backgroundColor: 'rgba(15,15,20,0.70)',
},

discordTitle: {
  color: '#F3E5EC',
  fontSize: 20,
  fontWeight: 'bold',
  textShadowColor: 'rgba(0,0,0,0.8)',
  textShadowOffset: {
    width: 0,
    height: 1,
  },
  textShadowRadius: 4,
},

discordLink: {
  color: '#F6D2D2',
  marginTop: 5,
  fontSize: 16,
},

 eventCard: {
  backgroundColor: 'rgba(15,15,20,0.78)',
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.20)',
  borderRadius: 20,
  padding: 20,
  marginBottom: 15,
},

 eventTitle: {
  color: '#fbb7d9',
  fontSize: 20,
  fontWeight: 'bold',
},

  eventDays: {
  color: '#f6d2d2',
  marginTop: 8,
  fontSize: 14,
},

 eventTime: {
  color: '#fbb7d9',
  marginTop: 8,
  fontSize: 15,
  fontWeight: '600',
},

 eventDesc: {
  color: '#f6d2d2',
  marginTop: 12,
  lineHeight: 22,
},
});