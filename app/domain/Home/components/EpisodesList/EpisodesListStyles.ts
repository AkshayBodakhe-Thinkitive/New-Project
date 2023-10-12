import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/Colors";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export const EpisodesListStyles = StyleSheet.create({
    linkIcon: {
        color: colors.primary_skyblue100,
        fontSize: responsiveFontSize(1),
        marginHorizontal: '2%',
    },
    circle: {
        height: 24,
        width: 24,
        borderWidth: 0.5,
        borderRadius: 12,
        borderColor: colors.grey60,
        marginHorizontal: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    detailsRow: {
        borderWidth: 0,
        width: '93%',
        justifyContent: 'space-between',
    },
    episodeListView: {
        flexDirection: 'row',
        width: '100%'
    },
    circleContainer: {
        borderWidth: 0,
        position: 'absolute',
        right: '8%',
    },
    phoneEmailRow: {
        marginVertical: '1%'
    },
    phoneIcon: {
        marginRight: 6
    },
    emailIcon: {
        marginHorizontal: 6,
        marginLeft: '9%'
    }
})