import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import AddPatient from '../domain/patient-management/screens/AddPatient';
import {colors} from '../constants/Colors';
import {ImagePaths} from '../constants/ImagePaths';
import {FontType} from '../constants/FontType';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {
  getDeviceOrientation,
  screenHeight,
  screenWidth,
} from '../utils/DimensionUtils';
import {Icons} from '../constants/IconNames';
import Icon from 'react-native-vector-icons/Ionicons';
import EpisodeManagement from '../domain/episode-management/screens/EpisodeManagement';
import TaskList from '../domain/task/screens/TaskList';
import DrawerOpener from '../domain/task/components/DrawerOpener/DrawerOpener';
import {RFValue} from 'react-native-responsive-fontsize';
import {responsiveFontSize, responsiveWidth} from 'react-native-responsive-dimensions';
import ProfileScreen from '../domain/nurse-profile/screens/ProfileScreen';
import { RootState, useAppSelector } from '../redux/store/configureStore';
import HomeScreen from '../domain/Home/screens/HomeScreen';

const Drawer = createDrawerNavigator();
console.log("screenHeight - ", screenHeight, "screenWidth - " ,screenWidth)
const CustomDrawerLabel = () => {
  return (
    <View style={styles.userProfileRow}>
        <View style={styles.profilePhotoContainer}>
          <Text>TK</Text>
        </View>
        <View style={styles.profileNameContainer}>
          <Text style={styles.profileText}>User Name</Text>
        </View>
        <View style={styles.threeDot}>
          <TouchableOpacity>
            <EntypoIcon
              name="dots-three-vertical"
              size={18}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
      </View>
  )
}

const CustomDrawer: React.FC<DrawerContentComponentProps> = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.headerContainer}>
        <Image source={ImagePaths.logoImage} style={styles.image} />
        <Text style={styles.headerLogoText}>Dummy Logo</Text>
      </View>
      {/* <View style={styles.userProfileRow}>
        <View style={styles.profilePhotoContainer}>
          <Text>TK</Text>
        </View>
        <View style={styles.profileNameContainer}>
          <Text style={styles.profileText}>User Name</Text>
        </View>
        <View style={styles.threeDot}>
          <TouchableOpacity>
            <EntypoIcon
              name="dots-three-vertical"
              size={18}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
      </View> */}
      {/* <View
        style={{
          borderWidth: 0.5,
          borderColor: 'rgba(255,255,255, 0.2)',
          marginBottom: screenHeight * 0.015,
        }}></View> */}

      <DrawerItemList {...props} />
      <View
        style={{
          borderWidth: 0.5,
          borderColor: 'rgba(255,255,255, 0.2)',
          marginTop: screenHeight * 0.015,
        }}></View>
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {

  const orientation = useAppSelector((state: RootState) => state.screen.orientation);

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerType: orientation === 'landscape' ? 'permanent' : 'front',
        drawerActiveBackgroundColor: 'rgba(255,255,255, 0.2)',

        drawerLabelStyle: {
          color: 'white',
          fontFamily: FontType.figtree_semibold,
          fontSize: responsiveFontSize(0.75),
          marginLeft: -20,
        },
        drawerItemStyle: {
          height: '10%',
          justifyContent: 'center',
          paddingLeft: '0%',
        },
        drawerStyle: {
          backgroundColor: '#005C71',
          width: orientation === 'landscape' ? '21%' : '28%',
        },
      }}>
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerLabel: () => <CustomDrawerLabel />,

          header: ({navigation}) =>
            orientation === 'portrait' && (
              <DrawerOpener onPress={() => navigation.openDrawer()} />
            ),
        }}
      />
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          
          drawerIcon: ({focused, size}) => <Image source={ImagePaths.home}/>,
          header: ({navigation}) =>
            orientation === 'portrait' && (
              <DrawerOpener onPress={() => navigation.openDrawer()} />
            ),
        }}
        
      />
      <Drawer.Screen
        name="Episode Management"
        component={EpisodeManagement}
        options={{
          drawerIcon: ({focused, size}) => (
            <Image source={ImagePaths.personAdd} />
          ),
          // headerShown: false,
          header: ({navigation}) =>
            orientation === 'portrait' && (
              <DrawerOpener onPress={() => navigation.openDrawer()} />
            ),
        }}
      />
      <Drawer.Screen
        name="Patient Management"
        component={AddPatient}
        options={{
          drawerIcon: ({focused, size}) => (
            <Image source={ImagePaths.personAdd} />
          ),
          header: ({navigation}) =>
            orientation === 'portrait' && (
              <DrawerOpener onPress={() => navigation.openDrawer()} />
            ),
        }}
      />
      <Drawer.Screen
        name="Today's Tasks"
        component={TaskList}
        options={{
          drawerIcon: ({focused, size}) => (
            <Image source={ImagePaths.todayTask} />
          ),
          // headerShown : false,
          header: ({navigation}) =>
            orientation === 'portrait' && (
              <DrawerOpener onPress={() => navigation.openDrawer()} />
            ),
        }}
      />
      <Drawer.Screen
        name="Monthly Schedule"
        component={AddPatient}
        options={{
          drawerIcon: ({focused, size}) => (
            <Image source={ImagePaths.monthlySchedule} />
          ),
          header: ({navigation}) =>
            orientation === 'portrait' && (
              <DrawerOpener onPress={() => navigation.openDrawer()} />
            ),
        }}
      />
      <Drawer.Screen
        name="Biller"
        component={AddPatient}
        options={{
          drawerIcon: ({focused, size}) => (
            <Image source={ImagePaths.personAdd} />
          ),
          header: ({navigation}) =>
            orientation === 'portrait' && (
              <DrawerOpener onPress={() => navigation.openDrawer()} />
            ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  headerContainer: {
    height: screenHeight * 0.035,
    flexDirection: 'row',
    backgroundColor: colors.primary_skyblue100,
    alignItems: 'center',
    marginVertical: screenHeight * 0.01,
  },
  image: {
    marginHorizontal: 15,
    marginLeft: 25,
  },
  headerLogoText: {
    color: colors.white,
    fontFamily: 'Figtree-Medium',
    fontSize: responsiveFontSize(1.2),
  },
  userProfileRow: {
    marginVertical: 10,
    flexDirection: 'row',
    // marginHorizontal: 10,
    height: screenHeight * 0.04,
  },
  profilePhotoContainer: {
    backgroundColor: 'white',
    height: screenHeight * 0.03,
    width: screenHeight * 0.03,
    borderRadius: screenHeight * 0.015,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  profileNameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '15%',
  },
  profileText: {
    color: colors.white,
    fontFamily: FontType.figtree_bold,
    fontSize: responsiveFontSize(0.9),
  },
  threeDot: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '30%',
  },
  customHeader: {
    backgroundColor: colors.white,
    paddingVertical: 10,
    flexDirection: 'row',
    // borderWidth: 1,
    alignItems: 'center',
    height: screenHeight * 0.06,
  },
  customHeaderText: {
    fontFamily: FontType.figtree_semibold,
    fontSize: 22,
    marginLeft: 10,
  },
});
