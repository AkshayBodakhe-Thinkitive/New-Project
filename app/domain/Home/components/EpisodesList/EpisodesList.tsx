import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import Entypo from 'react-native-vector-icons/Entypo';
import Row from '../../../../common/components/Row/Row';
import CustomText from '../../../../common/components/Text/Text';
import {colors} from '../../../../constants/Colors';
import {FontType} from '../../../../constants/FontType';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {EpisodesListStyles as styles} from './EpisodesListStyles';
import Card from '../../../../common/components/Card/Card';

const EpisodesList = () => {
  return (
    <>
      <Card>
        <View>
          <View style={styles.episodeListView}>
            <Row>
              <CustomText size={responsiveFontSize(1)}>
                Mrs. Shirley Harvey
              </CustomText>
              <FeatherIcon name="link" style={styles.linkIcon} />
            </Row>
            <Row
              style={styles.circleContainer}>
              <TouchableOpacity style={styles.circle}>
                <Entypo
                  name="cross"
                  color={colors.error70}
                  size={responsiveFontSize(1)}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.circle}>
                <Entypo
                  name="check"
                  color={colors.success70}
                  size={responsiveFontSize(1)}
                />
              </TouchableOpacity>
            </Row>
          </View>
          <Row style={styles.phoneEmailRow}>
            <Row>
              <MaterialCommunityIcon
                name="phone-outline"
                size={responsiveFontSize(1)}
                color={colors.primary_skyblue100}
                style={styles.phoneIcon}
              />
              <CustomText color={colors.grey80} size={responsiveFontSize(0.8)}>
                +18584345847
              </CustomText>
            </Row>
            <Row>
              <MaterialCommunityIcon
                name="email-outline"
                size={responsiveFontSize(1)}
                color={colors.primary_skyblue100}
                style={styles.emailIcon}
              />
              <CustomText color={colors.grey80} size={responsiveFontSize(0.8)}>
                Kylejenner@testemail.biz
              </CustomText>
            </Row>
          </Row>
          <Row style={styles.detailsRow}>
            <View>
              <CustomText
                color={colors.grey70}
                fontFamily={FontType.figtree_light}>
                SSN
              </CustomText>
              <CustomText>010000058</CustomText>
            </View>
            <View>
              <CustomText
                color={colors.grey70}
                size={12}
                fontFamily={FontType.figtree_light}>
                Gender
              </CustomText>
              <CustomText>Female</CustomText>
            </View>
            <View>
              <CustomText
                color={colors.grey70}
                size={12}
                fontFamily={FontType.figtree_light}>
                Program Type
              </CustomText>
              <CustomText>Medicare</CustomText>
            </View>
            <View>
              <CustomText
                color={colors.grey70}
                size={12}
                fontFamily={FontType.figtree_light}>
                Date of Birth
              </CustomText>
              <CustomText>Aug 31, 2023</CustomText>
            </View>
          </Row>
        </View>
      </Card>
    </>
  );
};

export default EpisodesList;
