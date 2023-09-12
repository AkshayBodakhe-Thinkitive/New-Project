import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MainNavigator = ({navigation}: any) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'black', marginVertical: 20}}>Home Screen</Text>
      <Text onPress={() => navigation.navigate('Auth')} style={{color: 'blue'}}>
        Logout
      </Text>
    </View>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
