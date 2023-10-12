import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../../../constants/Colors'
import { ImagePaths } from '../../../../constants/ImagePaths'
import { FontType } from '../../../../constants/FontType'
import { responsiveHeight } from 'react-native-responsive-dimensions'

const FiltersButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
       <Image source={ImagePaths.filterslines}/>
        <Text style={styles.textStyles}>Filter</Text>
    </TouchableOpacity>
  )
}

export default FiltersButton

const styles = StyleSheet.create({
    container : {
     borderWidth : 1,
     borderRadius : 8,
     borderColor : colors.grey40,
     alignSelf : 'center',
     height : responsiveHeight(4.5),
     alignItems : 'center',
     marginHorizontal : 10,
     flexDirection : 'row',
     paddingHorizontal : 20
    },
    textStyles : {
        fontFamily : FontType.figtree_regular,
        marginHorizontal : 6
    }
})