import { Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import { AuthDescTextStyles as styles } from './AuthDescTextStyles'

const AuthDescText = ({children} : AuthDescTextProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default AuthDescText

interface AuthDescTextProps {
    children : ReactNode
}