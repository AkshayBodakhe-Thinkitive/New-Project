import { StyleSheet } from "react-native";
import { FontType } from "../../../../constants/FontType";
import { colors } from "../../../../constants/Colors";
import { isTablet } from "../../../../utils/DeviceInfo";

export const LoginScreenStyles = StyleSheet.create({
  container: {
    width: isTablet ? 448 : '90%',
  },
  formContainer: {
 
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems : 'center'
  },
  rememberMeText: {
    fontFamily: FontType.figtree_regular,
    color: '#565656',
    marginHorizontal: 8,
    fontSize: 16,
  },
  forgotPassText: {
    color: colors.primary_skyblue100,
    textDecorationLine: 'underline',
    fontFamily : FontType.figtree_semibold,
    fontSize: 16,
  },
})