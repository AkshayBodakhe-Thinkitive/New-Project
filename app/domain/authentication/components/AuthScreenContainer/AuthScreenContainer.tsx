import {Image, ImageBackground, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import {colors} from '../../../../constants/Colors';
import {ImagePaths} from '../../../../constants/ImagePaths';
import { isTablet } from '../../../../utils/DeviceInfo';

const AuthScreenContainer = ({children}: AuthScreenContainerProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={ImagePaths.logoImage} style={styles.image} />
        <Text style={styles.headerLogoText}>Dummy Logo</Text>
      </View>
       <View style={styles.childrenContainer}>
           {children}
       </View>
      <Image source={ImagePaths.leftHexagon} style={styles.leftHexagonImage}/>
      <Image source={ImagePaths.rightHexagon} style={styles.rightHexagonImage} />
    </View>
  );
};

export default AuthScreenContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: '6%',
    flexDirection: 'row',
    backgroundColor: colors.primary_skyblue80,
    alignItems: 'center',
  },
  image: {
    marginHorizontal: 15,
    marginLeft: 25,
  },
  headerLogoText: {
    color: colors.white,
    fontFamily: 'Figtree-Medium',
    fontSize: 30,
  },
  leftHexagonImage : {
   position : 'absolute',
   bottom : 0,
   height : isTablet ? '30%' : '17%',
    width : isTablet ? '40%' : '35%'
  },
  rightHexagonImage : {
    position : 'absolute',
    top : '6%',
    zIndex : -2,
    right : 0,
    height : isTablet ? '30%' : '20%',
    width : isTablet ? '40%' : '30%'
  },
  childrenContainer : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  }
});

interface AuthScreenContainerProps {
  children: ReactNode;
}
