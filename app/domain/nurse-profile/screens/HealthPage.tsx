import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../constants/Colors';
import Card from '../../../common/components/Card/Card';
import Row from '../../../common/components/Row/Row';
import CustomText from '../../../common/components/Text/Text';
import ButtonComponent from '../../authentication/components/ButtonComponent/ButtonComponent';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {FontType} from '../../../constants/FontType';
import { ImagePaths } from '../../../constants/ImagePaths';

const HealthPage = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Card style={styles.cardStyles}>
          <Row style={styles.row1Style}>
            <CustomText style={styles.eduInfo}>Health Info</CustomText>
            <ButtonComponent styles={styles.buttonStyles}>
              Edit Details
            </ButtonComponent>
          </Row>
          <Row style={styles.detailsRowStyles}>
            <View style={styles.detailsView}>
              <CustomText color={colors.grey70}>
                Date of your last examination by physician:
              </CustomText>
              <CustomText>Aug 31, 2023</CustomText>
            </View>
            <View style={styles.detailsView}>
              <CustomText color={colors.grey70}>
                Do you have any physical/health limitations that might affect
                your ability to perform the expected duties you are hired for?
              </CustomText>
              <CustomText>Yes</CustomText>
            </View>
            <View style={styles.detailsView}>
              <CustomText color={colors.grey70}>
                If yes, please mention the reason in the following column:
              </CustomText>
              <CustomText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in justo vel libero pharetra porttitor ac eu ex. Integer eget
                felis in urna cursus tristique. Sed nec justo id quam suscipit
                feugiat. In hac habitasse platea dictumst. Vestibulum gravida
                sapien vitae ligula tincidunt,
              </CustomText>
            </View>
            <View style={styles.detailsView}>
              <CustomText color={colors.grey70}>
                Have you ever been dismissed from employment for drug
                use/addiction or ever been treated for drug use/addiction?
              </CustomText>
              <CustomText>Yes</CustomText>
            </View>
            <View style={styles.detailsView}>
              <CustomText color={colors.grey70}>
                If yes, please mention the reason in the following column:
              </CustomText>
              <CustomText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in justo vel libero pharetra porttitor ac eu ex. Integer eget
                felis in urna cursus tristique. Sed nec justo id quam suscipit
                feugiat. In hac habitasse platea dictumst. Vestibulum gravida
                sapien vitae ligula tincidunt,
              </CustomText>
            </View>
            <View style={styles.detailsView}>
              <CustomText color={colors.grey70}>
                Have you ever been convicted of a crime other than a routine
                traffic citation?
              </CustomText>
              <CustomText>Yes</CustomText>
            </View>
            <View style={styles.detailsView}>
              <CustomText color={colors.grey70}>
                How did you hear about our company?
              </CustomText>
              <CustomText>Referral by another employee</CustomText>
            </View>
            <View style={styles.detailsView}>
              <CustomText color={colors.grey70}>I was referred by :</CustomText>
              <CustomText>Kyle Jenner</CustomText>
            </View>
          </Row>
        </Card>
      </View>
      <View>
        <Card>
          <View style={styles.row2Style}>
            <CustomText style={styles.eduInfo}>Applicant’s Signature</CustomText>
            <Card>
                <Image source={ImagePaths.signPreview}/>
            </Card>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

export default HealthPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  cardStyles: {
    flexDirection: 'column',
  },
  row1Style: {
    width: '100%',
    justifyContent: 'space-between',
  },
  detailsRowStyles: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  eduInfo: {
    fontSize: responsiveFontSize(1.2),
    fontFamily: FontType.figtree_medium,
  },
  buttonStyles: {
    width: '15%',
  },
  detailsView: {
    marginBottom: '2%',
  },
  row2Style: {
    width: '100%',
    justifyContent: 'space-between',
  },
});
