import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../constants/Colors'
import { FontType } from '../../../constants/FontType'
import { responsiveFontSize } from 'react-native-responsive-dimensions'

const MRN = ({children}:any) => {
  return (
    <View style={styles.container}>
       <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default MRN

const styles = StyleSheet.create({
    container : {
    borderRadius : 16,
    backgroundColor:colors.grey40,
    alignItems : 'center',
    justifyContent : 'center',
    padding:4
    },
    text: {
      fontFamily : FontType.figtree_regular,
      fontSize :  responsiveFontSize(0.6),
    }
})