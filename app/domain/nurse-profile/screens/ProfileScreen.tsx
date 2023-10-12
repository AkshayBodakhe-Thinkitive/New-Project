import {Animated, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {  } from 'react';
import CustomHeader from '../../task/components/customheader/CustomHeader';
import {
  Breadcrumbs,
  Link,
} from '../../../common/components/BreadCrumbs/BreadCrumbs';
import {ImagePaths} from '../../../constants/ImagePaths';
import Card from '../../../common/components/Card/Card';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomText from '../../../common/components/Text/Text';
import Row from '../../../common/components/Row/Row';
import {colors} from '../../../constants/Colors';
import Octicon from 'react-native-vector-icons/Octicons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {FontType} from '../../../constants/FontType';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import EducationalInfoPage from './EducationalInfoPage';
import EmployeeHistoryPage from './EmployeeHistoryPage';
import NursingLicensePage from './NursingLicensePage';
import HealthPage from './HealthPage';
import { RootState, useAppDispatch, useAppSelector } from '../../../redux/store/configureStore';
import { logoutAction } from '../../authentication/store/async-actions/logoutAction';

const ProfileScreen = ({navigation}:any) => {

  const dispatch = useAppDispatch()

  const orientation = useAppSelector((state: RootState) => state.screen.orientation);
  
  const borderRadiusPercentage = 50;
  const componentWidth = orientation === "landscape" ? responsiveHeight(12) : responsiveWidth(12);
  const borderRadiusPixel = (borderRadiusPercentage / 100) * componentWidth;

  const Tab = createMaterialTopTabNavigator();

  const logoutFun = () => {
    dispatch(logoutAction())
  }

  
  return (
    <View style={styles.container}>
      <CustomHeader title="Nurse Profile" />
      <Breadcrumbs>
        <Link>
          <Image source={ImagePaths.homeIcon} />
        </Link>
        <Link>Profile</Link>
      </Breadcrumbs>
      <View style={styles.pageContainer}>
        <View style={styles.row}>
          <View style={styles.card1Container}>
            <Card>
              <View style={styles.imageContainer}>
                <Image
                  source={ImagePaths.patientPic}
                  style={{
                    width: componentWidth,
                    height: componentWidth,
                    borderRadius: borderRadiusPixel, 
                  }}
                />
              </View>
              <View>
                <Row>
                  <CustomText size={responsiveFontSize(0.9)}>
                    Mrs. Shirley Harvey 
                  </CustomText>
                  <TouchableOpacity style={{marginHorizontal : '4%'}} onPress={logoutFun}>
                     <Text>Logout</Text>
                  </TouchableOpacity>
                </Row>
                <Row style={styles.rowStyle}>
                  <Row>
                    <MaterialCommunityIcon
                      name="phone-outline"
                      size={responsiveFontSize(0.8)}
                      color={colors.primary_skyblue100}
                      style={{marginRight: 6}}
                    />
                    <CustomText
                      color={colors.grey80}
                      size={responsiveFontSize(0.7)}>
                      +18584345847
                    </CustomText>
                  </Row>
                  <Row>
                    <MaterialCommunityIcon
                      name="email-outline"
                      size={responsiveFontSize(0.8)}
                      color={colors.primary_skyblue100}
                      style={{marginHorizontal: 6}}
                    />
                    <CustomText
                      color={colors.grey80}
                      size={responsiveFontSize(0.7)}>
                      Kylejenner@testemail.biz
                    </CustomText>
                  </Row>
                </Row>
                <Row>
                  <Row>
                    <Octicon
                      name="location"
                      size={responsiveFontSize(0.8)}
                      color={colors.primary_skyblue100}
                      style={{marginRight: 6}}
                    />
                    <CustomText
                      color={colors.grey80}
                      size={responsiveFontSize(0.7)}>
                      6 SailMaker Jn, Richmond hill GA 31324
                    </CustomText>
                  </Row>
                </Row>
              </View>
            </Card>
          </View>
          <View style={styles.card2Container}>
            <Card>
              <View>
                <Row style={{borderWidth: 0, marginBottom: '3%'}}>
                  <View style={styles.detailsContainer}>
                    <CustomText
                      color={colors.grey70}
                      fontFamily={FontType.figtree_light}>
                      SSN
                    </CustomText>
                    <CustomText>010000058</CustomText>
                  </View>
                  <View style={styles.detailsContainer}>
                    <CustomText
                      color={colors.grey70}
                      size={12}
                      fontFamily={FontType.figtree_light}>
                      Gender
                    </CustomText>
                    <CustomText>Female</CustomText>
                  </View>
                  <View style={styles.detailsContainer}>
                    <CustomText
                      color={colors.grey70}
                      size={12}
                      fontFamily={FontType.figtree_light}>
                      Program Type
                    </CustomText>
                    <CustomText>Medicare</CustomText>
                  </View>
                  <View style={styles.detailsContainer}>
                    <CustomText
                      color={colors.grey70}
                      size={12}
                      fontFamily={FontType.figtree_light}>
                      Date of Birth
                    </CustomText>
                    <CustomText>Aug 31, 2023</CustomText>
                  </View>
                </Row>
                <Row>
                  <View style={styles.detailsContainer}>
                    <CustomText
                      color={colors.grey70}
                      fontFamily={FontType.figtree_light}>
                      US Citizen
                    </CustomText>
                    <CustomText>Yes</CustomText>
                  </View>
                  <View style={styles.detailsContainer}>
                    <CustomText
                      color={colors.grey70}
                      fontFamily={FontType.figtree_light}>
                      Work Type
                    </CustomText>
                    <CustomText>Full Time</CustomText>
                  </View>
                </Row>
              </View>
            </Card>
          </View>
        </View>
        <View style={{flex: 1}}>
          <Tab.Navigator
            screenOptions={{
              
              tabBarLabelStyle: {
                fontSize: responsiveFontSize(0.75),
                fontFamily: FontType.figtree_regular,
                textTransform: 'capitalize',
              },
              tabBarItemStyle: {width: responsiveWidth(12)},
              tabBarIndicatorStyle: {
                backgroundColor: colors.primary_skyblue90,
              },
              tabBarActiveTintColor: colors.primary_skyblue90,
              tabBarInactiveTintColor: colors.grey90,
            }}>
            <Tab.Screen name="Educational Info" component={EducationalInfoPage} />
            <Tab.Screen name="Employee History" component={EmployeeHistoryPage} />
            <Tab.Screen name="Nursing License" component={NursingLicensePage} />
            <Tab.Screen name="Health" component={HealthPage} />
          </Tab.Navigator>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 1,
  },
  pageContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    shadowOpacity: 0.05,
  },
  imageContainer: {
    width: '30%',
    flexDirection: 'row',
    // borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    // borderWidth :1,
    justifyContent: 'space-between',
    width: '100%',
  },
  card1Container: {
    flexDirection: 'row',
    width: '49%',
  },
  card2Container: {
    flexDirection: 'row',
    width: '50%',
  },

  imageStyles: {
    width: responsiveWidth(9),
    height: responsiveHeight(9),
    borderRadius: responsiveHeight(4),
    margin: 3,
  },
  rowStyle: {
    marginVertical: 10,
    flexWrap: 'wrap',
  },
  detailsContainer: {
    marginRight: '9%',
  },
  dotStyle : {
    position: 'absolute',
    left: 0,
  }
});
