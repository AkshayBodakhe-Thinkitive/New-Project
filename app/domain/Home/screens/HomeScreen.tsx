import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../../constants/Colors';
import Row from '../../../common/components/Row/Row';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import TextInput from '../../../common/components/TextInput/TextInput';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {ImagePaths} from '../../../constants/ImagePaths';
import {FontType} from '../../../constants/FontType';
import ButtonComponent from '../../authentication/components/ButtonComponent/ButtonComponent';
import CustomText from '../../../common/components/Text/Text';
import Card from '../../../common/components/Card/Card';
import CircularProgress from 'react-native-circular-progress-indicator';
import {HomeScreenStyles as styles} from '../styles/HomeScreenStyles';
import EpisodesList from '../components/EpisodesList/EpisodesList';
import { RootState, useAppDispatch, useAppSelector } from '../../../redux/store/configureStore';
import { logoutAction } from '../../authentication/store/async-actions/logoutAction';

const HomeScreen = ({navigation}:any) => {

  const dispatch = useAppDispatch()

  const arr = [1, 2, 3, 4];

  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const chatParticipants = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const state = useAppSelector((state:RootState)=>state)

  console.log(state)

  const renderItem = () => {
    return <EpisodesList />;
  };

  const renderChatParticipants = () => {
    return (
      <TouchableOpacity>
        <Row style={styles.chatMemberRow}>
          <Row>
            <Image source={ImagePaths.man} style={styles.chatMemberPic} />
            <View style={styles.chatContextView}>
              <Row>
                <Text style={styles.chatName}>Gabriel Silva</Text>
              </Row>
              <Text style={styles.chatLastMessage}>
                Please check CBC's on Mr.Smith...
              </Text>
            </View>
          </Row>
          <View>
            <Text style={styles.chatTimeText}>03:12 PM</Text>
          </View>
        </Row>
      </TouchableOpacity>
    );
  };

  const progressTrackItem = [
    {
      color: colors.success70,
      title: 'ON TRACK',
      count: 0,
    },
    {
      color: colors.error70,
      title: 'NEED ATTENTION',
      count: 0,
    },
    {
      color: colors.warning70,
      title: 'AT RISK',
      count: 0,
    },
    {
      color: colors.grey40,
      title: 'NOT STARTED',
      count: 0,
    },
  ];

  const renderProgressItems = ({item}: any) => {
    return (
      <Row style={styles.prgressStatus}>
        <Row>
          <Entypo
            name="dot-single"
            color={item.color}
            size={responsiveFontSize(2)}
          />
          <CustomText>{item.title}</CustomText>
        </Row>
        <View>
          <CustomText>{item.count}</CustomText>
        </View>
      </Row>
    );
  };

  const logoutFun = () => {
    dispatch(logoutAction())
  }

  return (
    <View style={styles.container}>
      <Row style={styles.searchContainer}>
        <TextInput
          placeholder="Search..."
          style={styles.textInputStyles}
          rightIcon={
            <Icon
              name={'search'}
              color={colors.grey70}
              style={{fontSize: responsiveFontSize(1)}}
            />
          }
        />
        <TouchableOpacity onPress={logoutFun}>
          <MaterialIcon
            name="notifications-none"
            size={responsiveFontSize(1.5)}
          />
        </TouchableOpacity>
      </Row>
      <View style={styles.dashboardContainer}>
        <View style={styles.section1Container}>
          <View style={styles.dashboardFrameContainer}>
            <Image
              source={ImagePaths.dashboardFrame}
              style={styles.imageStyles}
            />
            <View style={styles.dashboard}>
              <View>
                <Text style={styles.greetTextStyle}>Good Morning, Lisa</Text>
                <Text style={styles.greetText2Style}>
                  How you are doing? Track your today’s Tasks.
                </Text>
                <ButtonComponent styles={{width: '37%'}}>
                  Web Check-in
                </ButtonComponent>
              </View>
              <View style={styles.dayShowContainer}>
                <Text style={styles.dayShowText}>Hey It's Monday</Text>
              </View>
            </View>
          </View>
          <View style={styles.episodesContainer}>
            <CustomText size={responsiveFontSize(1.1)}>Episodes</CustomText>
            <View style={{height: '72%'}}>
              <FlatList
                data={arr}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        </View>

        <View style={styles.section2Container}>
          <View style={styles.scheduleCardContainer}>
            <Card style={styles.scheduleCard}>
              <View style={styles.scheduleCardView}>
                <CustomText size={responsiveFontSize(1)}>Schedules</CustomText>
                <Row style={styles.daySqaureContainer}>
                  {days.map(item => {
                    const style = {
                      backgroundColor: colors.primary_skyblue90,
                    };
                    const textStyles = {
                      color: colors.white,
                    };
                    return (
                      <View style={[styles.daySquare, item === 'M' && style]}>
                        <Text
                          style={[styles.dayStyle, item === 'M' && textStyles]}>
                          {item}
                        </Text>
                      </View>
                    );
                  })}
                </Row>
                <CustomText
                  size={responsiveFontSize(0.8)}
                  style={{marginVertical: '2%'}}>
                  Today (10:00 AM - 11:00 AM)
                </CustomText>
                <Row style={styles.detailsRow}>
                  <View style={styles.detailsContainer}>
                    <CustomText
                      color={colors.grey70}
                      size={responsiveFontSize(0.7)}
                      fontFamily={FontType.figtree_light}
                      style={{marginVertical:0}}
                      >
                      Patient Name
                    </CustomText>
                    <CustomText size={responsiveFontSize(0.80)}>
                      Mary Claire
                    </CustomText>
                  </View>
                  <View style={styles.detailsContainer}>
                    <CustomText
                      color={colors.grey70}
                      size={responsiveFontSize(0.7)}
                      fontFamily={FontType.figtree_light}
                      style={{marginVertical:0}}
                      >
                      Assignee
                    </CustomText>
                    <CustomText size={responsiveFontSize(0.80)}>
                      Dr. Hans Ramore
                    </CustomText>
                  </View>
                </Row>
              </View>
            </Card>
          </View>
          <View style={styles.progressContainer}>
            <CustomText size={responsiveFontSize(1.1)}>
              Overall Progress
            </CustomText>
            <Card>
              <View style={styles.progSec}>
                <CircularProgress
                  value={72}
                  radius={responsiveWidth(5)}
                  duration={2000}
                  activeStrokeColor={'#00a8e0'}
                  progressValueColor={colors.grey90}
                  progressValueStyle={{
                    fontFamily: FontType.figtree_regular,
                    color: 'white',
                  }}
                  inActiveStrokeColor={colors.grey40}
                  maxValue={100}
                  title={'Completed'}
                  titleColor={colors.grey80}
                  titleStyle={{fontFamily: FontType.figtree_regular}}
                  inActiveStrokeWidth={responsiveWidth(1.1)}
                  activeStrokeWidth={responsiveWidth(1.1)}
                  valueSuffix={'%'}
                />
              </View>
              <View style={styles.progSec2}>
                <FlatList
                  data={progressTrackItem}
                  renderItem={renderProgressItems}
                  scrollEnabled={false}
                />
              </View>
            </Card>
          </View>
          <View style={styles.chatContainer}>
            <Card style={styles.chatCard}>
              <View style={styles.chatListContainer}>
                <Row style={styles.chatListItemRow}>
                  <CustomText>Messages</CustomText>
                  <EntypoIcon
                    name="dots-three-vertical"
                    size={10}
                    color={colors.black}
                  />
                </Row>
                <View style={styles.listView}>
                  <FlatList
                    data={chatParticipants}
                    renderItem={renderChatParticipants}
                  />
                </View>
              </View>
            </Card>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
