import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import { colors } from '../../../constants/Colors'
import { DataTable } from 'react-native-paper'
import { responsiveHeight } from 'react-native-responsive-dimensions'

const TableHeader = ({children} : Props) => {
  return (
    <DataTable.Header style={styles.tableHeader}>
      {children}
    </DataTable.Header>
  )
}

export default TableHeader

const styles = StyleSheet.create({
    tableHeader: {
        // height : responsiveHeight(5),
        backgroundColor: colors.grey20,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        paddingHorizontal : 0
      }
})

interface Props  {
  children? : ReactNode
}