import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import config from '../config/index.json';
import MapViewDirections from 'react-native-maps-directions';

const BuscarCaronasNovas = () => {

  const mapEl = useRef(null);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    (async function () {
      const { status, permissions } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        let location = await Location.getCurrentPositionAsync({ enabledHighAccuracy: true });
        setOrigin({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01, // Delta do zoom do mapa em latitude
          longitudeDelta: 0.01, // Delta do zoom do mapa em longitude
        });
      } else {
        throw new Error('Permissão para localização negada!');
      }
    })();
  }, []);

  const confirmDestination = () => {
    Alert.alert(
      "Confirmar Trajeto",
      "O TRAJETO INFORMADO ESTÁ CORRETO?",
      [
        {
          text: "NÃO",
          onPress: () => console.log("Trajeto não confirmado"),
          style: "cancel"
        },
        { text: "SIM", onPress: () => console.log("Trajeto confirmado") }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        initialRegion={origin}
        showsUserLocation={true}
        loadingEnabled={true}
        ref={mapEl}
      >
        {destination &&
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={config.googleAPi}
            strokeWidth={3}
            onReady={result => {
              mapEl.current.fitToCoordinates(
                result.coordinates, {
                  edgePadding: {
                    top: 50,
                    bottom: 50,
                    left: 50,
                    right: 50
                  }
                }
              )
            }}
          />
        }
      </MapView>
      <View style={styles.search}>
        <GooglePlacesAutocomplete
          placeholder="Para onde vamos?"
          onPress={(data, details = null) => {
            setDestination({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.01, // Delta do zoom do mapa em latitude
              longitudeDelta: 0.01, // Delta do zoom do mapa em longitude
            });
            confirmDestination();
          }}
          query={{
            key: config.googleAPi,
            language: 'pt-br',
          }}
          fetchDetails={true}
          styles={{ listView: { height: 100 } }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  map: {
    width: "100%",
    height: '60%',
    backgroundColor: '#203864'
  },
  search: {
    height: '40%',
    backgroundColor: 'gray'
  }
});

export default BuscarCaronasNovas;
