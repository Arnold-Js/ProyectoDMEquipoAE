import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export const TopTab = () => {
  const[origin, setOrigin] = React.useState({
    latitude:17.268666, 
    longitude:-97.680895
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
    />  
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
