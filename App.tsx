import {Dimensions, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import {
  RootState,
  persistor,
  store,
  useAppDispatch,
  useAppSelector,
} from './app/redux/store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigator from './app/navigation/AppNavigator';
import {PaperProvider} from 'react-native-paper';
import {getDeviceOrientation} from './app/utils/DimensionUtils';
import {setOrientation} from './app/common/store/reducers/screenReducer';

const App = () => {
  const dispatch = useAppDispatch();

  const ori = useAppSelector((state: RootState) => state.auth);

  console.log("state ----- ", ori);

  useEffect(() => {
    const orientationChangeHandler = () => {
      dispatch(setOrientation());
    };
    Dimensions.addEventListener('change', orientationChangeHandler);
    orientationChangeHandler();
  }, [getDeviceOrientation]);

  return (
    <View style={styles.appMain}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        hidden
      />
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appMain: {
    flex: 1,
    // marginTop : StatusBar.currentHeight
  },
});
