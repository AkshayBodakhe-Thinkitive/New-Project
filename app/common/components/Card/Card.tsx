import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../constants/Colors'

const Card = ({children,style}:any) => {
  return (
    <View style={[styles.container,style]}>
       {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container : {
        flex :1,
        flexDirection : 'row',
        borderWidth : 1,
        borderRadius : 8,
        borderColor  : colors.grey40,
        padding : '2%',
        marginVertical : '2%',
        alignItems : 'center',
        backgroundColor : 'white',
        // elevation : 4,
        shadowOpacity : 0.02
    }
})