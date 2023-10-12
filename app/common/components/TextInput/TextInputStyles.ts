import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
import { FontType } from "../../../constants/FontType";
import { colors } from "../../../constants/Colors";


export const TextInputStyles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 20,
    },
    inputContainer: {
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        borderColor: colors.grey40,
        height: responsiveHeight(4.5),
        borderRadius: 8,
        paddingHorizontal: 12,
    },
    labelStyles: {
        fontFamily: FontType.figtree_regular,
        color: colors.grey70,
        marginBottom: 10,
    },
    inputBox: {
        fontFamily: FontType.figtree_regular,
        fontSize: responsiveFontSize(0.70)
    },
    eye: {
        position: 'absolute',
        right: 15,
        top: '45%',
        padding: 5,
        paddingLeft: 10,
    },
    icon: {
        position: 'absolute',
        right: '5%',
        top: '45%',
        padding: 5,
        paddingLeft: 10,
    }
});