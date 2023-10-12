import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { colors } from '../../../constants/Colors'
import { DataTable } from 'react-native-paper'
import { FontType } from '../../../constants/FontType'
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions'

const TableTitle = ({children,style,textStyle,width} : Props) => {
    width &&  { flex : width }
  return (
    <DataTable.Title style={[styles.tableCol,style,{flex:width ? width : 1}]} textStyle={[styles.tableCellText,textStyle]}>
      {children}
    </DataTable.Title>
  )
}

export default TableTitle

const styles = StyleSheet.create({
    tableCol: {
        paddingLeft : '0%',
        alignItems: 'center',
        borderRightWidth: 0.5,
        borderColor: colors.grey40, 
        // borderWidth : 0.5
      },
      tableCellText: {
        color: colors.grey70,
        fontFamily: FontType.figtree_regular,
        // marginHorizontal: responsiveWidth(0.6),
        marginLeft : responsiveWidth(0.6),
        fontSize : responsiveFontSize(0.6)
      },
})

interface Props  {
    children? : ReactNode,
    style? : ViewStyle,
    textStyle? : TextStyle,
    width? : any
  }