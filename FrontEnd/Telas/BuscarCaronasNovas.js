import React, {useEffect, useState, useRef} from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import config from '../config/config.json'

const BuscarCaronasNovas = () => {

  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  useEffect(()=>{
    (async function() {
      const{status, permissions} = await Location.requestForegroundPermissionsAsync();
      if(status === 'granted'){
        let location = await Location.getCurrentPositionAsync({enabledHighAccuracy: true});
        setOrigin({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01, // Delta do zoom do mapa em latitude
          longitudeDelta: 0.01, // Delta do zoom do mapa em longitude
        })
      } else {
        throw new Error ('Permissão para localização negada!');
      }
    })();
  },[]);

  return (
    <View style={styles.container}>
      <MapView style={styles.map}      
          initialRegion={origin}
          showsUserLocation={true}
          loadingEnabled={true}
       >
      </MapView>
      <View style={styles.search}>
        <GooglePlacesAutocomplete
          placeholder="Para onde vamos?"
          onPress={(data, details = null)=> {
            console.log(data, details);
          }}
          query={{
            key:'',
            language: 'pt-br',
          }}
          fetchDetails={true}
          styles={{listView: {height:100}}}

        />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  map: {
    width: "100%",
    height: '60%',
    backgroundColor: '#203864'
  },
  search:{
    height: '40%',
    borderRadius: 50,
    backgroundColor: 'gray'
  }
});

export default BuscarCaronasNovas;
