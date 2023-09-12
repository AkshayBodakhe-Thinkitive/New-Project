import { Text, View } from 'react-native'
import React from 'react'
import { SignUpScreenstyles as styles } from '../../styles/SignUpScreenStyles'
import { SignUpProps } from '../../interfaces/PropTypes'

const SignUpScreen = ({navigation} : SignUpProps) => {
  return (
    <View style={styles.container}>
       <Text style={styles.text}>SignUpScreen</Text>
      <Text style={styles.text} onPress={()=>navigation.navigate('LoginScreen')}>Login</Text>
    </View>
  )
}

export default SignUpScreen

