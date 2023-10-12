import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RESET_PASSWORD, ScreenNames} from './constants/NavConstants';
import LoginScreen from '../domain/authentication/screens/login/LoginScreen';
import SignUpScreen from '../domain/authentication/screens/signup/SignUpScreen';
import ForgotPasswordScreen from '../domain/authentication/screens/forgotpassword/ForgotPasswordScreen';
import ResetPasswordScreen from '../domain/authentication/screens/resetpassword/ResetPasswordScreen';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName={ScreenNames.LoginScreen}>
      <Stack.Screen
        name={ScreenNames.LoginScreen}
        component={LoginScreen}
        options={{
          headerShown: false,
          animation : 'none'
        }}
      />
      <Stack.Screen name={ScreenNames.SignUpScreen} component={SignUpScreen} />
      <Stack.Screen
        name={ScreenNames.ForgotPassScreen}
        component={ForgotPasswordScreen}
        options={{
          headerShown: false,
          animation : 'none'
        }}
      />
       <Stack.Screen
        name={RESET_PASSWORD}
        component={ResetPasswordScreen}
        options={{
          headerShown: false,
          animation : 'none'
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
