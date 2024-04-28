import React, { useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  TextInput,
  ImageBackground,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import SelecionarDestino from "../components/SelecionarDestino";
import MenuPassageiro from "../components/MenuPassageiro";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const CentralPassageiro = () => {
  const [rectangleButtonVisible, setRectangleButtonVisible] = useState(false);
  const [menuImageVisible, setMenuImageVisible] = useState(false);

  const openRectangleButton = useCallback(() => {
    setRectangleButtonVisible(true);
  }, []);

  const closeRectangleButton = useCallback(() => {
    setRectangleButtonVisible(false);
  }, []);

  const openMenuImage = useCallback(() => {
    setMenuImageVisible(true);
  }, []);

  const closeMenuImage = useCallback(() => {
    setMenuImageVisible(false);
  }, []);

  return (
    <>
      <View style={styles.centralpassageiro}>
        <Image
          style={styles.mapa021Icon}
          contentFit="cover"
          source={require("../assets/mapa02-1.png")}
        />
        <Pressable
          style={styles.centralpassageiroChild}
          onPress={openRectangleButton}
        />
        <TextInput
          style={styles.textUsurio}
          placeholder="Email-Usuário"
          keyboardType="email-address"
          placeholderTextColor="#bcb6b6"
        />
        <ImageBackground
          style={styles.searchIcon}
          resizeMode="cover"
          source={require("../assets/search.png")}
        />
        <Pressable style={styles.menu} onPress={openMenuImage}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/menu1.png")}
          />
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={rectangleButtonVisible}>
        <View style={styles.rectangleButtonOverlay}>
          <SelecionarDestino onClose={closeRectangleButton} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={menuImageVisible}>
        <View style={styles.menuImageOverlay}>
          <Pressable style={styles.menuImageBg} onPress={closeMenuImage} />
          <MenuPassageiro onClose={closeMenuImage} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  mapa021Icon: {
    top: 76,
    left: 0,
    width: 415,
    height: 862,
    position: "absolute",
  },
  rectangleButtonOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  centralpassageiroChild: {
    top: 107,
    left: 25,
    borderRadius: 40,
    backgroundColor: Color.colorGainsboro_200,
    width: 366,
    height: 42,
    position: "absolute",
  },
  textUsurio: {
    marginTop: -350,
    marginLeft: -140.5,
    top: "50%",
    left: "50%",
    fontFamily: FontFamily.juliusSansOneRegular,
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  searchIcon: {
    top: 112,
    left: 67,
    width: 33,
    height: 33,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    position: "absolute",
  },
  menuImageOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  menuImageBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  menu: {
    left: 9,
    top: 6,
    width: 68,
    height: 70,
    position: "absolute",
  },
  centralpassageiro: {
    backgroundColor: Color.colorDarkslateblue_100,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default CentralPassageiro;
