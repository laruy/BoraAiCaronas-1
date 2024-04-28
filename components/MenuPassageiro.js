import React, { memo } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const MenuPassageiro = memo(({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.menupassageiro}>
      <Image
        style={styles.menupassageiroChild}
        contentFit="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Pressable
        style={[styles.user, styles.userPosition]}
        onPress={() => navigation.navigate("PerfilPassageiro")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/user2.png")}
        />
      </Pressable>
      <View style={[styles.menupassageiroItem, styles.userPosition]} />
      <Pressable
        style={styles.usurio}
        onPress={() => navigation.navigate("PerfilPassageiro")}
      >
        <Text style={styles.usurio1}>usuário</Text>
      </Pressable>
      <Pressable
        style={styles.textUsurio}
        onPress={() => navigation.navigate("HistoricoPassageiro")}
      >
        <Text style={[styles.histrico, styles.histricoTypo]}>Histórico</Text>
      </Pressable>
      <Text style={styles.textUsurio1}>fALE CONOSCO</Text>
      <Pressable style={styles.textUsurio} onPress={() => {}}>
        <Text style={[styles.mensagens, styles.histricoTypo]}>{`MENSAGENS
`}</Text>
      </Pressable>
      <Pressable
        style={styles.textUsurio}
        onPress={() => navigation.navigate("LoginPassageiro")}
      >
        <Text style={styles.sair}>sair</Text>
      </Pressable>
      <ImageBackground
        style={styles.imgLogoIcon}
        resizeMode="cover"
        source={require("../assets/imglogo4.png")}
      />
      <Image
        style={[styles.menupassageiroInner, styles.menupassageiroChildLayout]}
        contentFit="cover"
        source={require("../assets/polygon-1.png")}
      />
      <Image
        style={[styles.polygonIcon, styles.menupassageiroChildLayout]}
        contentFit="cover"
        source={require("../assets/polygon-1.png")}
      />
      <Image
        style={[styles.menupassageiroChild1, styles.menupassageiroChildLayout]}
        contentFit="cover"
        source={require("../assets/polygon-1.png")}
      />
      <Image
        style={[styles.menupassageiroChild2, styles.menupassageiroChildLayout]}
        contentFit="cover"
        source={require("../assets/polygon-1.png")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  userPosition: {
    left: 16,
    position: "absolute",
  },
  histricoTypo: {
    height: 17,
    color: Color.colorSilver,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.syncopateBold,
    fontWeight: "700",
  },
  menupassageiroChildLayout: {
    width: 15,
    height: 16,
    left: 16,
    position: "absolute",
  },
  menupassageiroChild: {
    top: 19,
    left: 10,
    width: 80,
    height: 74,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  user: {
    top: 22,
    width: 67,
    height: 67,
  },
  menupassageiroItem: {
    top: 102,
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderTopWidth: 1,
    width: 393,
    height: 1,
  },
  usurio1: {
    fontSize: FontSize.size_3xl,
    color: Color.colorCoral,
    width: 135,
    height: 18,
    textAlign: "left",
    fontFamily: FontFamily.syncopateBold,
    fontWeight: "700",
  },
  usurio: {
    left: 102,
    top: 45,
    position: "absolute",
  },
  histrico: {
    marginTop: -351,
    width: 148,
    marginLeft: -105.5,
    height: 17,
  },
  textUsurio: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  textUsurio1: {
    marginTop: -325,
    width: 219,
    height: 16,
    color: Color.colorSilver,
    fontSize: FontSize.size_xl,
    marginLeft: -105.5,
    top: "50%",
    left: "50%",
    textAlign: "left",
    fontFamily: FontFamily.syncopateBold,
    fontWeight: "700",
    position: "absolute",
  },
  mensagens: {
    marginTop: -296,
    marginLeft: -104.5,
    width: 175,
  },
  sair: {
    marginTop: -267,
    width: 63,
    color: Color.colorSilver,
    fontSize: FontSize.size_xl,
    marginLeft: -105.5,
    height: 18,
    textAlign: "left",
    fontFamily: FontFamily.syncopateBold,
    fontWeight: "700",
  },
  imgLogoIcon: {
    top: 733,
    left: 26,
    width: 236,
    height: 174,
    position: "absolute",
  },
  menupassageiroInner: {
    top: 116,
  },
  polygonIcon: {
    top: 141,
  },
  menupassageiroChild1: {
    top: 171,
  },
  menupassageiroChild2: {
    top: 201,
  },
  menupassageiro: {
    backgroundColor: Color.colorDarkslateblue_100,
    width: 289,
    height: 932,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default MenuPassageiro;
