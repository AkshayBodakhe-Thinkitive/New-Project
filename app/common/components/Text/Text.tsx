import React from 'react';
import { Text as RNText } from 'react-native';
import { FontType } from '../../../constants/FontType';
import { colors } from '../../../constants/Colors';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const CustomText = ({ children, style,size,color,fontFamily, ...props }:TextProps) => {
  const defaultStyles = {
    fontFamily: fontFamily ? fontFamily : FontType.figtree_regular,
    fontSize: size ? size : responsiveFontSize(0.7),
    color : color ? color : colors.grey90,
    marginVertical : 4,
    // borderWidth : 1
  };

  const mergedStyles = [defaultStyles, style];

  return (
    <RNText style={mergedStyles} {...props}>
      {children}
    </RNText>
  );
};

export default CustomText;

type TextProps = {
  children? : any,
  style? : any,
  size? : any,
  color? : any,
  props? : any,
  fontFamily? : any
}
