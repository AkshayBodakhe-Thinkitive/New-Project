import { StyleSheet } from "react-native";
import { colors } from "../../../constants/Colors";
import { FontType } from "../../../constants/FontType";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export const HomeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : 'white'
    },
    searchContainer: {
        borderBottomWidth: 1,
        borderColor: colors.grey30,
        paddingHorizontal: 18,
        paddingVertical: 10,
        justifyContent: 'space-between',
    },
    textInputStyles: {
        width: '50%',
        marginBottom: 0,
    },
    dashboardContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    section1Container: {
        width: '60%',
        padding: 8,
    },
    section2Container: {
        width: '40%',
        padding: 8,
    },
    scheduleCardContainer: {
        height: '22%',
        marginBottom: '5%',
    },
    dashboardFrameContainer: {
        margin: 8,
        position: 'absolute',
        height: '46.5%',
        width: '100%',
    },
    imageStyles: {
        width: '100%',
        height: '45.5%',
        borderRadius: 8,
    },
    dashboard: {
        position: 'absolute',
        padding: '3%',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0,0,0,0.06)',
        borderRadius: 8,
    },
    greetTextStyle: {
        fontFamily: FontType.figtree_semibold,
        fontSize: responsiveFontSize(2),
        color: colors.grey90,
        marginBottom: '2%',
    },
    greetText2Style: {
        color: colors.grey80,
        fontSize: responsiveFontSize(0.7),
        fontFamily: FontType.figtree_regular,
        marginBottom: '3%',
    },
    dayShowContainer: {
        top: '4%',
        right: '22%',
        transform: [{ rotate: '5deg' }],
    },
    dayShowText: {
        color: colors.grey900,
        fontFamily: FontType.figtree_semibold,
        fontSize: responsiveFontSize(0.9),
    },
    episodesContainer: {
        position: 'absolute',
        width: '100%',
        top: '24%',
        height: '100%',
        margin: 8,
    },
    detailsContainer: {
        marginVertical : 0,
    },
    detailsRow: {
        borderWidth: 0,
        width: '93%',
        justifyContent: 'space-between',
    },
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
    daySqaureContainer: {
        width: '100%',
        height: '20%',
        marginVertical: '2%',
        justifyContent: 'space-between',
    },
    daySquare: {
        borderWidth: 0.5,
        borderRadius: 6,
        borderColor: colors.grey40,
        height: '100%',
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dayStyle: {
        fontFamily: FontType.figtree_regular,
    },
    scheduleCard: {
        marginVertical: 0,
    },
    scheduleCardView: {
        width: '100%',
        padding: '1%',
    },
    progressContainer: {
        height: '24%',
    },
    progSec: {
        height: '100%',
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    progSec2: {
        // height: '25%',
        width: '52%',
        justifyContent: 'center',
    },
    prgressStatus: {
        marginVertical: '-1.2%',
        paddingRight: '6%',
        justifyContent: 'space-between',
    },
    chatContainer: {
        height: '51%',
    },
    chatMemberRow: {
        borderBottomWidth: 0.5,
        borderColor: colors.grey40,
        padding: '2.5%',
        justifyContent: 'space-between',
    },
    chatMemberPic: {
        height: 30,
        width: 30,
        borderRadius: 15,
    },
    chatContextView: {
        marginHorizontal: '4%'
    },
    chatName: {
        color: colors.grey90,
        fontFamily: FontType.figtree_medium,
        fontSize: responsiveFontSize(0.7),
    },
    chatLastMessage: {
        color: colors.grey70,
        fontFamily: FontType.figtree_medium,
        fontSize: responsiveFontSize(0.7),
    },
    chatTimeText: {
        fontSize: responsiveFontSize(0.7),
        fontFamily: FontType.figtree_regular,
        color: colors.grey60,
    },
    chatCard: {
        padding: 0
    },
    chatListContainer: {
        borderWidth: 0,
        height: '100%',
        width: '100%'
    },
    chatListItemRow: {
        borderBottomWidth: 1,
        borderColor: colors.grey40,
        padding: '2%',
        paddingHorizontal: '4%',
        backgroundColor: colors.grey30,
        justifyContent: 'space-between',
    },
    listView: {
        height: '90%'
    }

})