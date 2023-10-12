import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { DataTable } from 'react-native-paper'
import { colors } from '../../../constants/Colors'
import { FontType } from '../../../constants/FontType'
import { responsiveFontSize } from 'react-native-responsive-dimensions'

const TableData = ({children,style,textStyle,width} : Props) => {
  return (
    <DataTable.Cell style={[styles.tableCellCol,style,{flex:width ? width : 1}]} textStyle={[styles.tableCellText,textStyle]}>
       {children}
    </DataTable.Cell>
  )
}

export default TableData

const styles = StyleSheet.create({
    tableCellCol: {
        height: 48,
        // borderWidth : 0.5
      },
      tableCellText: {
        color: colors.grey70,
        fontFamily: FontType.figtree_regular,
        marginLeft: '5%',
        fontSize : responsiveFontSize(0.6)
      },
})

interface Props  {
    children? : ReactNode,
    style? : ViewStyle,
    textStyle? : TextStyle,
    width? : any
  }