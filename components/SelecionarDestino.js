import React, { useState, useCallback, memo } from "react";
import { View, StyleSheet, Pressable, Text, Modal } from "react-native";
import { Image } from "expo-image";
import ConfirmarDestino from "./ConfirmarDestino";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SelecionarDestino = memo(({ onClose }) => {
  const [buttonEntrarImageVisible, setButtonEntrarImageVisible] =
    useState(false);

  const openButtonEntrarImage = useCallback(() => {
    setButtonEntrarImageVisible(true);
  }, []);

  const closeButtonEntrarImage = useCallback(() => {
    setButtonEntrarImageVisible(false);
  }, []);

  return (
    <>
      <View style={styles.selecionardestino}>
        <View
          style={[
            styles.selecionardestinoChild,
            styles.selecionardestinoPosition,
          ]}
        />
        <View
          style={[
            styles.selecionardestinoItem,
            styles.selecionardestinoPosition,
          ]}
        />
        <View
          style={[
            styles.selecionardestinoInner,
            styles.selecionardestinoPosition,
          ]}
        />
        <Pressable
          style={[styles.buttonEntrar, styles.backIconLayout]}
          onPress={openButtonEntrarImage}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/button-entrar3.png")}
          />
        </Pressable>
        <Text style={styles.buscar}>BUSCAR</Text>
        <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
        <View
          style={[styles.selecionardestinoChild1, styles.rectangleViewLayout]}
        />
        <Image
          style={[styles.backIcon, styles.backIconLayout]}
          contentFit="cover"
          source={require("../assets/back21.png")}
        />
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-20.png")}
        />
        <Image
          style={[styles.locationIcon, styles.destinoLayout]}
          contentFit="cover"
          source={require("../assets/location.png")}
        />
        <Text style={[styles.pontoDePartida, styles.destinoTypo]}>
          Ponto de partida
        </Text>
        <Text style={[styles.destino, styles.destinoTypo]}>DESTINO</Text>
        <Image
          style={styles.plusMathIcon}
          contentFit="cover"
          source={require("../assets/plus-math.png")}
        />
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={buttonEntrarImageVisible}
      >
        <View style={styles.buttonEntrarImageOverlay}>
          <Pressable
            style={styles.buttonEntrarImageBg}
            onPress={closeButtonEntrarImage}
          />
          <ConfirmarDestino onClose={closeButtonEntrarImage} />
        </View>
      </Modal>
    </>
  );
});

const styles = StyleSheet.create({
  selecionardestinoPosition: {
    backgroundColor: Color.colorDarkslateblue_100,
    left: 0,
    position: "absolute",
    width: 415,
  },
  backIconLayout: {
    height: 54,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 37,
    width: 292,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_8xs,
    left: 77,
    position: "absolute",
  },
  destinoLayout: {
    height: 21,
    top: 81,
  },
  destinoTypo: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.juliusSansOneRegular,
    left: 87,
    textAlign: "left",
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  selecionardestinoChild: {
    top: 842,
    borderRadius: Border.br_xl,
    height: 85,
  },
  selecionardestinoItem: {
    top: 832,
    height: 100,
  },
  selecionardestinoInner: {
    top: 0,
    height: 132,
  },
  buttonEntrarImageOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  buttonEntrarImageBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    marginTop: 387,
    marginLeft: 41.5,
    borderRadius: Border.br_9xs,
    width: "100%",
    height: "100%",
  },
  buttonEntrar: {
    left: "50%",
    top: "50%",
    width: 155,
  },
  buscar: {
    top: 870,
    left: 286,
    fontWeight: "500",
    fontFamily: FontFamily.sunflowerMedium,
    color: "#fffcfc",
    width: 81,
    height: 20,
    textAlign: "left",
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  rectangleView: {
    top: 17,
  },
  selecionardestinoChild1: {
    top: 73,
  },
  backIcon: {
    top: 9,
    width: 45,
    left: 0,
    height: 54,
  },
  ellipseIcon: {
    top: 29,
    left: 53,
    width: 15,
    height: 14,
    position: "absolute",
  },
  locationIcon: {
    left: 50,
    width: 21,
    position: "absolute",
  },
  pontoDePartida: {
    top: 26,
    width: 205,
    height: 19,
  },
  destino: {
    width: 103,
    height: 21,
    top: 81,
  },
  plusMathIcon: {
    top: 16,
    left: 379,
    width: 25,
    height: 40,
    position: "absolute",
  },
  selecionardestino: {
    backgroundColor: "rgba(32, 56, 100, 0)",
    height: 932,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    width: 415,
  },
});

export default SelecionarDestino;
