import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigation } from './src/navigation/StackNavigation';
// import { MenuLateralBasico } from './src/navigation/MenuLateralBasico';
import { MenuLateral } from './src/navigation/MenuLateral';
import { Tabs } from './src/navigation/Tabs';
import { AuthProvider } from './src/context/AuthContext';
import MapView from 'react-native-maps';
import { Tab1Screen } from './src/screens/Tab1Screen';


const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/*  <MapView />agruegue mapview y el import */}
        {/* <Text>Hola navegación</Text> */}
        {/* <StackNavigation /> */}
        {/* <MenuLateralBasico /> */}
        
        <MenuLateral></MenuLateral> 
        
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
