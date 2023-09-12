import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import {SplashScreenStyles as styles} from '../../styles/SpashScreenStyles';
import {useSelectors} from '../../../../redux/selectors/Selectors';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScreenNames } from '../../../../navigation/constants/NavConstants';

const SplashScreen = ({navigation} : Props) => {
  const {auth} = useSelectors();
  

  const navigateForward = () => {
    if(auth.isLoggedIn) {
        navigation.replace(ScreenNames.Main)
    } else{
        navigation.replace(ScreenNames.Auth)
    }
  }
  
  useEffect(()=>{
    setTimeout(() => {
        navigateForward()
    }, 1000);
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

type Props = {
    navigation : any
}
