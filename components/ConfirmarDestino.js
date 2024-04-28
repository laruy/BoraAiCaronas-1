import React, { useState, useCallback, memo } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Pressable,
  Text,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import ConfirmandoDestino from "./ConfirmandoDestino";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const ConfirmarDestino = memo(({ onClose }) => {
  const [buttonEntrarImageVisible, setButtonEntrarImageVisible] =
    useState(false);
  const navigation = useNavigation();

  const openButtonEntrarImage = useCallback(() => {
    setButtonEntrarImageVisible(true);
  }, []);

  const closeButtonEntrarImage = useCallback(() => {
    setButtonEntrarImageVisible(false);
  }, []);

  return (
    <>
      <View style={styles.confirmardestino}>
        <Image
          style={[
            styles.confirmardestinoChild,
            styles.confirmardestinoPosition,
          ]}
          contentFit="cover"
          source={require("../assets/rectangle-101.png")}
        />
        <Image
          style={[styles.confirmardestinoItem, styles.confirmardestinoPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-141.png")}
        />
        <ImageBackground
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/81.png")}
        />
        <Pressable style={styles.buttonEntrar} onPress={openButtonEntrarImage}>
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/button-entrar41.png")}
          />
        </Pressable>
        <Pressable
          style={styles.buttonEntrar}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.icon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/button-entrar5.png")}
          />
        </Pressable>
        <Text style={styles.textEntrar}>
          O TRAJETO INFORMADO ESTÁ CORRETO ?
        </Text>
        <Text style={[styles.textEntrar1, styles.textPosition]}>SIM</Text>
        <Text style={[styles.textEntrar2, styles.textPosition]}>Não</Text>
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
          <ConfirmandoDestino onClose={closeButtonEntrarImage} />
        </View>
      </Modal>
    </>
  );
});

const styles = StyleSheet.create({
  confirmardestinoPosition: {
    width: 383,
    left: 6,
    top: 6,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
    borderRadius: Border.br_9xs,
    marginTop: 69,
  },
  textPosition: {
    color: Color.colorWhite,
    marginTop: 78,
    textAlign: "center",
    fontFamily: FontFamily.syncopateBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  confirmardestinoChild: {
    borderRadius: Border.br_xl,
    height: 213,
  },
  confirmardestinoItem: {
    height: 43,
  },
  icon: {
    top: -32,
    left: 72,
    width: 264,
    height: 310,
    position: "absolute",
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
  icon1: {
    marginLeft: 0,
  },
  buttonEntrar: {
    width: 145,
    height: 32,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  icon2: {
    marginLeft: -151,
  },
  textEntrar: {
    marginTop: -30,
    marginLeft: -189,
    color: "#18305d",
    width: 358,
    textAlign: "center",
    fontFamily: FontFamily.syncopateBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  textEntrar1: {
    marginLeft: 50,
    width: 45,
    height: 14,
  },
  textEntrar2: {
    marginLeft: -107,
    width: 56,
    height: 15,
  },
  confirmardestino: {
    backgroundColor: Color.colorWhite,
    width: 394,
    height: 220,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default ConfirmarDestino;
