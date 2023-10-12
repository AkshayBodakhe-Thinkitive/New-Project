import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Row = ({children,style,...props}:any) => {
  return (
    <View style={[styles.container,style]} {...props}>
      {children}
    </View>
  )
}

export default Row

const styles = StyleSheet.create({
    container : {
      
        flexDirection : 'row',
        alignItems : 'center',
    }
})