import { StyleSheet } from "react-native";
import { FontType } from "../../../../constants/FontType";
import { colors } from "../../../../constants/Colors";
import { isTablet } from "../../../../utils/DeviceInfo";

export const AuthDescTextStyles = StyleSheet.create({
    container : {
        marginTop : 8,
        marginBottom : 40,
        alignSelf : 'center'
    },
    text : {
        fontFamily : FontType.figtree_regular,
        fontSize : isTablet ? 20 : 14,
        color : colors.grey80
    }
})