import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  ImageBackground,
  Pressable,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuPassageiro from "../components/MenuPassageiro";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const EdicaoPassageiro = () => {
  const navigation = useNavigation();
  const [menuImageVisible, setMenuImageVisible] = useState(false);

  const openMenuImage = useCallback(() => {
    setMenuImageVisible(true);
  }, []);

  const closeMenuImage = useCallback(() => {
    setMenuImageVisible(false);
  }, []);

  return (
    <>
      <View style={styles.edicaopassageiro}>
        <Image
          style={[styles.imgWallpaperIcon, styles.imgWallpaperIconPosition]}
          contentFit="cover"
          source={require("../assets/img-wallpaper31.png")}
        />
        <View style={[styles.labelSenha, styles.labelLayout]} />
        <View style={[styles.labelUsuario, styles.labelLayout]} />
        <Image
          style={[styles.iconeUser, styles.textPosition2]}
          contentFit="cover"
          source={require("../assets/iconeuser.png")}
        />
        <TextInput
          style={[styles.textSenha, styles.textTypo]}
          placeholder="Senha"
          placeholderTextColor="#bcb6b6"
        />
        <Text style={[styles.textUsurio, styles.textPosition1]}>NOME</Text>
        <View style={[styles.lineUsuario, styles.linePosition]} />
        <View style={[styles.labelUsuario1, styles.labelLayout]}>
          <View style={[styles.labelUsuario2, styles.iconLayout1]} />
        </View>
        <TextInput
          style={[styles.textUsurio1, styles.textPosition]}
          placeholder="Email"
          placeholderTextColor="#bcb6b6"
        />
        <View style={[styles.lineUsuario, styles.linePosition]} />
        <View style={[styles.lineSenha, styles.linePosition]} />
        <View style={[styles.labelSenha1, styles.labelLayout]} />
        <ImageBackground
          style={[styles.lockIcon, styles.lockIconLayout]}
          resizeMode="cover"
          source={require("../assets/lock1.png")}
        />
        <View style={[styles.labelUsuario3, styles.labelLayout]} />
        <ImageBackground
          style={[styles.userIcon, styles.lockIconLayout]}
          resizeMode="cover"
          source={require("../assets/user4.png")}
        />
        <View
          style={[styles.textSenha1, styles.textPosition2]}
          placeholder="ConfirmAR senha"
        />
        <View style={[styles.lineSenha1, styles.linePosition]} />
        <View
          style={[styles.textUsurio2, styles.textPosition2]}
          placeholder="usuário"
        />
        <View style={[styles.lineUsuario2, styles.linePosition]} />
        <View style={[styles.labelUsuario4, styles.labelLayout]} />
        <TextInput
          style={[styles.textUsurio3, styles.textTypo]}
          placeholder="CPF"
          placeholderTextColor="#bcb6b6"
        />
        <View style={[styles.lineUsuario3, styles.linePosition]} />
        <View style={[styles.labelUsuario5, styles.labelLayout]} />
        <TextInput
          style={[styles.textUsurio4, styles.textPosition]}
          placeholder="Fone"
          placeholderTextColor="#bcb6b6"
        />
        <View style={[styles.lineUsuario4, styles.linePosition]} />
        <View
          style={[
            styles.edicaopassageiroChild,
            styles.imgWallpaperIconPosition,
          ]}
        />
        <Image
          style={styles.edicaopassageiroItem}
          contentFit="cover"
          source={require("../assets/ellipse-21.png")}
        />
        <ImageBackground
          style={styles.userIcon1}
          resizeMode="cover"
          source={require("../assets/user5.png")}
        />
        <ImageBackground
          style={[styles.atSignIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/at-sign.png")}
        />
        <ImageBackground
          style={[styles.phoneIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/phone2.png")}
        />
        <ImageBackground
          style={styles.contactIcon}
          resizeMode="cover"
          source={require("../assets/contact1.png")}
        />
        <ImageBackground
          style={[styles.lockIcon1, styles.lockIconLayout]}
          resizeMode="cover"
          source={require("../assets/lock1.png")}
        />
        <Pressable
          style={styles.buttonEntrar}
          onPress={() => navigation.navigate("PerfilPassageiro")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/button-entrar4.png")}
          />
        </Pressable>
        <Text style={[styles.textEntrar, styles.textPosition1]}>Salvar</Text>
        <Pressable style={styles.menu} onPress={openMenuImage}>
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/menu2.png")}
          />
        </Pressable>
      </View>

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
  imgWallpaperIconPosition: {
    top: 0,
    position: "absolute",
  },
  labelLayout: {
    height: 54,
    width: 330,
    position: "absolute",
  },
  textPosition2: {
    left: "50%",
    top: "50%",
  },
  textTypo: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.juliusSansOneRegular,
  },
  textPosition1: {
    textAlign: "left",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  linePosition: {
    height: 51,
    width: 1,
    borderRightWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    marginLeft: -107.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  textPosition: {
    marginLeft: -98,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.juliusSansOneRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  lockIconLayout: {
    height: 41,
    position: "absolute",
  },
  iconLayout: {
    height: 44,
    width: 55,
    position: "absolute",
  },
  imgWallpaperIcon: {
    left: -658,
    width: 1543,
    height: 956,
  },
  labelSenha: {
    marginTop: 120,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    left: "50%",
    top: "50%",
    marginLeft: -165,
  },
  labelUsuario: {
    marginTop: -197,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    left: "50%",
    top: "50%",
    marginLeft: -165,
  },
  iconeUser: {
    marginTop: -188,
    marginLeft: -161,
    height: 37,
    width: 54,
    position: "absolute",
  },
  textSenha: {
    marginTop: 137,
    marginLeft: -101,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textUsurio: {
    marginTop: -183,
    color: Color.colorSilver,
    width: 186,
    height: 34,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.juliusSansOneRegular,
    marginLeft: -101,
  },
  lineUsuario: {
    marginTop: -195.5,
  },
  labelUsuario2: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  labelUsuario1: {
    top: 272,
    left: 50,
  },
  textUsurio1: {
    marginTop: -180,
  },
  lineSenha: {
    marginTop: 121.5,
  },
  labelSenha1: {
    marginTop: 200,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    left: "50%",
    top: "50%",
    marginLeft: -165,
  },
  lockIcon: {
    top: 670,
    width: 35,
    left: 60,
    height: 41,
  },
  labelUsuario3: {
    marginTop: -117,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    left: "50%",
    top: "50%",
    marginLeft: -165,
  },
  userIcon: {
    top: 356,
    left: 54,
    width: 54,
  },
  textSenha1: {
    marginTop: 218,
    marginLeft: -101,
    position: "absolute",
  },
  lineSenha1: {
    marginTop: 201.5,
  },
  textUsurio2: {
    marginTop: -103,
    marginLeft: -101,
    position: "absolute",
  },
  lineUsuario2: {
    marginTop: -115.5,
  },
  labelUsuario4: {
    marginTop: 43,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    left: "50%",
    top: "50%",
    marginLeft: -165,
  },
  textUsurio3: {
    marginTop: 61,
    marginLeft: -102,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  lineUsuario3: {
    marginTop: 44.5,
  },
  labelUsuario5: {
    marginTop: -37,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    left: "50%",
    top: "50%",
    marginLeft: -165,
  },
  textUsurio4: {
    marginTop: -19,
  },
  lineUsuario4: {
    marginTop: -35.5,
  },
  edicaopassageiroChild: {
    left: 0,
    backgroundColor: Color.colorDarkslateblue_100,
    width: 430,
    height: 91,
  },
  edicaopassageiroItem: {
    top: 125,
    left: 152,
    width: 126,
    height: 111,
    position: "absolute",
  },
  userIcon1: {
    top: 130,
    left: 161,
    width: 107,
    height: 100,
    position: "absolute",
  },
  atSignIcon: {
    top: 274,
    left: 53,
  },
  phoneIcon: {
    top: 435,
    left: 54,
  },
  contactIcon: {
    top: 517,
    left: 55,
    width: 48,
    height: 40,
    position: "absolute",
  },
  lockIcon1: {
    top: 591,
    width: 35,
    left: 60,
    height: 41,
  },
  icon: {
    marginTop: 280,
    borderRadius: Border.br_9xs,
    marginLeft: -165,
  },
  buttonEntrar: {
    height: 71,
    width: 330,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textEntrar: {
    marginTop: 305,
    marginLeft: -72,
    fontSize: 28,
    fontWeight: "700",
    fontFamily: FontFamily.syncopateBold,
    color: Color.colorWhite,
    width: 152,
    height: 22,
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
  menu: {
    left: 10,
    top: 12,
    width: 68,
    height: 63,
    position: "absolute",
  },
  edicaopassageiro: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default EdicaoPassageiro;
