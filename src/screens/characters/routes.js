import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DetailCharacters from './DetailCharacters';
import ListCharacters from './ListCharacters';

import {routesName} from '~/utilities/constants';

const Stack = createStackNavigator();

const Routes = ({navigation, route}) => {
  return (
    <Stack.Navigator
      initialRouteName={routesName.LIST_CHARACTERS}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={routesName.LIST_CHARACTERS}
        component={ListCharacters}
      />
      <Stack.Screen
        name={routesName.DETAIL_CHARACTERS}
        component={DetailCharacters}
      />
    </Stack.Navigator>
  );
};

export default Routes;
