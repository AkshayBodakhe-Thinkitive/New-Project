import {StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import {colors} from '../../../../constants/Colors';
import {FontType} from '../../../../constants/FontType';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

const Status = ({children,width}: {children: ReactNode,width?:any}) => {
  let bg = '';
  let txtStyle = '';

  switch (children) {
    case 'Open':
      bg = colors.grey30;
      txtStyle = colors.grey70;
      break;

    case 'Completed':
      bg = colors.success10;
      txtStyle = colors.success70;
      break;

      case 'In progress':
        bg = colors.warning10;
        txtStyle = colors.warning70;
  }

  const bgStyle = {
    backgroundColor: bg,
  };

  const textStyle = {
    color: txtStyle,
  };
  return (
    <View style={[styles.mainContainer,{width:width?width:80}]}>
      <View style={[bgStyle, styles.container]}>
        <EntypoIcon
          name="dot-single"
          size={30}
          style={[textStyle, {position: 'absolute', left: 0}]}
        />
        <Text style={[textStyle, styles.text]}>{children}</Text>
      </View>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  mainContainer: {
    flex : 1,
    paddingVertical: 10,
    // paddingHorizontal: 6,
   
  },
  container: {
    padding: 5,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: FontType.figtree_regular,
    marginLeft : 10,
    fontSize : responsiveFontSize(0.6)
  },
});
