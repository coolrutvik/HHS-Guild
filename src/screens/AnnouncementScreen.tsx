import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { subscribeToAnnouncements } from '../firebase/announcements';
import { useAuth } from '../context/AuthContext';
import { canAccessAdminPanel } from '../utils/permissions';

const AnnouncementScreen = () => {
  const navigation = useNavigation<any>();
  const { profile } = useAuth();

  const [announcements, setAnnouncements] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = subscribeToAnnouncements(data => {
      setAnnouncements(data);
    });

    return unsubscribe;
  }, []);

  const renderAnnouncement = ({ item }: any) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>

      <Text style={styles.message}>{item.message}</Text>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Posted by {item.createdBy}
        </Text>

        <Text style={styles.footerText}>
          {new Date(item.createdAt).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Announcements</Text>

      {canAccessAdminPanel(profile?.guildRole) && (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddAnnouncement')}
        >
          <Text style={styles.addButtonText}>
            + Add Announcement
          </Text>
        </TouchableOpacity>
      )}

      <FlatList
        data={announcements}
        keyExtractor={item => item.id}
        renderItem={renderAnnouncement}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>
              No announcements yet.
            </Text>

            <Text style={styles.emptySubtitle}>
              Announcements from guild leaders will appear here.
            </Text>
          </View>
        }
        contentContainerStyle={
          announcements.length === 0
            ? { flex: 1 }
            : { paddingBottom: 20 }
        }
      />
    </View>
  );
};

export default AnnouncementScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
    padding: 20,
  },

  heading: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 18,
  },

  addButton: {
    backgroundColor: '#6D28D9',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },

  addButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  card: {
    backgroundColor: '#1F2937',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  message: {
    color: '#D1D5DB',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 16,
  },

  footer: {
    borderTopWidth: 1,
    borderTopColor: '#374151',
    paddingTop: 10,
  },

  footerText: {
    color: '#9CA3AF',
    fontSize: 12,
    marginBottom: 4,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  emptyTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  emptySubtitle: {
    color: '#9CA3AF',
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 22,
  },
});