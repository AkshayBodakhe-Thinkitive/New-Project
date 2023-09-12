import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ScreenNames } from './constants/NavConstants'
import LoginScreen from '../domain/authentication/screens/login/LoginScreen'
import SignUpScreen from '../domain/authentication/screens/signup/SignUpScreen'

const AuthNavigator = () => {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator initialRouteName={ScreenNames.LoginScreen}>
      <Stack.Screen
       name={ScreenNames.LoginScreen}
       component={LoginScreen}
      />
      <Stack.Screen
       name={ScreenNames.SignUpScreen}
       component={SignUpScreen}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigator

