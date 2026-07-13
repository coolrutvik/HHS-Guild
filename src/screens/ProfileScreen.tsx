import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import { useAuth } from '../context/AuthContext';
import { signOut } from '../firebase/auth';

export default function ProfileScreen() {
     const { profile } = useAuth();
     console.log(profile);
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Profile
      </Text>

      <Image
        source={{
          uri: 'https://via.placeholder.com/120',
        }}
        style={styles.avatar}
      />

      <View style={styles.card}>

        <Text style={styles.label}>Nickname</Text>
        <Text style={styles.value}>
           {profile?.nickname}
        </Text>

        <Text style={styles.label}>Guild Role</Text>
        <View style={styles.badge}>
         <Text style={styles.badgeText}>
           {profile?.guildRole}
         </Text>
        </View>

    <Text style={styles.label}>Status</Text>
        <View style={[
                     styles.badge,
                     profile?.status === 'approved'
                     ? styles.greenBadge
                     : profile?.status === 'pending'
                     ? styles.yellowBadge
                     : styles.redBadge,
                    ]}
    >
        <Text style={styles.badgeText}>
            {profile?.status
            ? profile.status.charAt(0).toUpperCase() +
            profile.status.slice(1)
            : '-'}
        </Text>
    </View>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>
           {profile?.email}
        </Text>

        <Text style={styles.label}>Joined</Text>
         <Text style={styles.value}>
         {profile?.createdAt
         ? new Date(profile.createdAt).toLocaleDateString('en-GB', {
         day: '2-digit',
         month: 'short',
         year: 'numeric',
         })
         : '-'}
         </Text>

      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
        await signOut();
      }}
      >
        <Text style={styles.buttonText}>
          Logout
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090B12',
    padding: 20,
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 30,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 25,
    borderWidth: 2,
    borderColor: '#8B5CF6',
  },

  card: {
    width: '100%',
    backgroundColor: '#171B27',
    borderRadius: 16,
    padding: 20,
  },

  label: {
    color: '#9CA3AF',
    fontSize: 14,
    marginTop: 12,
  },

  value: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 4,
  },

  button: {
    marginTop: 30,
    width: '100%',
    backgroundColor: '#8B5CF6',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#8B5CF6',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 6,
  },

  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },

  greenBadge: {
    backgroundColor: '#16A34A',
  },

  yellowBadge: {
    backgroundColor: '#F59E0B',
  },

  redBadge: {
    backgroundColor: '#DC2626',
  },
});