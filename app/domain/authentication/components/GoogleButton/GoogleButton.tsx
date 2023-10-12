import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ImagePaths } from '../../../../constants/ImagePaths'
import { GoogleButtonStyles as styles } from './GoogleButtonStyles'
import { AuthStrings } from '../../constants/StringConstants'

const GoogleButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
        <Image
        source={ImagePaths.googleIcon}
        style={styles.googleImageStyles}
        />
      <Text style={styles.buttonTextStyles}>{AuthStrings.LOGIN_GOOGLE}</Text>
    </TouchableOpacity>
  )
}

export default GoogleButton

