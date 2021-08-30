import React from 'react';
import {Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {routesName} from '../utilities/constants';

import {pockeBall, pockeGear} from '~/images';

import CharacterRoutes from '../screens/characters/routes';
import ItemRoutes from '../screens/items/routes';

import Theme from '~/styles';

const {colors, metrics} = Theme;

const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={routesName.LIST_CHARACTERS}
      lazy={true}
      tabBarOptions={{
        showLabel: true,
        showIcon: true,
        inactiveTintColor: colors.mediumBlack,
        activeTintColor: colors.tartOrange,
        style: {
          alignSelf: 'center',
          position: 'absolute',
          bottom: 8,
          borderRadius: metrics.getWidthFromDP('20%'),
          height: metrics.getHeightFromDP('8%'),
        },
        labelStyle: {
          marginBottom: metrics.getHeightFromDP('1%'),
        },
      }}>
      <Tab.Screen
        name={routesName.LIST_CHARACTERS}
        component={CharacterRoutes}
        options={{
          tabBarLabel: 'Character',
          tabBarIcon: ({focused}) => (
            <Image
              source={pockeBall}
              tintColor={focused ? colors.tartOrange : colors.mediumBlack}
              resizeMode={'contain'}
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />

      <Tab.Screen
        name={routesName.LIST_ITEM}
        component={ItemRoutes}
        options={{
          tabBarLabel: 'Item',
          tabBarIcon: ({focused}) => (
            <Image
              source={pockeGear}
              tintColor={focused ? colors.tartOrange : colors.mediumBlack}
              resizeMode={'contain'}
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainStack;
