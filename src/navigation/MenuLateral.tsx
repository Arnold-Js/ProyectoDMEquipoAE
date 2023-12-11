import React from 'react';

import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigation } from './StackNavigation';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, View, TouchableOpacity, Text } from 'react-native';
// import { DrawerProps } from '@react-navigation/drawer/lib/typescript/src/types';
import { colores, styles } from '../themes/appThemes';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';
import { ContactScreen } from '../screens/ContactScreen';



const Drawer = createDrawerNavigator();



export const MenuLateral = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuInterno {...props}/>}
    >
      <Drawer.Screen name="Tabs" options={{title:'Home'}} component={Tabs} />
      <Drawer.Screen name="SettingScreen" options={{title:'Settings'}} component={SettingsScreen} />
      <Drawer.Screen name="ContactScreen" options={{title:'Log In'}} component={ContactScreen} />
    </Drawer.Navigator>
  );
}


const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
      <DrawerContentScrollView>
        {/* Parte del avatar */}
        <View style={styles.avatarContainer}>
          <Image 
            source={{
              uri: 'https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg'
            }}
            style={styles.avatar}
          />
        </View>

        {/* Opciones de menú */}
        <View style={styles.menuContainer}>
          <TouchableOpacity style={{
              ...styles.menuBoton,
              flexDirection: 'row'
            }}
            onPress={() => navigation.navigate('Tabs')}
          >
            
            <Icon name="home-outline" size={30} color={colores.primary} />
            <Text style={styles.menuTexto}>   Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
              ...styles.menuBoton,
              flexDirection: 'row'
            }}
            onPress={() => navigation.navigate('SettingScreen')}
          >
                <Icon name="settings-outline" size={30} color={colores.primary} />
                <Text style={styles.menuTexto}>   Ajustes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
              ...styles.menuBoton,
              flexDirection: 'row'
            }}
            onPress={() => navigation.navigate('ContactScreen')}
          >
            
            <Icon name="person-outline" size={27} color={colores.primary} />
            <Text style={styles.menuTexto}>   Log In</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    )
}