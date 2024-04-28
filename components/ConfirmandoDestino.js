import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const ConfirmandoDestino = memo(({ onClose }) => {
  return (
    <View style={styles.confirmandodestino}>
      <Text style={styles.encontrandoMotorista}>{`Encontrando 

motorista`}</Text>
      <View style={styles.confirmandodestinoChild} />
    </View>
  );
});

const styles = StyleSheet.create({
  encontrandoMotorista: {
    top: 318,
    left: 53,
    fontSize: 26,
    fontWeight: "700",
    fontFamily: FontFamily.syncopateBold,
    color: Color.colorBlack,
    textAlign: "center",
    width: 325,
    height: 75,
    position: "absolute",
  },
  confirmandodestinoChild: {
    top: 0,
    left: 0,
    backgroundColor: "rgba(217, 217, 217, 0)",
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 4,
    width: 414,
    position: "absolute",
    height: 932,
  },
  confirmandodestino: {
    backgroundColor: Color.colorWhite,
    width: 430,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    height: 932,
  },
});

export default ConfirmandoDestino;
