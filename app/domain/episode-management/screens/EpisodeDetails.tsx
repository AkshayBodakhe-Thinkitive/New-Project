import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImagePaths } from '../../../constants/ImagePaths'
import { FontType } from '../../../constants/FontType'
import { colors } from '../../../constants/Colors'
import ButtonComponent from '../../authentication/components/ButtonComponent/ButtonComponent'

const EpisodeDetails = () => {
  return (
    <View style={styles.container}>
       <View style={styles.container2}>
          <Image source={ImagePaths.assignEpisode}/>
          <Text style={styles.textStyles}>No Episode has been signed yet</Text>
          <ButtonComponent styles={{width : '16%'}}>Assign Episode</ButtonComponent>
       </View>
    </View>
  )
}

export default EpisodeDetails

const styles = StyleSheet.create({
    container : {
      flex : 1,
      backgroundColor : 'white',
    },
    container2 :{
        marginTop : '10%',
        flex : 1,
        alignItems: 'center',
    },
    textStyles : {
        fontSize : 20,
        color : colors.grey60,
        fontFamily : FontType.figtree_medium,
        marginTop : '5%',
        marginBottom : '2%'
    }
})