import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './app/redux/store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigator from './app/navigation/AppNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={styles.appMain}>
          <AppNavigator />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  appMain: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
