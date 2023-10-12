import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../../constants/Colors';

const Link = ({ children, onPress }:any) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.crumbText}> {children} </Text>
    </TouchableOpacity>
  );
};

const Breadcrumbs = ({ children, onItemClick }:any) => {
    function onPress(props: any): any {
        console.log(props)
    }
  return (
    <View style={styles.container}>
      {React.Children.map(children, (child, index) => (
        <View key={index} style={styles.crumb}>
          {index > 0 && <Text>/</Text>}
          {React.cloneElement(child, { onPress: () => onPress(child.props) })}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 8,
  },
  crumb: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  crumbText: {
    color: colors.grey90,
    // textDecorationLine: 'underline',
  },
});

export { Breadcrumbs, Link };
