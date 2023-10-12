import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/Colors";


export const GoogleButtonStyles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        borderWidth : 1,
        borderColor : colors.grey30,
        width : '100%',
        alignItems : 'center',
        justifyContent : 'center',
        height : 48,
        borderRadius : 8,
        marginVertical : 10
    },
    googleImageStyles : {
      height : 24,
      width : 24
    },
    buttonTextStyles : {
        color : colors.grey90,
        marginHorizontal : 9
    }
})