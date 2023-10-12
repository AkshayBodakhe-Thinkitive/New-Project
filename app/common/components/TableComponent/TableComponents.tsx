import {StyleSheet, Text, View} from 'react-native';
import React, { ReactNode } from 'react';
import {DataTable} from 'react-native-paper';
import {colors} from '../../../constants/Colors';

const Table = ({children}:Props) => {
  return (
    <DataTable style={styles.tableContainer}>
      {children}
    </DataTable>
  );
};

export default Table;

const styles = StyleSheet.create({
  tableContainer: {
    flex : 1,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: colors.grey40,
  },
});

interface Props  {
    children? : ReactNode
  }