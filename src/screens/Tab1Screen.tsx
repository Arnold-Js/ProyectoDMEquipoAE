import * as React from 'react';
import { View, Text, StyleSheet, Button, GestureResponderEvent } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//import { colores, styles } from '../themes/appThemes';
import { TouchableIcon } from '../components/TouchableIcon';
import MapView  from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Marker } from 'react-native-maps';
import { Polyline } from 'react-native-maps';



export const Tab1Screen = () => {
  const[origin, setOrigin] = React.useState({
    latitude:17.268666, 
    longitude:-97.680895
  });

  const[Destination, setDestination] = React.useState({
    latitude: 17.249761, 
    longitude:-97.691756
  })
 

  return (
    <SafeAreaView style= {styles.container}>
    <MapView
    style={styles.map} 
    initialRegion={{
      latitude: origin.latitude,
      longitude: origin.longitude,
      latitudeDelta:0.09,
      longitudeDelta: 0.04
    }}
    >   
    <Marker draggable coordinate={origin}
    onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}></Marker>
    <Marker draggable coordinate={Destination} 
    onDragEnd={(direction)=> setDestination(direction.nativeEvent.coordinate)}></Marker>
     
     <Polyline coordinates={[origin, Destination]}
     strokeColor='navy'
     strokeWidth={5}>
      
     </Polyline>
     
    
     </MapView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%'
  },
  container: {
    flex:1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
