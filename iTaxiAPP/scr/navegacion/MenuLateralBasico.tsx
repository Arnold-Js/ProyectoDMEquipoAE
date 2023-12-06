import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigation } from './stackNavegacion';
import { SettingsScreen } from '../pantallas/SettingsScreen';
import { Text } from 'react-native';


const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigation" options={{title:'Home'}} component={StackNavigation} />
      <Drawer.Screen name="SettingScreen" options={{title:'Settings'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}