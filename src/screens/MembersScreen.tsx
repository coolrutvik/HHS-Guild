import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

import AppBackground from '../components/AppBackground';
import FooterSection from '../components/FooterSection';

const members = [
  {
    name: 'Demonsau',
    ign: 'Demonsau',
    role: 'Guild Leader',
    status: 'Offline',
    playing: false,
    avatar: require('../../assets/images/discord_sau.png'),
  },

  {
    name: 'Linqi',
    ign: 'Linqi',
    role: 'Guild Vice Leader',
    status: 'Idle',
    playing: false,
    avatar: require('../../assets/images/discord_linqi.png'),
  },

  {
    name: 'James Venom',
    ign: 'Jamun',
    role: 'Commander',
    status: 'Offline',
    playing: false,
    avatar: require('../../assets/images/discord_james.png'),
  },

  {
    name: 'Sayaka',
    ign: 'Sayaka-',
    role: 'Grand Elder',
    status: 'Online',
    playing: false,
    avatar: require('../../assets/images/discord_sayaka.png'),
  },

   {
    name: 'Beleriand',
    ign: 'Beleriand',
    role: 'Admin',
    status: 'Online',
    playing: false,
    avatar: require('../../assets/images/discord_beleriand.png'),
  },

  {
    name: 'CheungMyung',
    ign: 'CheungMyung',
    role: 'Grand Elder',
    status: 'In Game',
    playing: true,
    game: 'Where Winds Meet',
    avatar: require('../../assets/images/discord_shanto.png'),
  },

  {
    name: 'Noa',
    ign: 'Flourish',
    role: 'Admin',
    status: 'Offline',
    playing: false,
    avatar: require('../../assets/images/discord_noa.png'),
  },

  {
    name: 'Skeng',
    ign: 'Skengk',
    role: 'Firefly',
    status: 'Online',
    playing: false,
    avatar: require('../../assets/images/discord_skeng.png'),
  },

  {
    name: 'Sylvely',
    ign: 'Sylvely',
    role: 'Admin',
    status: 'Online',
    playing: false,
    avatar: require('../../assets/images/discord_sylvely.png'),
  },

  {
    name: 'Yami',
    ign: 'YAmi',
    role: 'Heavenly Envoy',
    status: 'Offline',
    playing: false,
    avatar: require('../../assets/images/discord_yami.png'),
  },
];

export default function MembersScreen() {
  return (
    <AppBackground>
     <ScrollView style={styles.container}>

  <View style={styles.headerContainer}>
    <Text style={styles.smallTitle}>
      HIGHHEAVENSECT • MEMBERS
    </Text>

    <Text style={styles.title}>
      MEMBERS
    </Text>

    <Text style={styles.subtitle}>
      Current active roster.
    </Text>
  </View>

  <View style={styles.sectionCard}>
    <Text style={styles.sectionTitle}>
      👑 Leadership & Heads
    </Text>
  </View>

  {members.map(member => (
  <View
    key={member.ign}
    style={styles.memberCard}
  >
    <Image
      source={member.avatar}
      style={styles.avatar}
    />

    <View style={styles.memberInfo}>
      <Text style={styles.memberName}>
        {member.name}
      </Text>

      <Text style={styles.memberIgn}>
        IGN: {member.ign}
      </Text>

      <Text style={styles.memberRole}>
        {member.role}
      </Text>

      {member.playing && (
  <Text style={styles.gameText}>
    Playing {member.game}
  </Text>
)}
    </View>

    <View style={styles.statusContainer}>
  <View
    style={[
      styles.statusDot,
      member.status === 'Online'
        ? styles.online
        : member.status === 'Idle'
        ? styles.idle
        : member.status === 'DND'
        ? styles.dnd
        : styles.offline,
    ]}
  />

  {member.playing ? (
    <View style={styles.inGameBadge}>
      <Text style={styles.inGameText}>
        IN GAME
      </Text>
    </View>
  ) : (
        <Text style={styles.statusText}>
          {member.status}
        </Text>
       )}
      </View>
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
  headerContainer: {
  backgroundColor: 'rgba(15,15,20,0.65)',
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.15)',
  borderRadius: 20,
  padding: 20,
  marginTop: 30,
  marginBottom: 20,
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

sectionCard: {
  backgroundColor: 'rgba(15,15,20,0.75)',
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.15)',
  borderRadius: 20,
  padding: 18,
  marginBottom: 20,
},

sectionTitle: {
  color: '#F3E5EC',
  fontSize: 24,
  fontWeight: 'bold',
},

memberCard: {
  backgroundColor: 'rgba(15,15,20,0.75)',
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.15)',
  borderRadius: 20,
  padding: 15,
  marginBottom: 15,
  flexDirection: 'row',
  alignItems: 'center',
},

avatar: {
  width: 70,
  height: 70,
  borderRadius: 35,
},

memberInfo: {
  flex: 1,
  marginLeft: 15,
},

memberName: {
  color: '#F3E5EC',
  fontSize: 20,
  fontWeight: 'bold',
},

memberIgn: {
  color: '#F6D2D2',
  marginTop: 4,
  fontSize: 14,
},

memberRole: {
  color: '#fbb7d9',
  marginTop: 6,
  fontSize: 15,
},

statusContainer: {
  alignItems: 'center',
},

statusDot: {
  width: 12,
  height: 12,
  borderRadius: 6,
  marginBottom: 5,
},

online: {
  backgroundColor: '#4CAF50',
},

idle: {
  backgroundColor: '#FFC107',
},

dnd: {
  backgroundColor: '#F44336',
},

offline: {
  backgroundColor: '#757575',
},

statusText: {
  color: '#FFFFFF',
  fontSize: 12,
  textAlign: 'center',
},

inGameBadge: {
  marginTop: 6,
  paddingHorizontal: 10,
  paddingVertical: 4,
  borderRadius: 20,
  borderWidth: 1,
  borderColor: '#32D296',
  backgroundColor: 'rgba(50,210,150,0.15)',
},

inGameText: {
  color: '#7EF7BF',
  fontSize: 12,
  fontWeight: '700',
},

gameText: {
  color: '#F6D2D2',
  fontSize: 13,
  marginTop: 5,
},
});