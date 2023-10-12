import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { DataTable } from 'react-native-paper'

const TableRow = ({children,style} : Props) => {
  return (
    <DataTable.Row style={[styles.container,style]}>
       {children}
    </DataTable.Row>
  )
}

export default TableRow

const styles = StyleSheet.create({
    container : {
        flex : 1,
        paddingHorizontal : 0
    }
})

interface Props  {
    children? : ReactNode,
    style? : ViewStyle
  }