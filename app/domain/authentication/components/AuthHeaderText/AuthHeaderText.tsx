import { Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import { AuthHeaderTextStyles as styles } from './AuthHeaderTextStyles'

const AuthHeaderText = ({children} : AuthHeaderTextProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default AuthHeaderText

interface AuthHeaderTextProps {
    children : ReactNode
}