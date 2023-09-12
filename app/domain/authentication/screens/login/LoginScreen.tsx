import { Text, View } from 'react-native'
import React from 'react'
import { LoginScreenStyles as styles } from '../../styles/LoginScreenStyles'
import { LoginProps } from '../../interfaces/PropTypes'


const LoginScreen = ({navigation} : LoginProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={()=>navigation.navigate('Main')}>Login</Text>
      <Text style={styles.text} onPress={()=>navigation.navigate('SignUpScreen')}>Sign Up</Text>
    </View>
  )
}

export default LoginScreen;

