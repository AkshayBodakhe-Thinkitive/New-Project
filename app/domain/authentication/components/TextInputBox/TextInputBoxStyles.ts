import { StyleSheet } from "react-native";
import { FontType } from "../../../../constants/FontType";
import { colors } from "../../../../constants/Colors";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";


export const TextInputBoxStyles = StyleSheet.create({
    container: {
      width: '100%',
      marginBottom: 20,
    },
    inputContainer: {},
    labelStyles: {
      fontFamily: FontType.figtree_regular,
      color: colors.grey70,
      marginBottom: 10,
    },
    inputBox: {
      borderWidth: 1,
      borderColor: colors.grey40,
      height: responsiveHeight(4.5),
      borderRadius: 8,
      paddingHorizontal: 12,
      fontFamily : FontType.figtree_regular,
      fontSize : responsiveFontSize(0.70)
    },
    eye: {
      position: 'absolute',
      // backgroundColor: 'red',
      right: 15,
      top: '45%',
      padding: 5,
      paddingLeft: 10,
    },
    icon : {
      position: 'absolute',
      right: '5%',
      top: '45%',
      padding: 5,
      paddingLeft: 10,
    }
  });