import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeTabs() {
  const navigation: any = useNavigation();

  const tabs = [
    { title: 'Home', screen: 'Home' },
    { title: 'Schedule', screen: 'Schedule' },
    { title: 'Quizzes', screen: 'Quizzes' },
    { title: 'Giveaways', screen: 'Giveaways' },
    { title: 'Members', screen: 'Members' },
    { title: 'Recruitment', screen: 'Recruitment' },
    { title: 'Gallery', screen: 'Gallery' },
    { title: 'Leadership', screen: 'Leadership' },
    { title: 'Guild War', screen: 'GuildWar' },
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.tabsWrapper}
    >
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab.title}
          style={[
            styles.tab,
            tab.title === 'Home' && styles.activeTab,
          ]}
          onPress={() => navigation.navigate(tab.screen)}
        >
          <Text style={styles.tabText}>
            {tab.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tabsWrapper: {
    backgroundColor: 'rgba(0,0,0,0.35)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginBottom: 20,
  },

  tab: {
    backgroundColor: 'transparent',
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 10,
    marginRight: 10,
  },

  activeTab: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
  },

  tabText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },
});