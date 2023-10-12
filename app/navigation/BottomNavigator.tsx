import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddPatient from '../domain/patient-management/screens/AddPatient';
import {screenHeight} from '../utils/DimensionUtils';
import {colors} from '../constants/Colors';
import OctiIcon from 'react-native-vector-icons/Octicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.primary_skyblue90,
        tabBarStyle: {height: screenHeight * 0.104, padding: 10},
        tabBarLabelStyle: {paddingBottom: 10},
        tabBarHideOnKeyboard: Platform.OS === 'android' ? true : false,
      }}>
      <Tab.Screen
        name="Home"
        component={AddPatient}
        options={{
          tabBarIcon: ({size, focused}) => (
            <OctiIcon
              name="home"
              color={focused ? colors.primary_skyblue90 : colors.grey80}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add Patient"
        component={AddPatient}
        options={{
          tabBarIcon: ({size, focused}) => (
            <OctiIcon
              name="person-add"
              color={focused ? colors.primary_skyblue90 : colors.grey80}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Today's Task"
        component={AddPatient}
        options={{
          tabBarIcon: ({size, focused}) => (
            <OctiIcon
              name="tasklist"
              color={focused ? colors.primary_skyblue90 : colors.grey80}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AddPatient}
        options={{
          tabBarIcon: ({size, focused}) => (
            <EvilIcon
              name="user"
              color={focused ? colors.primary_skyblue90 : colors.grey80}
              size={35}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({});
