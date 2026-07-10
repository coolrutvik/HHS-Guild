import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useAuth } from '../context/AuthContext';
import RoleSelectionModal from '../components/RoleSelectionModal';

import {
  getPendingUsers,
  getApprovedUsers,
  getBlockedUsers,
  approveUser,
  blockUser,
  unblockUser,
  updateGuildRole,
  viceLeaderExists,
} from '../firebase/users';

export default function AdminPanelScreen() {
  const [roleModalVisible, setRoleModalVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [selectedRole, setSelectedRole] = useState('');

  const [pendingUsers, setPendingUsers] = useState<any[]>([]);
  const [approvedUsers, setApprovedUsers] = useState<any[]>([]);
  const [blockedUsers, setBlockedUsers] = useState<any[]>([]);
  const [selectedTab, setSelectedTab] = useState<
  'pending' | 'approved' | 'blocked'
>('pending');
  const [loading, setLoading] = useState(true);
  const { profile } = useAuth();

  useEffect(() => {
   loadAllUsers();
}, []);

  const loadAllUsers = async () => {
    await Promise.all([
      loadPendingUsers(),
      loadApprovedUsers(),
      loadBlockedUsers(),
    ]);
  };

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

  const loadApprovedUsers = async () => {
  const users = await getApprovedUsers();

  setApprovedUsers(users);

  console.log('Approved Users:', users);
};

const loadBlockedUsers = async () => {
  const users = await getBlockedUsers();

  setBlockedUsers(users);

  console.log('Blocked Users:', users);
};

  const handleApprove = async (uid: string) => {
    await approveUser(uid);

    Alert.alert(
      'Success',
      'Member has been approved.'
    );

    loadAllUsers();
  };

  const handleBlock = async (
  uid: string,
  nickname: string
) => {
  Alert.alert(
    'Block Member',
    `${nickname} won't be able to log in until unblocked.`,
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Block',
        style: 'destructive',
        onPress: async () => {
          await blockUser(uid);

          Alert.alert(
            'Success',
            `${nickname} has been blocked.`
          );

          loadAllUsers();
        },
      },
    ]
  );
};

  const handleUnblock = async (uid: string) => {
  await unblockUser(uid);

  Alert.alert(
    'Success',
    'Member has been unblocked.'
  );

  loadAllUsers();
};

  const handleRoleChange = (item: any) => {
  // Prevent the current Leader from changing their own role
  if (
    profile?.email === item.email &&
    profile?.guildRole === 'Leader'
  ) {
    Alert.alert(
  'Change Guild Role',
  `Select a new role for ${item.nickname}`,
  [
    {
      text: 'Vice-Leader',
      onPress: async () => {
        const exists = await viceLeaderExists();

        if (exists) {
          Alert.alert(
            'Vice-Leader Already Exists',
            'Only one Vice-Leader is allowed.'
          );
          return;
        }

        await updateGuildRole(item.id, 'Vice-Leader');
        loadAllUsers();
      },
    },
    {
      text: 'Officer',
      onPress: async () => {
        await updateGuildRole(item.id, 'Officer');
        loadAllUsers();
      },
    },
    {
      text: 'Member',
      onPress: async () => {
        await updateGuildRole(item.id, 'Member');
        loadAllUsers();
      },
    },
    {
      text: 'Cancel',
      style: 'cancel',
    },
  ]
);
    return;
  }

  Alert.alert(
    'Change Guild Role',
    `Select a new role for ${item.nickname}`,
    [
      {
  text: 'Vice-Leader',
  onPress: async () => {
    const exists = await viceLeaderExists();

    if (exists) {
      Alert.alert(
        'Vice-Leader Already Exists',
        'Only one Vice-Leader is allowed.'
      );
      return;
    }

    await updateGuildRole(item.id, 'Vice-Leader');
    loadAllUsers();
  },
},
      {
        text: 'Officer',
        onPress: async () => {
          await updateGuildRole(item.id, 'Officer');
          loadAllUsers();
        },
      },
      {
        text: 'Member',
        onPress: async () => {
          await updateGuildRole(item.id, 'Member');
          loadAllUsers();
        },
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]
  );
};

  const displayedUsers =
  selectedTab === 'pending'
    ? pendingUsers
    : selectedTab === 'approved'
    ? approvedUsers
    : blockedUsers;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Admin Panel
      </Text>

      <View style={styles.tabsContainer}>

    <TouchableOpacity
         style={[
         styles.tab,
         selectedTab === 'pending' &&
         styles.activeTab,
        ]}
        onPress={() => setSelectedTab('pending')}
    >
      <Text style={styles.tabText}>
             Pending
      </Text>
    </TouchableOpacity>

    <TouchableOpacity
         style={[
         styles.tab,
         selectedTab === 'approved' &&
         styles.activeTab,
        ]}
        onPress={() => setSelectedTab('approved')}
    >
      <Text style={styles.tabText}>
             Approved
      </Text>
    </TouchableOpacity>

    <TouchableOpacity
       style={[
       styles.tab,
       selectedTab === 'blocked' &&
       styles.activeTab,
      ]}
      onPress={() => setSelectedTab('blocked')}
    >
      <Text style={styles.tabText}>
            Blocked
      </Text>
    </TouchableOpacity>
</View>

      {loading ? (
        <Text style={styles.emptyText}>
          Loading...
        </Text>
      ) : displayedUsers.length === 0 ? (
        <Text style={styles.emptyText}>
          {selectedTab === 'pending'
            ? 'No pending requests.'
            : selectedTab === 'approved'
            ? 'No approved members.'
            : 'No blocked members.'}
        </Text>
      ) : (
        <FlatList
          data={displayedUsers}
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

              {selectedTab === 'pending' && (
               <View style={styles.buttonRow}>
                <TouchableOpacity
                   style={styles.approveButton}
                   onPress={() => handleApprove(item.id)}
                >
                  <Text style={styles.buttonText}>
                        Approve
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                   style={styles.blockButton}
                  onPress={() =>
                    handleBlock(item.id, item.nickname)
                  }
                >
                  <Text style={styles.buttonText}>
                           Block
                  </Text>
                </TouchableOpacity>
           </View>
          )}
       {selectedTab === 'approved' && (
  <View style={styles.buttonRow}>

    <TouchableOpacity
      style={styles.approveButton}
      onPress={() => {
        if (item.guildRole === 'Leader') {
          Alert.alert(
            'Action Not Allowed',
            'The Leader role cannot be changed from the app.'
          );
          return;
        }

        setSelectedMember(item);
        setSelectedRole(item.guildRole);
        setRoleModalVisible(true);
      }}
    >
      <Text style={styles.buttonText}>
        Change Role
      </Text>
    </TouchableOpacity>

    {item.guildRole !== 'Leader' && (
  <TouchableOpacity
    style={styles.blockButton}
   onPress={() =>
  handleBlock(item.id, item.nickname)
}
  >
    <Text style={styles.buttonText}>
      Block
    </Text>
  </TouchableOpacity>
)}

  </View>
)}
         {selectedTab === 'blocked' && (
          <View style={styles.buttonRow}>
           <TouchableOpacity
             style={styles.approveButton}
             onPress={() => handleUnblock(item.id)}
           >
            <Text style={styles.buttonText}>
                   Unblock
            </Text>
           </TouchableOpacity>
          </View>
         )}
        </View>
       )}
     />
    )}
    <RoleSelectionModal
       visible={roleModalVisible}
       nickname={selectedMember?.nickname ?? ''}
       currentRole={selectedMember?.guildRole ?? ''}
       selectedRole={selectedRole}
       onSelectRole={setSelectedRole}
       onCancel={() => {
       setRoleModalVisible(false);
    }}
       onSave={async () => {
  if (!selectedMember) return;

  if (
    selectedRole === 'Vice-Leader' &&
    selectedMember.guildRole !== 'Vice-Leader'
  ) {
    const exists = await viceLeaderExists();

    if (exists) {
      Alert.alert(
        'Vice-Leader Already Exists',
        'Only one Vice-Leader is allowed.'
      );
      return;
    }
  }

  await updateGuildRole(
    selectedMember.id,
    selectedRole
  );

  await loadAllUsers();

  setRoleModalVisible(false);
}}
    />
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

  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  tab: {
    flex: 1,
    backgroundColor: '#171B27',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 4,
  },

  activeTab: {
    backgroundColor: '#8B5CF6',
  },

  tabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});