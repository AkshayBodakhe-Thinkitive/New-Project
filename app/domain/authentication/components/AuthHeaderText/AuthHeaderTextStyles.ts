import { StyleSheet  } from "react-native";
import { FontType } from "../../../../constants/FontType";
import { colors } from "../../../../constants/Colors";
import { isTablet } from "../../../../utils/DeviceInfo";

export const AuthHeaderTextStyles = StyleSheet.create({
    container : {
      marginVertical : 4,
      alignSelf : 'center'
    },
    text : {
        fontFamily : FontType.figtree_semibold,
        fontSize : isTablet ? 40 : 28,
        color : colors.grey90
    }
})