import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DataTable} from 'react-native-paper';
import {colors} from '../../../constants/Colors';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {ImagePaths} from '../../../constants/ImagePaths';
import {FontType} from '../../../constants/FontType';
import TextInputBox from '../../authentication/components/TextInputBox/TextInputBox';
import {screenWidth} from '../../../utils/DimensionUtils';
import FiltersButton from '../../episode-management/components/FiltersButton/FiltersButton';
import ButtonComponent from '../../authentication/components/ButtonComponent/ButtonComponent';
import Status from '../../episode-management/components/Status/Status';
import CustomHeader from '../components/customheader/CustomHeader';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const TaskList = () => {
  const [items] = React.useState([
    {
      key: 1,
      name: 'Load',
      docName: 'HHA Care Plan',
      time: '10:00 AM - 1:00 PM',
      empName: 'Abongjoh Taku',
      status: 'Open',
    },
    {
      key: 2,
      name: 'Load',
      docName: 'HHA Care Plan',
      time: '10:00 AM - 1:00 PM',
      empName: 'Abongjoh Taku',
      status: 'Completed',
    },
    {
      key: 3,
      name: 'Load',
      docName: 'HHA Care Plan',
      time: '10:00 AM - 1:00 PM',
      empName: 'Abongjoh Taku',
      status: 'Completed',
    },
    {
      key: 4,
      name: 'Load',
      docName: 'HHA Care Plan',
      time: '10:00 AM - 1:00 PM',
      empName: 'Abongjoh Taku',
      status: 'Completed',
    },
  ]);

  return (
    <View style={styles.container}>
      <CustomHeader title="Task List" />
      <View style={styles.directoryShowContainer}>
        <Image source={ImagePaths.homeIcon} />
        <Text style={styles.directoryText}>
          {' '}
          / Patient Management / Detail Page / Episode / Task List
        </Text>
      </View>
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
            <FiltersButton />
          </View>
          <View style={styles.buttonContainer}>
            <ButtonComponent>Add Task</ButtonComponent>
          </View>
        </View>

        <View>
          <DataTable style={styles.tableContainer}>
            <DataTable.Header style={styles.tableHeader}>
              <DataTable.Title style={[styles.tableCol,{flex: 2/3}]}>
                <View
                  style={styles.loadCellContainer}>
                  <MaterialIcon
                    name="checkbox-blank-outline"
                    size={20}
                    color={colors.grey60}
                  />
                  <Text style={styles.tableCellText}>Load</Text>
                </View>
                {/* Load */}
              </DataTable.Title>
              <DataTable.Title
                style={styles.tableCol}
                textStyle={styles.tableHeaderCellText}>
                Doc Name
              </DataTable.Title>
              <DataTable.Title
                style={styles.tableCol}
                textStyle={styles.tableHeaderCellText}>
                Time In/Out
              </DataTable.Title>
              <DataTable.Title
                style={styles.tableCol}
                textStyle={styles.tableHeaderCellText}>
                Employee Name
              </DataTable.Title>
              <DataTable.Title
                style={styles.tableCol}
                textStyle={styles.tableHeaderCellText}>
                Status
              </DataTable.Title>
              <DataTable.Title
                style={[styles.tableCol,{flex: 1/4,borderEndWidth:0}]}
                textStyle={styles.tableHeaderCellText}>
                More
              </DataTable.Title>
            </DataTable.Header>

            {items.map(item => (
              <DataTable.Row key={item.key}>
                <DataTable.Cell
                  style={[styles.tableCellCol,{flex: 2/3}]}
                  textStyle={styles.tableCellText}>
                  <View style={styles.loadCellContainer}>
                    <MaterialIcon
                      name="checkbox-blank-outline"
                      size={20}
                      color={colors.grey60}
                    />
                    <Text style={styles.tableCellText}>Load</Text>
                    <Image source={ImagePaths.notePencil} />
                  </View>
                </DataTable.Cell>
                <DataTable.Cell
                  style={styles.tableCellCol}
                  textStyle={styles.tableCellText}>
                  {item.docName}
                </DataTable.Cell>
                <DataTable.Cell
                  style={styles.tableCellCol}
                  textStyle={styles.tableCellText}>
                  {item.time}
                </DataTable.Cell>
                <DataTable.Cell
                  style={styles.tableCellCol}
                  textStyle={styles.tableCellText}>
                  {item.empName}
                </DataTable.Cell>
                <DataTable.Cell
                  style={styles.tableCellCol}
                  textStyle={styles.tableCellText}>
                  <Status>{item.status}</Status>
                </DataTable.Cell>
                <DataTable.Cell
                  style={[styles.tableCellCol,{flex: 1/4}]}
                  textStyle={styles.tableCellText}>
                  <EntypoIcon
                    name="dots-three-vertical"
                    size={18}
                    color={colors.black}
                  />
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </View>
      </View>
    </View>
  );
};

export default TaskList;

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
  directoryText: {
    fontFamily: FontType.figtree_regular,
    color: colors.grey70,
    fontSize: 14,
  },
  directoryShowContainer: {
    height: 32,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  filtersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tableContainer: {borderWidth : 0.5,borderRadius : 8,borderColor : colors.grey40},
  inputcontainer  : {
    alignItems: 'center', 
    flexDirection: 'row',
    // borderWidth : 1
  },
  loadCellContainer: {
    borderWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer : {
    justifyContent: 'center', 
    width: 120
  },
  tableHeader: {
    backgroundColor: colors.grey20,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  tableCol: {
    paddingLeft : '1%',
    alignItems: 'center',
    borderRightWidth: 0.5,
    borderColor: colors.grey40,
  },
  textInputStyles : {
    // width: screenWidth * 0.16,
    width: '30%',
    marginRight : 16
  },
  tableCellCol: {
    height: 50,
  },
  tableHeaderCellText: {
    color: colors.grey80,
    fontFamily: FontType.figtree_regular,
    fontSize : responsiveFontSize(0.7)
  },
  tableCellText: {
    color: colors.grey70,
    fontFamily: FontType.figtree_regular,
    marginHorizontal: 10,
    fontSize : responsiveFontSize(0.7)
  },
});
