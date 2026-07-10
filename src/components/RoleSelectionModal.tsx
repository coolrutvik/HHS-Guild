import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';

interface Props {
  visible: boolean;
  nickname: string;
  currentRole: string;
  selectedRole: string;
  onSelectRole: (role: string) => void;
  onCancel: () => void;
  onSave: () => void;
}

const roles = [
  'Vice-Leader',
  'Officer',
  'Member',
];

export default function RoleSelectionModal({
  visible,
  nickname,
  currentRole,
  selectedRole,
  onSelectRole,
  onCancel,
  onSave,
}: Props) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <Pressable
        style={styles.overlay}
        onPress={onCancel}
      >
        <Pressable style={styles.modal}>

          <Text style={styles.title}>
            Change Guild Role
          </Text>

          <Text style={styles.nickname}>
            👤 {nickname}
          </Text>

          <Text style={styles.currentRole}>
            Current Role
          </Text>

          <Text style={styles.role}>
            {currentRole}
          </Text>

          <View style={styles.divider} />

          {roles.map(role => (
            <TouchableOpacity
              key={role}
              style={styles.roleButton}
              onPress={() => onSelectRole(role)}
            >
              <View
                style={[
                  styles.radio,
                  selectedRole === role &&
                    styles.radioSelected,
                ]}
              />

              <Text style={styles.roleText}>
                {role}
              </Text>
            </TouchableOpacity>
          ))}

          <View style={styles.divider} />

          <View style={styles.footer}>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={onCancel}
            >
              <Text style={styles.cancelText}>
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.saveButton,
                !selectedRole &&
                  styles.disabledButton,
              ]}
              disabled={!selectedRole}
              onPress={onSave}
            >
              <Text style={styles.saveText}>
                Save
              </Text>
            </TouchableOpacity>

          </View>

        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },

  modal: {
    width: '100%',
    backgroundColor: '#171B27',
    borderRadius: 18,
    padding: 22,
  },

  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  nickname: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
  },

  currentRole: {
    color: '#999',
    textAlign: 'center',
    marginTop: 15,
  },

  role: {
    color: '#D8B4FE',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 5,
  },

  divider: {
    height: 1,
    backgroundColor: '#2C3344',
    marginVertical: 20,
  },

  roleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },

  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#777',
    marginRight: 15,
  },

  radioSelected: {
    backgroundColor: '#8B5CF6',
    borderColor: '#8B5CF6',
  },

  roleText: {
    color: '#fff',
    fontSize: 16,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cancelButton: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: '#2C3344',
    alignItems: 'center',
  },

  saveButton: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: '#8B5CF6',
    alignItems: 'center',
  },

  disabledButton: {
    opacity: 0.45,
  },

  cancelText: {
    color: '#fff',
    fontWeight: '600',
  },

  saveText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});