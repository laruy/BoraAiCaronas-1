import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const BuscarCaronasNovas = () => {
  const latitude = -25.70465;
  const longitude = -53.0976167;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.01, // Delta do zoom do mapa em latitude
          longitudeDelta: 0.01, // Delta do zoom do mapa em longitude
        }}
      >
        <Marker coordinate={{ latitude, longitude }} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#203864",
  },
  map: {
    width: "100%",
    height: 597,
  },
});

export default BuscarCaronasNovas;
