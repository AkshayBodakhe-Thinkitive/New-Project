import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomHeader from '../../task/components/customheader/CustomHeader';
import {
  Breadcrumbs,
  Link,
} from '../../../common/components/BreadCrumbs/BreadCrumbs';
import {ImagePaths} from '../../../constants/ImagePaths';
import TextInputBox from '../../authentication/components/TextInputBox/TextInputBox';
import FiltersButton from '../components/FiltersButton/FiltersButton';
import ButtonComponent from '../../authentication/components/ButtonComponent/ButtonComponent';
import {screenWidth} from '../../../utils/DimensionUtils';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Table from '../../../common/components/TableComponent/TableComponents';
import TableHeader from '../../../common/components/TableComponent/TableHeader';
import TableTitle from '../../../common/components/TableComponent/TableTitle';
import {Checkbox} from 'react-native-paper';
import {colors} from '../../../constants/Colors';
import {FontType} from '../../../constants/FontType';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import TableRow from '../../../common/components/TableComponent/TableRow';
import TableData from '../../../common/components/TableComponent/TableData';
import Status from '../components/Status/Status';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MRN from '../../../common/components/MRN/MRN';

const EpisodesList = ({navigation}:any) => {
  const tbody = [
    {
      epFrom: 'Aug 31 2022',
      epTo: 'jun 20 2023',
      mrn: '010000058',
      patientName: 'Shirley Harvey',
      accessorName: 'Abongjoh Taku',
      insuranceName: 'Medicare managed',
      location: 'Corporate',
      status: 'Open',
    },
    {
      epFrom: 'Aug 31 2022',
      epTo: 'jun 20 2023',
      mrn: '010000058',
      patientName: 'Shirley Harvey',
      accessorName: 'Abongjoh Taku',
      insuranceName: 'Medicare managed',
      location: 'Corporate',
      status: 'Open',
    },
    {
      epFrom: 'Aug 31 2022',
      epTo: 'jun 20 2023',
      mrn: '010000058',
      patientName: 'Shirley Harvey',
      accessorName: 'Abongjoh Taku',
      insuranceName: 'Medicare managed',
      location: 'Corporate',
      status: 'Completed',
    },
    {
      epFrom: 'Aug 31 2022',
      epTo: 'jun 20 2023',
      mrn: '010000058',
      patientName: 'Shirley Harvey',
      accessorName: 'Abongjoh Taku',
      insuranceName: 'Medicare managed',
      location: 'Corporate',
      status: 'In progress',
    },
    {
      epFrom: 'Aug 31 2022',
      epTo: 'jun 20 2023',
      mrn: '010000058',
      patientName: 'Shirley Harvey',
      accessorName: 'Abongjoh Taku',
      insuranceName: 'Medicare managed',
      location: 'Corporate',
      status: 'Open',
    },
    {
      epFrom: 'Aug 31 2022',
      epTo: 'jun 20 2023',
      mrn: '010000058',
      patientName: 'Shirley Harvey',
      accessorName: 'Abongjoh Taku',
      insuranceName: 'Medicare managed',
      location: 'Corporate',
      status: 'Open',
    },
    {
      epFrom: 'Aug 31 2022',
      epTo: 'jun 20 2023',
      mrn: '010000058',
      patientName: 'Shirley Harvey',
      accessorName: 'Abongjoh Taku',
      insuranceName: 'Medicare managed',
      location: 'Corporate',
      status: 'In progress',
    },
    {
      epFrom: 'Aug 31 2022',
      epTo: 'jun 20 2023',
      mrn: '010000058',
      patientName: 'Shirley Harvey',
      accessorName: 'Abongjoh Taku',
      insuranceName: 'Medicare managed',
      location: 'Corporate',
      status: 'Completed',
    },
    {
      epFrom: 'Aug 31 2022',
      epTo: 'jun 20 2023',
      mrn: '010000058',
      patientName: 'Shirley Harvey',
      accessorName: 'Abongjoh Taku',
      insuranceName: 'Medicare managed',
      location: 'Corporate',
      status: 'Open',
    },
    {
      epFrom: 'Aug 31 2022',
      epTo: 'jun 20 2023',
      mrn: '010000058',
      patientName: 'Shirley Harvey',
      accessorName: 'Abongjoh Taku',
      insuranceName: 'Medicare managed',
      location: 'Corporate',
      status: 'In progress',
    },
    {
      epFrom: 'Aug 31 2022',
      epTo: 'jun 20 2023',
      mrn: '010000058',
      patientName: 'Shirley Harvey',
      accessorName: 'Abongjoh Taku',
      insuranceName: 'Medicare managed',
      location: 'Corporate',
      status: 'Open',
    },
    {
      epFrom: 'Aug 31 2022',
      epTo: 'jun 20 2023',
      mrn: '010000058',
      patientName: 'Shirley Harvey',
      accessorName: 'Abongjoh Taku',
      insuranceName: 'Medicare managed',
      location: 'Corporate',
      status: 'In progress',
    },
  ];

  const renderItem = ({item}: any) => {
    return (
      <TableRow>
        <TableData
          width={0.3}
          style={styles.checkBoxContainer}
          textStyle={styles.checkBox}>
          <MaterialIcon
            name="checkbox-blank-outline"
            size={14}
            color={colors.grey60}
          />
        </TableData>
        <TableData>{item.epFrom}</TableData>
        <TableData>{item.epTo}</TableData>
        <TableData>
          <MRN>{item.mrn}</MRN>
        </TableData>
        <TableData>{item.patientName}</TableData>
        <TableData>{item.accessorName}</TableData>
        <TableData>{item.insuranceName}</TableData>
        <TableData>{item.location}</TableData>
        <TableData>
          <Status>{item.status}</Status>
        </TableData>
        <TableData width={0.7} style={styles.more}>
          <TouchableOpacity onPress={()=>navigation.navigate('Episode Detail')}>
            <EntypoIcon
              name="dots-three-vertical"
              size={18}
              color={colors.black}
            />
          </TouchableOpacity>
        </TableData>
      </TableRow>
    );
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="Episode List" />
      <Breadcrumbs>
        <Link>
          <Image source={ImagePaths.homeIcon} />
        </Link>
        <Link>Episode Management</Link>
      </Breadcrumbs>
      <View style={styles.pageContainer}>
        <View style={styles.filtersRow}>
          <View style={styles.inputcontainer}>
            <TextInputBox
              placeholder="Patient name,Patient Id"
              rightIcon={'search'}
              style={styles.textInputStyles}
            />
            <TextInputBox
              placeholder="Location"
              rightMaterialIcon={'keyboard-arrow-down'}
              style={styles.textInputStyles}
            />
          </View>
          <View style={styles.buttonContainer}>
          <FiltersButton /> 
            <FiltersButton />
            <ButtonComponent styles={{width:'25%'}}>Add Episode</ButtonComponent>
          </View>
        </View>
        <View style={{flex: 1}}>
          <Table>
            <TableHeader>
              <TableTitle width={0.3}>
                <MaterialIcon
                  name="checkbox-blank-outline"
                  size={14}
                  color={colors.grey60}
                />
              </TableTitle>
              <TableTitle>Episode From</TableTitle>
              <TableTitle>Episode To</TableTitle>
              <TableTitle>MRN</TableTitle>
              <TableTitle>Patient Name</TableTitle>
              <TableTitle>Accessor Name</TableTitle>
              <TableTitle>Insurance Name</TableTitle>
              <TableTitle>Location</TableTitle>
              <TableTitle>Status</TableTitle>
              <TableTitle width={0.7} style={styles.more}>
                More
              </TableTitle>
            </TableHeader>
            <FlatList data={tbody} renderItem={renderItem} />
          </Table>
        </View>
      </View>
    </View>
  );
};

export default EpisodesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    shadowOpacity: 0.05,
  },
  filtersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth : 1
  },
  inputcontainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  textInputStyles: {
    width: screenWidth * 0.16,
    marginRight: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // width: 120,
    marginLeft : '7%'
  },
  more: {
    flex: 2 / 3,
    borderRightWidth: 0,
  },
  epFromContainer: {
    borderWidth: 0,
    flexDirection: 'row',
  },
  checkBoxContainer: {
    flex: 0.3,
    borderRightWidth: 0,
  },
  epFromText: {
    color: colors.grey70,
    fontFamily: FontType.figtree_medium,
    fontSize: responsiveFontSize(0.6),
  },
  checkBox: {
    marginLeft: 10,
  },
});
