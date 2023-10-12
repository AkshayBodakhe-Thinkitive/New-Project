import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { isTablet } from '../utils/DeviceInfo';
import DrawerNavigator from './DrawerNavigator';
import BottomNavigator from './BottomNavigator';

const MainNavigator = () => {
  return (
    <View style={{flex: 1}}>
       {
        isTablet ? <DrawerNavigator/> : <BottomNavigator/>
       }
    </View>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
