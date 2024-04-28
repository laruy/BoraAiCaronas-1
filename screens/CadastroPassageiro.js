import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TextInput,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const CadastroPassageiro = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cadastropassageiro}>
      <View style={styles.frame}>
        <Image
          style={[styles.atSignIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/at-sign.png")}
        />
      </View>
      <ImageBackground
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/img-wallpaper31.png")}
      >
        <View style={[styles.frame1, styles.frame1Layout]}>
          <View style={[styles.buttonEntrarParent, styles.frame1Layout]}>
            <Pressable
              style={styles.buttonEntrar}
              onPress={() => navigation.navigate("LoginPassageiro")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/button-entrar21.png")}
              />
            </Pressable>
            <View style={[styles.labelSenha, styles.labelPosition]} />
            <View style={[styles.labelUsuario, styles.labelShadowBox]} />
            <Image
              style={styles.iconeUser}
              contentFit="cover"
              source={require("../assets/iconeuser.png")}
            />
            <Text style={styles.textEntrar}>CADASTRAR</Text>
            <TextInput
              style={[styles.textSenha, styles.textPosition]}
              placeholder="Senha"
              autoCapitalize="none"
              secureTextEntry={true}
              placeholderTextColor="#bcb6b6"
            />
            <TextInput
              style={[styles.textUsurio, styles.textPosition]}
              placeholder="NOME"
              placeholderTextColor="#bcb6b6"
            />
            <View style={[styles.lineUsuario, styles.linePosition]} />
            <Image
              style={[styles.labelUsuarioIcon, styles.labelPosition]}
              contentFit="cover"
              source={require("../assets/label-usuario.png")}
            />
            <View style={[styles.lineUsuario, styles.linePosition]} />
            <View style={[styles.labelSenha1, styles.labelPosition]} />
            <View style={[styles.lineSenha, styles.linePosition]} />
            <Image
              style={[styles.lineSenhaIcon, styles.lineIconPosition]}
              contentFit="cover"
              source={require("../assets/line-senha.png")}
            />
            <View style={[styles.labelUsuario1, styles.labelShadowBox]} />
            <ImageBackground
              style={styles.userIcon}
              resizeMode="cover"
              source={require("../assets/user4.png")}
            />
            <TextInput
              style={[styles.textSenha1, styles.textPosition]}
              placeholder="Confirme senha"
              autoCapitalize="none"
              secureTextEntry={true}
              placeholderTextColor="#bcb6b6"
            />
            <Image
              style={[styles.lineSenhaIcon1, styles.lineIconPosition]}
              contentFit="cover"
              source={require("../assets/line-senha1.png")}
            />
            <TextInput
              style={[styles.textUsurio1, styles.textPosition]}
              placeholder="USER"
              placeholderTextColor="#bcb6b6"
            />
            <View style={[styles.lineUsuario2, styles.linePosition]} />
            <View style={[styles.labelUsuario2, styles.labelPosition]} />
            <TextInput
              style={[styles.textUsurio2, styles.textPosition]}
              placeholder="CPF"
              keyboardType="numeric"
              autoCapitalize="none"
              placeholderTextColor="#bcb6b6"
            />
            <View style={[styles.lineUsuario3, styles.linePosition]} />
            <View style={[styles.labelUsuario3, styles.labelPosition]} />
            <TextInput
              style={[styles.textUsurio3, styles.textPosition]}
              placeholder="Fone"
              keyboardType="phone-pad"
              placeholderTextColor="#bcb6b6"
            />
            <View style={[styles.lineUsuario4, styles.linePosition]} />
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/ellipse-11.png")}
            />
            <Image
              style={[styles.frameItem, styles.frameItemLayout]}
              contentFit="cover"
              source={require("../assets/frame-1.png")}
            />
            <View style={[styles.labelEmail, styles.labelPosition]} />
            <View style={[styles.lineEmail, styles.linePosition]} />
            <TextInput
              style={[styles.textEmail, styles.textPosition]}
              placeholder={`Email
`}
              autoCapitalize="none"
              secureTextEntry={true}
              placeholderTextColor="#bcb6b6"
            />
            <ImageBackground
              style={[styles.phoneIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/phone11.png")}
            />
            <ImageBackground
              style={styles.contactIcon}
              resizeMode="cover"
              source={require("../assets/contact1.png")}
            />
            <ImageBackground
              style={[styles.lockIcon, styles.lockIconLayout]}
              resizeMode="cover"
              source={require("../assets/lock1.png")}
            />
            <ImageBackground
              style={[styles.lockIcon1, styles.lockIconLayout]}
              resizeMode="cover"
              source={require("../assets/lock1.png")}
            />
            <ImageBackground
              style={[styles.atSignIcon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/at-sign.png")}
            />
            <ImageBackground
              style={[styles.userIcon1, styles.frameItemLayout]}
              resizeMode="cover"
              source={require("../assets/user5.png")}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 44,
    width: 55,
    position: "absolute",
  },
  frame1Layout: {
    width: 377,
    position: "absolute",
  },
  labelPosition: {
    height: 54,
    marginLeft: -188.5,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  labelShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 54,
    borderRadius: Border.br_xl,
    marginLeft: -188.5,
    width: 330,
    top: "50%",
    left: "50%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  textPosition: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.juliusSansOneRegular,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  linePosition: {
    height: 51,
    width: 1,
    borderRightWidth: 1,
    borderColor: Color.colorGray_300,
    marginLeft: -131,
    borderStyle: "solid",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  lineIconPosition: {
    height: 50,
    maxWidth: "100%",
    top: "50%",
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  frameItemLayout: {
    height: 100,
    position: "absolute",
  },
  lockIconLayout: {
    width: 35,
    left: 15,
    height: 41,
    position: "absolute",
  },
  atSignIcon: {
    top: 544,
    left: 0,
  },
  frame: {
    left: 54,
    height: 588,
    width: 55,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    marginTop: 324.5,
    height: "100%",
    borderRadius: Border.br_9xs,
    marginLeft: -184.5,
    width: "100%",
  },
  buttonEntrar: {
    height: 71,
    width: 330,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  labelSenha: {
    marginTop: 161.5,
    borderRadius: Border.br_xl,
    height: 54,
    marginLeft: -188.5,
    width: 330,
    backgroundColor: Color.colorWhite,
  },
  labelUsuario: {
    marginTop: -220.5,
  },
  iconeUser: {
    marginTop: -211.5,
    height: 37,
    width: 54,
    marginLeft: -184.5,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  textEntrar: {
    marginTop: 343.5,
    marginLeft: -154.5,
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.syncopateBold,
    color: Color.colorWhite,
    textAlign: "left",
    width: 260,
    height: 26,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  textSenha: {
    marginTop: 179.5,
    marginLeft: -124.5,
    fontFamily: FontFamily.juliusSansOneRegular,
  },
  textUsurio: {
    marginTop: -203.5,
    marginLeft: -124.5,
    fontFamily: FontFamily.juliusSansOneRegular,
  },
  lineUsuario: {
    marginTop: -219,
  },
  labelUsuarioIcon: {
    width: 0,
    marginTop: -220.5,
    height: 54,
    marginLeft: -188.5,
    borderRadius: Border.br_9xs,
  },
  labelSenha1: {
    marginTop: 241.5,
    borderRadius: Border.br_xl,
    height: 54,
    marginLeft: -188.5,
    width: 330,
    backgroundColor: Color.colorWhite,
  },
  lineSenha: {
    marginTop: 163,
  },
  lineSenhaIcon: {
    marginTop: 244.5,
    marginLeft: -129,
  },
  labelUsuario1: {
    marginTop: -140.5,
  },
  userIcon: {
    top: 262,
    left: 4,
    height: 41,
    width: 54,
    position: "absolute",
  },
  textSenha1: {
    marginTop: 259.5,
    marginLeft: -120.5,
  },
  lineSenhaIcon1: {
    marginTop: 95.5,
    marginLeft: -132.5,
  },
  textUsurio1: {
    marginTop: -126.5,
    marginLeft: -124.5,
    fontFamily: FontFamily.juliusSansOneRegular,
  },
  lineUsuario2: {
    marginTop: -139,
  },
  labelUsuario2: {
    marginTop: 19.5,
    borderRadius: Border.br_xl,
    height: 54,
    marginLeft: -188.5,
    width: 330,
    backgroundColor: Color.colorWhite,
  },
  textUsurio2: {
    marginTop: 37.5,
    marginLeft: -124.5,
    fontFamily: FontFamily.juliusSansOneRegular,
  },
  lineUsuario3: {
    marginTop: 21,
  },
  labelUsuario3: {
    marginTop: -60.5,
    borderRadius: Border.br_xl,
    height: 54,
    marginLeft: -188.5,
    width: 330,
    backgroundColor: Color.colorWhite,
  },
  textUsurio3: {
    marginTop: -46.5,
    marginLeft: -124.5,
    fontFamily: FontFamily.juliusSansOneRegular,
  },
  lineUsuario4: {
    marginTop: -59,
  },
  frameChild: {
    left: 81,
    width: 170,
    height: 151,
    top: 0,
    position: "absolute",
  },
  frameItem: {
    top: 160,
    width: 100,
    left: 0,
    overflow: "hidden",
  },
  labelEmail: {
    marginTop: 91.5,
    borderRadius: Border.br_xl,
    height: 54,
    marginLeft: -188.5,
    width: 330,
    backgroundColor: Color.colorWhite,
  },
  lineEmail: {
    marginTop: 93,
  },
  textEmail: {
    marginTop: 108.5,
    marginLeft: -124.5,
    fontFamily: FontFamily.juliusSansOneRegular,
  },
  phoneIcon: {
    top: 339,
    left: 3,
  },
  contactIcon: {
    top: 423,
    left: 8,
    width: 48,
    height: 40,
    position: "absolute",
  },
  lockIcon: {
    top: 563,
  },
  lockIcon1: {
    top: 641,
  },
  atSignIcon1: {
    top: 492,
    left: 5,
  },
  userIcon1: {
    top: 25,
    left: 115,
    width: 107,
  },
  buttonEntrarParent: {
    top: 52,
    height: 791,
    left: 0,
  },
  frame1: {
    left: 708,
    height: 843,
    top: 0,
    overflow: "hidden",
  },
  frameIcon: {
    left: -663,
    width: 1543,
    height: 956,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  cadastropassageiro: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default CadastroPassageiro;
