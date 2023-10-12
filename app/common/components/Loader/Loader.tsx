import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {LoaderStyle} from './LoaderStyle';
import {Modal} from 'react-native-paper';
import { colors } from '../../../constants/Colors';

export const Loader = () => {
  return (
    <Modal visible={true}>
      <View style={LoaderStyle.loader}>
        <ActivityIndicator size="large" color={colors.primary_skyblue100} />
      </View>
    </Modal>
  );
};

export default Loader;
