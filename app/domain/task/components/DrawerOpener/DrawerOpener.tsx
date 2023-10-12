import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {screenHeight} from '../../../../utils/DimensionUtils';
import {colors} from '../../../../constants/Colors';
import OctiIcon from 'react-native-vector-icons/Octicons';

const DrawerOpener = ({onPress}:any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        <OctiIcon name="three-bars" color={colors.white} size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default DrawerOpener;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: screenHeight * 0.04,
    backgroundColor: colors.primary_skyblue100,
    alignItems : 'center',
    width : '100%'
  },
  touchable : {
    // borderWidth : 1,
    marginTop : 15,
    marginHorizontal : 10
  }
});
