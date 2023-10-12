import {Text, View} from 'react-native';
import React, { useEffect } from 'react';
import {SplashScreenStyles as styles} from '../../styles/SpashScreenStyles';
import {useSelectors} from '../../../../redux/selectors/Selectors';
import { ScreenNames } from '../../../../navigation/constants/NavConstants';

const SplashScreen = ({navigation} : Props) => {
  const {auth} = useSelectors();
  
  console.log(auth) 

  const navigateForward = () => {
    if(auth.access_token !== '') {
        navigation.replace(ScreenNames.Main)
    } else{
        navigation.replace(ScreenNames.Auth)
       
    }
  }
  
  useEffect(()=>{
  
    navigateForward()
    // setTimeout(() => {
    //     navigateForward()
    // }, 1000);
  },[auth])

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
