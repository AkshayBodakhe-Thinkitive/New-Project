import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EpisodeDetailPage from './EpisodeDetailPage';
import EpisodesList from './EpisodesList';


const EpisodeManagement = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Episode List"
        component={EpisodesList}
        options={{
          headerShown : false
        }}
      />
      <Stack.Screen
        name="Episode Detail"
        component={EpisodeDetailPage}
        options={{
          headerShown : false
        }}
      />
    </Stack.Navigator>
  );
};

export default EpisodeManagement;

const styles = StyleSheet.create({});
