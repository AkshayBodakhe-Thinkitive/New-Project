import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../task/components/customheader/CustomHeader';
import {
  Breadcrumbs,
  Link,
} from '../../../common/components/BreadCrumbs/BreadCrumbs';
import {FontType} from '../../../constants/FontType';
import {colors} from '../../../constants/Colors';
import Card from '../../../common/components/Card/Card';
import {ImagePaths} from '../../../constants/ImagePaths';
import Row from '../../../common/components/Row/Row';
import CustomText from '../../../common/components/Text/Text';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicon from 'react-native-vector-icons/Octicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import EpisodeDetails from './EpisodeDetails';
import InsuranceDetails from './InsuranceDetails';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const EpisodeDetailPage = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={styles.container}>
      <CustomHeader title="Episode Management" />
      <Breadcrumbs>
        <Link>
          <Image source={ImagePaths.homeIcon} />
        </Link>
        <Link>Patient Management</Link>
        <Link>Detail Page</Link>
      </Breadcrumbs>

      <View style={styles.pageContainer}>
        <View style={styles.row}>
          <Text style={styles.patientDetTxt}>Patient Detail</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.card1Container}>
            <Card>
              <View style={styles.imageContainer}>
                <Image
                  source={ImagePaths.patientPic}
                  style={styles.imageStyles}
                />
              </View>
              <View>
                <View style={{marginVertical: 5}}>
                  <CustomText>Mr. Shirley Harvey</CustomText>
                </View>
                <Row style={styles.rowStyle}>
                  <Row>
                    <MaterialCommunityIcon
                      name="phone-outline"
                      size={14}
                      color={colors.primary_skyblue100}
                      style={{marginRight: 6}}
                    />
                    <CustomText color={colors.grey80} size={14}>
                      +18584345847
                    </CustomText>
                  </Row>
                  <Row>
                    <MaterialCommunityIcon
                      name="email-outline"
                      size={14}
                      color={colors.primary_skyblue100}
                      style={{marginHorizontal: 6}}
                    />
                    <CustomText color={colors.grey80} size={14}>
                      Kylejenner@testemail.biz
                    </CustomText>
                  </Row>
                </Row>
                <Row>
                  <Row>
                    <Octicon
                      name="location"
                      size={14}
                      color={colors.primary_skyblue100}
                      style={{marginRight: 6}}
                    />
                    <CustomText color={colors.grey80} size={14}>
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
                      size={12}
                      fontFamily={FontType.figtree_light}>
                      MRN
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
                      Referred
                    </CustomText>
                    <CustomText>Aug 31, 2023</CustomText>
                  </View>
                  <View style={{width: '18%', height: '70%'}}>
                    <Card style={{padding: 2, alignItems: 'center'}}>
                      <EntypoIcon
                        name="dot-single"
                        size={30}
                        style={{position: 'absolute'}}
                        color={colors.success60}
                      />
                      <CustomText
                        style={{marginLeft: '25%'}}
                        fontFamily={FontType.figtree_light}>
                        Active
                      </CustomText>
                      <MaterialIcon name="keyboard-arrow-down" size={18} />
                    </Card>
                  </View>
                </Row>
                <Row style={{borderWidth: 0}}>
                  <View style={styles.detailsContainer}>
                    <CustomText
                      color={colors.grey70}
                      fontFamily={FontType.figtree_light}>
                      Accessor Name
                    </CustomText>
                    <CustomText>Abongjoh Taku</CustomText>
                  </View>
                  <View style={styles.detailsContainer}>
                    <CustomText
                      color={colors.grey70}
                      fontFamily={FontType.figtree_light}>
                      Insurance Name
                    </CustomText>
                    <CustomText>Medicare Managed...</CustomText>
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
                fontSize: 14,
                fontFamily: FontType.figtree_regular,
                textTransform: 'capitalize',
              },
              tabBarItemStyle: {width: 100},
              tabBarIndicatorStyle: {
                backgroundColor: colors.primary_skyblue90,
              },
              tabBarActiveTintColor: colors.primary_skyblue90,
              tabBarInactiveTintColor: colors.grey90,
            }}>
            <Tab.Screen name="Episode" component={EpisodeDetails} />
            <Tab.Screen name="Insurance" component={InsuranceDetails} />
            <Tab.Screen name="Roles" component={InsuranceDetails} />
          </Tab.Navigator>
        </View>
      </View>
    </View>
  );
};

export default EpisodeDetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    shadowOpacity: 0.05,
    padding: 8,
  },
  row: {
    flexDirection: 'row',
    // borderWidth :1,
    justifyContent: 'space-between',
    width: '100%',
  },
  patientDetTxt: {
    fontFamily: FontType.figtree_medium,
    fontSize: 16,
    color: colors.grey90,
  },

  imageStyles: {
    width: responsiveWidth(9),
    height: responsiveHeight(12),
    borderRadius: responsiveWidth(10),
    margin: 3,
  },
  imageContainer: {
    width: '30%',
    flexDirection: 'row',
    // borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card1Container: {
    flexDirection: 'row',
    width: '46%',
  },
  card2Container: {
    flexDirection: 'row',
    width: '53%',
  },
  rowStyle: {
    marginVertical: 10,
  },
  detailsContainer: {
    marginRight: '7%',
  },
});
