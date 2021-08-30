import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DetailItems from './DetailItems';
import ListItems from './ListItems';

import {routesName} from '~/utilities/constants';

const Stack = createStackNavigator();

const Routes = ({navigation, route}) => {
  return (
    <Stack.Navigator
      initialRouteName={routesName.LIST_ITEM}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={routesName.LIST_ITEM} component={ListItems} />
      <Stack.Screen name={routesName.DETAIL_ITEM} component={DetailItems} />
    </Stack.Navigator>
  );
};

export default Routes;
