import React from 'react';
import {StatusBar} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {Provider} from 'react-redux';
import './src/config/Reactotron';

import store from './src/store';
import Theme from '~/styles';

const {colors, metrics} = Theme;

import MainStack from './src/routes/mainStack';

if (__DEV__) {
  import('~/config/Reactotron').then(() =>
    console.log('Reactotron Configured'),
  );
}

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor={colors.backgroundColor}
        barStyle="dark-content"
        translucent={true}
      />
      <Provider store={store}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
