import 'react-native-gesture-handler';

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigation } from './src/navigation/StackNavigation';
// import { MenuLateralBasico } from './src/navigation/MenuLateralBasico';
import { MenuLateral } from './scr/navegacion/menuLateral';
import { Tabs } from './scr/navegacion/Tabs';
import { AuthProvider } from './scr/context/AuthContext';
//import { AuthProvider } from './src/context/AuthContext';



const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <Text>Hola navegación</Text> */}
        {/* <StackNavigation /> */}
        {/* <MenuLateralBasico /> */}
        <MenuLateral />
        {/* <Tabs /> */}
      </AppState>
    </NavigationContainer>
    
  )
}

const AppState = ({children}: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App;