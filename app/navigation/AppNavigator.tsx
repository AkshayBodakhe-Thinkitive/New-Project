import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import AuthNavigator from './AuthNavigator'
import MainNavigator from './MainNavigator'
import { ScreenNames } from './constants/NavConstants'
import SplashScreen from '../domain/authentication/screens/onboarding/SplashScreen'

const AppNavigator = () => {
    const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName={ScreenNames.SplashScreen}>
        <Stack.Screen
         name={ScreenNames.SplashScreen}
         options={{headerShown: false}}
         component={SplashScreen}
        />
        <Stack.Screen
         name={ScreenNames.Auth}
         options={{headerShown: false}}
         component={AuthNavigator}
        />
        <Stack.Screen
         name={ScreenNames.Main}
         options={{headerShown: false}}
         component={MainNavigator}
        />
       </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})