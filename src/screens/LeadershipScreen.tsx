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

const leaders = [
  {
    name: 'DEMONSAU',
    role: 'Guild Leader',
    ign: 'Demonsau',
    description:
      'Runs the guild from the shadows so well that guildmates rarely see him in-game.',
    image: require('../../assets/images/demonsau.png'),
  },

  {
    name: 'LINQI',
    role: 'Guild Vice Leader',
    ign: 'Linqi',
    description:
      'Handles guild affairs and occasionally brings out the whip to encourage attendance in war.',
    image: require('../../assets/images/linqi.png'),
  },

   {
    name: 'RAYASHER',
    role: 'Admin',
    ign: 'RayAsher',
    description:
      'The silent observer willing to aid when you are in need, whether as warrior in guild or therapist IRL.',
    image: require('../../assets/images/ray-asher.png'),
  },

   {
    name: 'BELERIAND',
    role: 'Admin · founding WWM steward',
    ign: 'Beleriand',
    description:
      'The chill guy who has no enemies except "Breaking Army".',
    image: require('../../assets/images/beleriand.png'),
  },

  {
    name: 'NOA',
    role: 'Admin',
    ign: 'Flourish',
    description:
      'Sushi chef, too busy cooking IRL getting cooked in game.',
    image: require('../../assets/images/flourish.png'),
  },

  {
    name: 'JAMES VENOM',
    role: 'Commander',
    ign: 'Jamun',
    description:
      'A sharp commander who leads guild wars and carries players through events like Guild Raid and Sword Trial (ST). Patient mentor for new disciples. No Slacking fr.',
    image: require('../../assets/images/james-venom.png'),
  },

   {
    name: 'SKENG',
    role: 'Firefly',
    ign: 'Skengk',
    description:
      'I will fight for myself, until everything... burns to ashes!',
    image: require('../../assets/images/skeng.png'),
  },

  {
    name: 'SYLVELY',
    role: 'Admin',
    ign: 'Sylvely',
    description:
      'Fellow Chicken enjoyer that is addicted to PvP.',
    image: require('../../assets/images/sylvely.png'),
  },

   {
    name: 'YAMI',
    role: 'Heavenly Envoy',
    ign: 'Yami',
    description:
      'The one who mastered the art of iron fortress. Heavenly poacher of HighHeavenSect: roam solo too long and you will get poached into the guild.',
    image: require('../../assets/images/yami.png'),
  },

  {
    name: 'SAYAKA',
    role: 'Admin',
    ign: 'Sayaka',
    description:
      'Introverted manager who tries her best but prefers slacking.',
    image: require('../../assets/images/sayaka.png'),
  },

   {
    name: 'SHANTO',
    role: 'Grand Elder',
    ign: 'CheungMyung',
    description:
      'Cultist who follows the shadow of honored one, mastering the thousand sword waves that bring calamity.',
    image: require('../../assets/images/shanto.png'),
  },
];

export default function LeadershipScreen() {
  return (
    <AppBackground>
      <ScrollView style={styles.container}>
       <View style={styles.headerContainer}>
        <Text style={styles.smallTitle}>
          HIGHHEAVENSECT • LEADERSHIP
        </Text>

        <Text style={styles.title}>
               LEADERSHIP
        </Text>

        <Text style={styles.subtitle}>
           The sect's pathkeepers.
        </Text>
      </View>
      {leaders.map(item => (
  <View
    key={item.name}
    style={styles.leaderCard}
  >
    <Image
      source={item.image}
      style={styles.leaderImage}
    />

    <Text style={styles.leaderName}>
      {item.name}
    </Text>

    <Text style={styles.leaderRole}>
      {item.role}
    </Text>

    <View style={styles.divider} />

    <Text style={styles.leaderDescription}>
      {item.description}
    </Text>

    <Text style={styles.leaderIgn}>
      IGN: {item.ign}
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

leaderCard: {
  backgroundColor: 'rgba(15,15,20,0.75)',
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.15)',
  borderRadius: 20,
  padding: 15,
  marginBottom: 20,
},

leaderImage: {
  width: '100%',
  height: 380,
  borderRadius: 15,
},

leaderName: {
  color: '#F3E5EC',
  fontSize: 28,
  fontWeight: 'bold',
  marginTop: 15,
},

leaderRole: {
  color: '#fbb7d9',
  fontSize: 18,
  marginTop: 5,
},

divider: {
  height: 1,
  backgroundColor: 'rgba(255,255,255,0.20)',
  marginVertical: 15,
},

leaderDescription: {
  color: '#f6d2d2',
  fontSize: 15,
  lineHeight: 24,
},

leaderIgn: {
  color: '#FFFFFF',
  alignSelf: 'flex-end',
  marginTop: 15,
  fontSize: 13,
},

});