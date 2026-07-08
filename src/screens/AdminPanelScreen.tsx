import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {
  getPendingUsers,
  approveUser,
  blockUser,
} from '../firebase/users';

export default function AdminPanelScreen() {
  const [pendingUsers, setPendingUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPendingUsers();
  }, []);

  const loadPendingUsers = async () => {
    try {
      const users = await getPendingUsers();
      setPendingUsers(users);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (uid: string) => {
    await approveUser(uid);

    Alert.alert(
      'Success',
      'Member has been approved.'
    );

    loadPendingUsers();
  };

  const handleBlock = async (uid: string) => {
    await blockUser(uid);

    Alert.alert(
      'Blocked',
      'Member has been blocked.'
    );

    loadPendingUsers();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Admin Panel
      </Text>

      <Text style={styles.sectionTitle}>
        Pending Requests
      </Text>

      {loading ? (
        <Text style={styles.emptyText}>
          Loading...
        </Text>
      ) : pendingUsers.length === 0 ? (
        <Text style={styles.emptyText}>
          No pending requests.
        </Text>
      ) : (
        <FlatList
          data={pendingUsers}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.nickname}>
                👤 {item.nickname}
              </Text>

              <Text style={styles.info}>
                📧 {item.email}
              </Text>

              <Text style={styles.info}>
                Role: {item.guildRole}
              </Text>

              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={styles.approveButton}
                  onPress={() =>
                    handleApprove(item.id)
                  }
                >
                  <Text style={styles.buttonText}>
                    Approve
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.blockButton}
                  onPress={() =>
                    handleBlock(item.id)
                  }
                >
                  <Text style={styles.buttonText}>
                    Block
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090B12',
    padding: 20,
    paddingTop: 60,
  },

  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  sectionTitle: {
    color: '#D8B4FE',
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
  },

  emptyText: {
    color: '#999',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
  },

  card: {
    backgroundColor: '#171B27',
    borderRadius: 14,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#2C3344',
  },

  nickname: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  info: {
    color: '#CFCFCF',
    fontSize: 15,
    marginBottom: 5,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },

  approveButton: {
    flex: 1,
    backgroundColor: '#8B5CF6',
    paddingVertical: 12,
    borderRadius: 10,
    marginRight: 8,
    alignItems: 'center',
  },

  blockButton: {
    flex: 1,
    backgroundColor: '#DC2626',
    paddingVertical: 12,
    borderRadius: 10,
    marginLeft: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});