import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../constants/Colors';
import Card from '../../../common/components/Card/Card';
import CustomText from '../../../common/components/Text/Text';
import Row from '../../../common/components/Row/Row';
import ButtonComponent from '../../authentication/components/ButtonComponent/ButtonComponent';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {FontType} from '../../../constants/FontType';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {ImagePaths} from '../../../constants/ImagePaths';

const EducationalInfoPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Card style={styles.cardStyles}>
          <Row style={styles.row1Style}>
            <CustomText style={styles.eduInfo}>Educational Info</CustomText>
            <ButtonComponent styles={styles.buttonStyles}>
              Edit Details
            </ButtonComponent>
          </Row>
          <Row style={styles.row2Style}>
            <View style={styles.detailsView}>
              <CustomText color={colors.grey70}>Institute Name</CustomText>
              <CustomText>California University</CustomText>
            </View>
            <View style={styles.detailsView}>
              <CustomText color={colors.grey70}>Degree</CustomText>
              <CustomText>Pharma</CustomText>
            </View>
            <View style={styles.detailsView}>
              <CustomText color={colors.grey70}>Branch</CustomText>
              <CustomText>Pharma</CustomText>
            </View>
          </Row>
          <Row style={styles.row2Style}>
            <View style={styles.detailsView}>
              <CustomText color={colors.grey70}>City</CustomText>
              <CustomText>California</CustomText>
            </View>
            <View style={styles.detailsView}>
              <CustomText color={colors.grey70}>State</CustomText>
              <CustomText>Texas</CustomText>
            </View>
            <View style={styles.detailsView}>
              <CustomText color={colors.grey70}>Start Date</CustomText>
              <CustomText>Aug 31, 2019</CustomText>
            </View>
            <View style={styles.detailsView}>
              <CustomText color={colors.grey70}>End Date</CustomText>
              <CustomText>Aug 31, 2019</CustomText>
            </View>
          </Row>
        </Card>
      </View>
      <View style={styles.cardContainer}>
        <Card style={styles.card2Styles}>
          <Row style={styles.row1Style}>
            <CustomText style={styles.eduInfo}>Uploaded Document</CustomText>
          </Row>
          <Row style={styles.docPreviewRow}>
            <Row style={styles.docPreview}>
              <Image source={ImagePaths.docPreview} />
              <CustomText>Degree</CustomText>
              <EntypoIcon name="dot-single" size={18} color={colors.grey60}/>
              <CustomText color={colors.primary_skyblue100}>Preview</CustomText>
            </Row>
            <View>
              <CustomText>5.7MB</CustomText>
            </View>
          </Row>
            <Row style={styles.row1Style}>
              <ButtonComponent styles={styles.buttonStyles}>Check Eligibility</ButtonComponent>
            </Row>
        </Card>
      </View>
    </View>
  );
};

export default EducationalInfoPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  eduInfo: {
    fontSize: responsiveFontSize(1.2),
    fontFamily: FontType.figtree_medium,
  },
  cardContainer: {
    height: '40%',
  },
  cardStyles: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  card2Styles: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  row1Style: {
    width: '100%',
    justifyContent: 'space-between',
  },
  row2Style: {
    width: '100%',
    marginBottom: '2%',
  },
  buttonStyles: {
    width: '15%',
  },
  detailsView: {
    width: '18%',
  },
  docPreviewRow: {
    backgroundColor: colors.grey10,
    width: '100%',
    borderRadius: 8,
    paddingHorizontal: 16,
    height: '28%',
    justifyContent : 'space-between'
  },
  docPreview: {
    width: '20%',
    justifyContent: 'space-between',
  },
});
