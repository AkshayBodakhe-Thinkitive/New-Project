import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/Colors";
import { FontType } from "../../../../constants/FontType";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";


export const ButtonComponentStyles = StyleSheet.create({
    buttonContainer : {
        width : '100%',
        backgroundColor : colors.primary_skyblue90,
        alignItems : 'center',
        justifyContent : 'center',
        height : responsiveHeight(5),
        borderRadius : 8,
        marginVertical : 10,
        paddingHorizontal : 10
    },
    buttonText : {
        color : colors.white,
        fontFamily : FontType.figtree_medium,
        fontSize : responsiveFontSize(0.8)
    }
})