import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  ImageBackground,
  View,
  TextInput,
  Pressable,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const LoginPassageiro = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginpassageiro}>
      <Image
        style={styles.imgWallpaperIcon}
        contentFit="cover"
        source={require("../assets/img-wallpaper.png")}
      />
      <ImageBackground
        style={styles.imgUtfprIcon}
        resizeMode="cover"
        source={require("../assets/imgutfpr.png")}
      />
      <SafeAreaView style={[styles.labelSenha, styles.labelPosition]} />
      <View style={[styles.labelUsuario, styles.labelPosition]} />
      <ImageBackground
        style={[styles.iconeSenha, styles.iconePosition]}
        resizeMode="cover"
        source={require("../assets/iconesenha.png")}
      />
      <ImageBackground
        style={[styles.iconeUser, styles.iconePosition]}
        resizeMode="cover"
        source={require("../assets/iconeuser.png")}
      />
      <TextInput
        style={[styles.textSenha, styles.textPosition]}
        placeholder="Senha"
        placeholderTextColor="#bcb6b6"
      />
      <TextInput
        style={[styles.textUsurio, styles.textPosition]}
        placeholder="Email-Usuário"
        keyboardType="email-address"
        placeholderTextColor="#bcb6b6"
      />
      <Pressable
        style={styles.iconePosition}
        onPress={() => navigation.navigate("CadastroPassageiro")}
      >
        <Text style={styles.regristarSe}>REGRISTAR-SE</Text>
      </Pressable>
      <Pressable style={styles.iconePosition} onPress={() => {}}>
        <Text style={[styles.esqueciMinhaSenha, styles.textEntrar1Typo]}>
          Esqueci minha senha
        </Text>
      </Pressable>
      <View style={[styles.lineUsuario, styles.linePosition]} />
      <View style={[styles.lineSenha, styles.linePosition]} />
      <ImageBackground
        style={styles.imgLogoIcon}
        resizeMode="cover"
        source={require("../assets/imglogo.png")}
      />
      <Pressable
        style={[styles.buttonEntrar, styles.iconePosition]}
        onPress={() => navigation.navigate("CentralPassageiro")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/button-entrar.png")}
        />
      </Pressable>
      <Text style={[styles.textEntrar1, styles.textEntrar1Typo]}>ENTRAR</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelPosition: {
    height: 54,
    width: 330,
    marginLeft: -165,
    borderRadius: Border.br_9xs,
    left: "50%",
    top: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  iconePosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.juliusSansOneRegular,
    marginLeft: -101,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textEntrar1Typo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.syncopateBold,
    fontWeight: "700",
    textAlign: "left",
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
  imgWallpaperIcon: {
    top: 0,
    left: 0,
    width: 430,
    height: 934,
    position: "absolute",
  },
  imgUtfprIcon: {
    top: 840,
    left: 133,
    width: 163,
    height: 88,
    position: "absolute",
  },
  labelSenha: {
    marginTop: 90,
  },
  labelUsuario: {
    marginTop: 8,
  },
  iconeSenha: {
    marginTop: 96,
    marginLeft: -150,
    width: 31,
    height: 38,
  },
  iconeUser: {
    marginTop: 17,
    width: 54,
    height: 37,
    marginLeft: -161,
  },
  textSenha: {
    marginTop: 104,
  },
  textUsurio: {
    marginTop: 24.9,
  },
  regristarSe: {
    marginTop: 289,
    marginLeft: -75,
    color: Color.colorCoral,
    width: 152,
    height: 23,
    textAlign: "left",
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.juliusSansOneRegular,
  },
  esqueciMinhaSenha: {
    marginTop: 150,
    fontSize: 15,
    width: 248,
    height: 11,
    marginLeft: -161,
  },
  lineUsuario: {
    marginTop: 9.5,
  },
  lineSenha: {
    marginTop: 91.5,
  },
  imgLogoIcon: {
    top: 73,
    left: 58,
    width: 315,
    height: 327,
    position: "absolute",
  },
  icon: {
    marginTop: 217,
    marginLeft: -120,
    height: "100%",
    borderRadius: Border.br_9xs,
    width: "100%",
  },
  buttonEntrar: {
    width: 233,
    height: 50,
  },
  textEntrar1: {
    marginTop: 229,
    marginLeft: -93,
    fontSize: FontSize.size_13xl,
    width: 179,
    height: 26,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  loginpassageiro: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default LoginPassageiro;
