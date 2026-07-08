import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import MembersScreen from '../screens/MembersScreen';

import LeadershipScreen from '../screens/LeadershipScreen';
import RecruitmentScreen from '../screens/RecruitmentScreen';
import GuildWarScreen from '../screens/GuildWarScreen';
import SeasonRewindScreen from '../screens/SeasonRewindScreen';

import ScheduleScreen from '../screens/ScheduleScreen';
import QuizzesScreen from '../screens/QuizzesScreen';
import GiveawaysScreen from '../screens/GiveawaysScreen';
import GalleryScreen from '../screens/GalleryScreen';
import QuizRoomScreen from '../screens/QuizRoomScreen';
import AdminPanelScreen from '../screens/AdminPanelScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    
      <Stack.Navigator
        screenOptions={{
        headerShown: false,
        contentStyle: {
        backgroundColor: '#090B12',
       },
     }}
    >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Members"
          component={MembersScreen}
        />
       
        <Stack.Screen
          name="Leadership"
          component={LeadershipScreen}
         />

        <Stack.Screen
          name="Recruitment"
          component={RecruitmentScreen}
          />

        <Stack.Screen
          name="GuildWar"
          component={GuildWarScreen}
        />

        <Stack.Screen
          name="SeasonRewind"
          component={SeasonRewindScreen}
        />

        <Stack.Screen
          name="Schedule"
          component={ScheduleScreen}
        />

        <Stack.Screen
          name="Quizzes"
          component={QuizzesScreen}
        />

        <Stack.Screen
           name="QuizRoom"
           component={QuizRoomScreen}
        /> 

        <Stack.Screen
          name="Giveaways"
          component={GiveawaysScreen}
        />

        <Stack.Screen
          name="Gallery"
          component={GalleryScreen}
        />

        <Stack.Screen
          name="AdminPanel"
          component={AdminPanelScreen}
        />

   </Stack.Navigator>
 );
}