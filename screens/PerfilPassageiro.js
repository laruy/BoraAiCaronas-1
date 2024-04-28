import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Pressable,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuPassageiro from "../components/MenuPassageiro";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const PerfilPassageiro = () => {
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
      <View style={styles.perfilpassageiro}>
        <Image
          style={styles.imgWallpaperIcon}
          contentFit="cover"
          source={require("../assets/img-wallpaper1.png")}
        />
        <View style={[styles.labelSenha, styles.labelPosition]} />
        <View style={[styles.labelUsuario, styles.labelPosition]} />
        <Image
          style={styles.iconeUser}
          contentFit="cover"
          source={require("../assets/iconeuser.png")}
        />
        <Text style={[styles.textSenha, styles.textTypo]}>Senha</Text>
        <Text style={[styles.textUsurio, styles.textPosition1]}>NOME</Text>
        <View style={[styles.lineUsuario, styles.linePosition]} />
        <View style={[styles.labelUsuario1, styles.labelPosition]} />
        <Text style={[styles.textUsurio1, styles.textPosition]}>Email</Text>
        <View style={[styles.lineUsuario, styles.linePosition]} />
        <View style={[styles.lineSenha, styles.linePosition]} />
        <View style={[styles.labelSenha1, styles.labelPosition]} />
        <ImageBackground
          style={[styles.lockIcon, styles.lockIconLayout]}
          resizeMode="cover"
          source={require("../assets/lock1.png")}
        />
        <View style={[styles.labelUsuario2, styles.labelPosition]} />
        <ImageBackground
          style={[styles.userIcon, styles.lockIconLayout]}
          resizeMode="cover"
          source={require("../assets/user4.png")}
        />
        <Text style={[styles.textSenha1, styles.textTypo]}>
          ConfirmAR senha
        </Text>
        <View style={[styles.lineSenha1, styles.linePosition]} />
        <Text style={[styles.textUsurio2, styles.textPosition]}>usuário</Text>
        <View style={[styles.lineUsuario2, styles.linePosition]} />
        <View style={[styles.labelUsuario3, styles.labelPosition]} />
        <Text style={[styles.textUsurio3, styles.textTypo]}>CPF</Text>
        <View style={[styles.lineUsuario3, styles.linePosition]} />
        <View style={[styles.labelUsuario4, styles.labelPosition]} />
        <Text style={[styles.textUsurio4, styles.textPosition]}>Fone</Text>
        <View style={[styles.lineUsuario4, styles.linePosition]} />
        <Image
          style={styles.perfilpassageiroChild}
          contentFit="cover"
          source={require("../assets/rectangle-2.png")}
        />
        <Image
          style={styles.perfilpassageiroItem}
          contentFit="cover"
          source={require("../assets/ellipse-21.png")}
        />
        <ImageBackground
          style={styles.userIcon1}
          resizeMode="cover"
          source={require("../assets/user5.png")}
        />
        <ImageBackground
          style={[styles.atSignIcon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/at-sign.png")}
        />
        <ImageBackground
          style={[styles.phoneIcon, styles.iconLayout1]}
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
          onPress={() => navigation.navigate("EdicaoPassageiro")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/button-entrar21.png")}
          />
        </Pressable>
        <Text style={[styles.textEntrar, styles.textPosition1]}>Editar</Text>
        <Pressable style={styles.menu} onClick={openMenuImage}>
          <Image
            style={styles.iconLayout}
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
  labelPosition: {
    height: 54,
    borderRadius: Border.br_xl,
    width: 330,
    left: "50%",
    top: "50%",
    marginLeft: -165,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  textTypo: {
    height: 18,
    textAlign: "left",
    color: Color.colorSilver,
    fontFamily: FontFamily.juliusSansOneRegular,
    fontSize: FontSize.size_3xl,
    left: "50%",
    top: "50%",
    position: "absolute",
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
  textPosition: {
    height: 19,
    textAlign: "left",
    color: Color.colorSilver,
    fontFamily: FontFamily.juliusSansOneRegular,
    fontSize: FontSize.size_3xl,
    marginLeft: -101,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  lockIconLayout: {
    height: 41,
    position: "absolute",
  },
  iconLayout1: {
    height: 44,
    width: 55,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  imgWallpaperIcon: {
    top: 0,
    left: -556,
    width: 1543,
    height: 956,
    position: "absolute",
  },
  labelSenha: {
    marginTop: 120,
  },
  labelUsuario: {
    marginTop: -197,
  },
  iconeUser: {
    marginTop: -188,
    marginLeft: -161,
    height: 37,
    width: 54,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textSenha: {
    marginTop: 134,
    width: 76,
    marginLeft: -101,
    height: 18,
  },
  textUsurio: {
    marginTop: -183,
    width: 186,
    height: 34,
    color: Color.colorSilver,
    fontFamily: FontFamily.juliusSansOneRegular,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    marginLeft: -101,
  },
  lineUsuario: {
    marginTop: -195.5,
  },
  labelUsuario1: {
    marginTop: -193,
  },
  textUsurio1: {
    marginTop: -178,
    width: 62,
  },
  lineSenha: {
    marginTop: 121.5,
  },
  labelSenha1: {
    marginTop: 200,
  },
  lockIcon: {
    top: 670,
    width: 35,
    left: 60,
    height: 41,
  },
  labelUsuario2: {
    marginTop: -117,
  },
  userIcon: {
    top: 356,
    left: 54,
    width: 54,
  },
  textSenha1: {
    marginTop: 216,
    marginLeft: -100,
    width: 210,
  },
  lineSenha1: {
    marginTop: 201.5,
  },
  textUsurio2: {
    marginTop: -103,
    width: 97,
  },
  lineUsuario2: {
    marginTop: -115.5,
  },
  labelUsuario3: {
    marginTop: 43,
  },
  textUsurio3: {
    marginTop: 62,
    width: 42,
    marginLeft: -101,
    height: 18,
  },
  lineUsuario3: {
    marginTop: 44.5,
  },
  labelUsuario4: {
    marginTop: -37,
  },
  textUsurio4: {
    marginTop: -19,
    width: 60,
  },
  lineUsuario4: {
    marginTop: -35.5,
  },
  perfilpassageiroChild: {
    top: -1,
    left: -4,
    width: 430,
    height: 91,
    position: "absolute",
  },
  perfilpassageiroItem: {
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
    marginTop: 287,
    borderRadius: Border.br_9xs,
    marginLeft: -165,
    height: "100%",
  },
  buttonEntrar: {
    height: 71,
    width: 330,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textEntrar: {
    marginTop: 310,
    marginLeft: -80,
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.syncopateBold,
    color: Color.colorWhite,
    width: 153,
    height: 25,
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
    left: 16,
    top: 13,
    width: 68,
    height: 63,
    position: "absolute",
  },
  perfilpassageiro: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default PerfilPassageiro;
