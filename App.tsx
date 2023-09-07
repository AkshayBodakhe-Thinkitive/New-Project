import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const App = () => {
  return (
    <View style={styles.appMain}>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  appMain : {
    flex : 1, 
    alignItems : 'center',
    justifyContent : 'center'
  }
})