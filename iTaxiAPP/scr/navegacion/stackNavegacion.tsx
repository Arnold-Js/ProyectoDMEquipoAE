import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen } from '../pantallas/Pagina1Screen';
import { Pagina2Screen } from '../pantallas/Pagina2Screen';
import { Pagina3Screen } from '../pantallas/Pagina3Screen';
import { PersonaScreen } from '../pantallas/PersonaScreen';

export type RootStackParam ={
  Pagina1Screen: undefined,
  Pagina2Screen: undefined,
  Pagina3Screen: undefined,
  PersonaScreen: {id: number, nombre: string}
}

const Stack = createStackNavigator<RootStackParam>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      // initialRouteName='Pagina2Screen'
      screenOptions={{
        headerStyle:{
          elevation: 0,  //Android
          shadowColor: 'transparent'
        },
        cardStyle:{
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="Pagina1Screen" options={{title:'Página 1'}} component={Pagina1Screen} />
      <Stack.Screen name="Pagina2Screen" options={{title:'Página 2'}} component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options={{title:'Página 3'}} component={Pagina3Screen} />
      <Stack.Screen name="PersonaScreen" options={{title:'Persona'}} component={PersonaScreen} />
    </Stack.Navigator>
  );
}
     