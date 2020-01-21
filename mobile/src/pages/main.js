import React, {useEffect, useState} from 'react'
import {StyleSheet } from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import {requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location'
export default function Main(){
  const [currentRegion, setCurrentRegion] = useState(null)

  useEffect(()=> {
    async function loadInitialPosition(){
      const { granted } = await requestPermissionsAsync()
      if (granted) {
        const {coords} = await getCurrentPositionAsync({
          enableHighAccuracy: true
        })
        const { latitude, longitude } = coords

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        })
      }
    }

    loadInitialPosition()
  }, [])

  if(!currentRegion){
    return null
  }

  return (
      <MapView style={styles.map} initialRegion={currentRegion}>
        <Marker  />
      </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
})
