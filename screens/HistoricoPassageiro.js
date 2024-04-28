import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, Modal } from "react-native";
import MenuPassageiro from "../components/MenuPassageiro";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const HistoricoPassageiro = () => {
  const [menuImageVisible, setMenuImageVisible] = useState(false);

  const openMenuImage = useCallback(() => {
    setMenuImageVisible(true);
  }, []);

  const closeMenuImage = useCallback(() => {
    setMenuImageVisible(false);
  }, []);

  return (
    <>
      <View style={styles.historicopassageiro}>
        <Image
          style={[styles.imgWallpaperIcon, styles.imgWallpaperIconPosition]}
          contentFit="cover"
          source={require("../assets/img-wallpaper3.png")}
        />
        <View
          style={[
            styles.historicopassageiroChild,
            styles.historicopassageiroBorder,
          ]}
        />
        <View
          style={[
            styles.historicopassageiroItem,
            styles.historicopassageiroBorder,
          ]}
        />
        <View
          style={[
            styles.historicopassageiroInner,
            styles.imgWallpaperIconPosition,
          ]}
        />
        <Pressable style={styles.menu} onClick={openMenuImage}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/menu2.png")}
          />
        </Pressable>
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <Pressable
          style={[styles.rectanglePressable, styles.rectangleLayout]}
        />
        <View style={styles.lineView} />
        <Text style={[styles.textUsurio, styles.textTypo1]}>RecebidaS</Text>
        <Text style={styles.textUsurio1}>ANO</Text>
        <Text style={[styles.textUsurio2, styles.textTypo1]}>Mês</Text>
        <Image
          style={[styles.backIcon, styles.backIconLayout]}
          contentFit="cover"
          source={require("../assets/back1.png")}
        />
        <Image
          style={[styles.backIcon1, styles.backIconLayout]}
          contentFit="cover"
          source={require("../assets/back2.png")}
        />
        <View
          style={[styles.historicopassageiroChild1, styles.lineIconLayout]}
        />
        <Text
          style={[styles.rotaColina, styles.rotaTypo1]}
        >{`Rota: Colina - UTF `}</Text>
        <Text style={[styles.partidaAaBrasil, styles.rotaTypo1]}>
          Partida: Açaí Brasil - 18:22
        </Text>
        <View style={[styles.mariaGabrielaWrapper, styles.mariaLayout]}>
          <Text style={[styles.mariaGabriela, styles.luizaTypo]}>
            Maria Gabriela
          </Text>
        </View>
        <Image
          style={[styles.ellipseIcon, styles.historicopassageiroChildLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Image
          style={[styles.userIcon, styles.userIconLayout]}
          contentFit="cover"
          source={require("../assets/user3.png")}
        />
        <Text
          style={[styles.rotaColina1, styles.rotaWrapperLayout]}
        >{`Rota: Colina - UTF `}</Text>
        <Text style={[styles.partidaNoPonto, styles.partidaTypo]}>
          Partida: No Ponto - 18:20
        </Text>
        <View style={[styles.luizaMorosiniWrapper, styles.rotaWrapperLayout]}>
          <Text style={[styles.luizaMorosini, styles.rotaWrapperLayout]}>
            Luiza Morosini
          </Text>
        </View>
        <Image
          style={[
            styles.historicopassageiroChild2,
            styles.historicopassageiroChildPosition2,
          ]}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Image
          style={[styles.userIcon1, styles.userIconLayout]}
          contentFit="cover"
          source={require("../assets/user3.png")}
        />
        <Text
          style={[styles.rotaColina2, styles.rotaWrapperLayout]}
        >{`Rota: Colina - UTF `}</Text>
        <Text style={[styles.partidaNoPonto1, styles.rotaWrapperLayout]}>
          Partida: No Ponto - 18:20
        </Text>
        <View style={[styles.luisWrapper, styles.rotaWrapperLayout]}>
          <Text style={[styles.luizaMorosini, styles.rotaWrapperLayout]}>
            Luis
          </Text>
        </View>
        <Image
          style={[
            styles.historicopassageiroChild3,
            styles.historicopassageiroChildPosition2,
          ]}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Image
          style={[styles.userIcon2, styles.userIconLayout]}
          contentFit="cover"
          source={require("../assets/user3.png")}
        />
        <Text style={[styles.textUsurio3, styles.textTypo1]}>Dia 12</Text>
        <Image
          style={[styles.lineIcon, styles.lineIconPosition]}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Image
          style={[styles.historicopassageiroChild4, styles.lineIconPosition]}
          contentFit="cover"
          source={require("../assets/line-8.png")}
        />
        <View
          style={[
            styles.historicopassageiroChild5,
            styles.historicopassageiroChildLayout,
          ]}
        />
        <Text style={[styles.textUsurio4, styles.textTypo]}>Dia 13</Text>
        <View
          style={[
            styles.historicopassageiroChild6,
            styles.historicopassageiroChildLayout,
          ]}
        />
        <View
          style={[
            styles.historicopassageiroChild7,
            styles.historicopassageiroChildLayout,
          ]}
        />
        <View
          style={[
            styles.historicopassageiroChild8,
            styles.historicopassageiroChildLayout,
          ]}
        />
        <Text
          style={[styles.rotaColina3, styles.rotaTypo1]}
        >{`Rota: Colina - UTF `}</Text>
        <Text style={[styles.partidaNoPonto2, styles.rotaTypo1]}>
          Partida: No Ponto - 18:20
        </Text>
        <View style={[styles.aurlioWrapper, styles.aurlioLayout]}>
          <Text style={[styles.aurlio, styles.aurlioLayout]}>Aurélio</Text>
        </View>
        <Image
          style={[
            styles.historicopassageiroChild9,
            styles.historicopassageiroChildPosition1,
          ]}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Image
          style={[styles.userIcon3, styles.userIcon3Position]}
          contentFit="cover"
          source={require("../assets/user3.png")}
        />
        <Text style={[styles.textUsurio5, styles.textTypo]}>Dia 16</Text>
        <View
          style={[
            styles.historicopassageiroChild10,
            styles.historicopassageiroChildPosition1,
          ]}
        />
        <View
          style={[
            styles.historicopassageiroChild11,
            styles.historicopassageiroChildPosition1,
          ]}
        />
        <Text
          style={[styles.rotaColina4, styles.rotaTypo1]}
        >{`Rota: Colina - UTF `}</Text>
        <Text style={[styles.partidaNoPonto3, styles.rotaTypo1]}>
          Partida: No Ponto - 18:20
        </Text>
        <View style={[styles.lucasWrapper, styles.lucasLayout]}>
          <Text style={[styles.lucas, styles.lucasLayout]}>{`Lucas `}</Text>
        </View>
        <Image
          style={[
            styles.historicopassageiroChild12,
            styles.historicopassageiroChildPosition,
          ]}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Image
          style={[styles.userIcon4, styles.userIconLayout]}
          contentFit="cover"
          source={require("../assets/user3.png")}
        />
        <View
          style={[
            styles.historicopassageiroChild13,
            styles.historicopassageiroChildLayout,
          ]}
        />
        <Text
          style={[styles.rotaColina5, styles.rotaTypo]}
        >{`Rota: Colina - UTF `}</Text>
        <View style={[styles.clebersonLeonardoWrapper, styles.clebersonLayout]}>
          <Text style={[styles.clebersonLeonardo, styles.clebersonLayout]}>
            Cleberson Leonardo
          </Text>
        </View>
        <Image
          style={[styles.historicopassageiroChild14, styles.userIcon3Position]}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Image
          style={[styles.userIcon5, styles.userIconLayout]}
          contentFit="cover"
          source={require("../assets/user3.png")}
        />
        <View
          style={[
            styles.historicopassageiroChild15,
            styles.historicopassageiroChildPosition,
          ]}
        />
        <View style={[styles.luizaMorosiniContainer, styles.luizaLayout]}>
          <Text style={[styles.luizaMorosini1, styles.luizaLayout]}>
            Luiza Morosini
          </Text>
        </View>
        <Text
          style={[styles.rotaColina6, styles.rotaTypo]}
        >{`Rota: Colina - UTF `}</Text>
        <Text style={[styles.partidaNoPonto4, styles.partidaTypo]}>
          Partida: No Ponto - 18:20
        </Text>
        <Image
          style={[styles.userIcon1, styles.userIconLayout]}
          contentFit="cover"
          source={require("../assets/user3.png")}
        />
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
  historicopassageiroBorder: {
    height: 37,
    borderWidth: 2,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    top: 175,
    backgroundColor: Color.colorCoral,
    position: "absolute",
  },
  rectangleLayout: {
    height: 70,
    width: 215,
    top: 91,
    position: "absolute",
  },
  textTypo1: {
    height: 18,
    textAlign: "left",
    color: Color.colorGainsboro_200,
    fontFamily: FontFamily.syncopateBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  backIconLayout: {
    width: 43,
    position: "absolute",
  },
  lineIconLayout: {
    height: 698,
    top: 231,
  },
  rotaTypo1: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.sunflowerMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  mariaLayout: {
    height: 23,
    width: 139,
    position: "absolute",
  },
  luizaTypo: {
    fontFamily: FontFamily.sunflowerBold,
    color: Color.colorDimgray_100,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    left: 0,
    top: 0,
  },
  historicopassageiroChildLayout1: {
    height: 48,
    width: 49,
  },
  userIconLayout: {
    height: 43,
    width: 41,
  },
  rotaWrapperLayout: {
    width: 272,
    height: 23,
  },
  partidaTypo: {
    top: 333,
    left: 86,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.sunflowerMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  historicopassageiroChildPosition2: {
    left: 29,
    position: "absolute",
  },
  lineIconPosition: {
    left: 371,
    position: "absolute",
  },
  historicopassageiroChildLayout: {
    width: 332,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  textTypo: {
    height: 12,
    width: 157,
    textAlign: "left",
    color: Color.colorGainsboro_200,
    fontFamily: FontFamily.syncopateBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  aurlioLayout: {
    width: 75,
    height: 23,
    position: "absolute",
  },
  historicopassageiroChildPosition1: {
    left: 31,
    position: "absolute",
  },
  userIcon3Position: {
    left: 35,
    position: "absolute",
  },
  lucasLayout: {
    width: 58,
    height: 23,
    position: "absolute",
  },
  historicopassageiroChildPosition: {
    left: 32,
    position: "absolute",
  },
  rotaTypo: {
    width: 173,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.sunflowerMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  clebersonLayout: {
    width: 194,
    height: 21,
    position: "absolute",
  },
  luizaLayout: {
    width: 143,
    height: 23,
    position: "absolute",
  },
  imgWallpaperIcon: {
    left: -658,
    width: 1543,
    height: 956,
  },
  historicopassageiroChild: {
    width: 196,
    left: 20,
  },
  historicopassageiroItem: {
    left: 214,
    width: 195,
  },
  historicopassageiroInner: {
    backgroundColor: Color.colorDarkslateblue_100,
    width: 430,
    height: 91,
    left: 0,
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
    left: 10,
    top: 14,
    width: 68,
    height: 63,
    position: "absolute",
  },
  rectangleView: {
    left: 0,
    backgroundColor: Color.colorCoral,
  },
  rectanglePressable: {
    left: 215,
    backgroundColor: "#111",
  },
  lineView: {
    top: 161,
    width: 431,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhite,
    left: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  textUsurio: {
    marginTop: -349,
    marginLeft: -196,
    width: 175,
  },
  textUsurio1: {
    marginTop: -283,
    marginLeft: -168,
    width: 66,
    height: 17,
    textAlign: "left",
    color: Color.colorGainsboro_200,
    fontFamily: FontFamily.syncopateBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textUsurio2: {
    marginTop: -284,
    marginLeft: 7,
    width: 71,
  },
  backIcon: {
    top: 174,
    left: 167,
    height: 40,
  },
  backIcon1: {
    top: 176,
    left: 358,
    height: 39,
  },
  historicopassageiroChild1: {
    borderRadius: 10,
    width: 388,
    backgroundColor: Color.colorCoral,
    left: 20,
    position: "absolute",
  },
  rotaColina: {
    top: 412,
    width: 174,
    height: 21,
    left: 90,
  },
  partidaAaBrasil: {
    top: 439,
    width: 252,
    height: 20,
    left: 90,
  },
  mariaGabriela: {
    height: 23,
    width: 139,
    position: "absolute",
  },
  mariaGabrielaWrapper: {
    top: 383,
    left: 90,
  },
  ellipseIcon: {
    top: 385,
    left: 33,
    position: "absolute",
  },
  userIcon: {
    top: 387,
    left: 37,
    position: "absolute",
  },
  rotaColina1: {
    left: 86,
    top: 304,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.sunflowerMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  partidaNoPonto: {
    width: 272,
    height: 23,
  },
  luizaMorosini: {
    fontFamily: FontFamily.sunflowerBold,
    color: Color.colorDimgray_100,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  luizaMorosiniWrapper: {
    top: 277,
    left: 86,
    position: "absolute",
  },
  historicopassageiroChild2: {
    top: 277,
    height: 48,
    width: 49,
  },
  userIcon1: {
    top: 279,
    left: 33,
    position: "absolute",
  },
  rotaColina2: {
    top: 548,
    left: 86,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.sunflowerMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  partidaNoPonto1: {
    top: 579,
    left: 86,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.sunflowerMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_3xl,
    position: "absolute",
  },
  luisWrapper: {
    top: 522,
    left: 86,
    position: "absolute",
  },
  historicopassageiroChild3: {
    top: 526,
    height: 48,
    width: 49,
  },
  userIcon2: {
    top: 528,
    left: 33,
    position: "absolute",
  },
  textUsurio3: {
    marginTop: -228,
    marginLeft: -180,
    width: 89,
  },
  lineIcon: {
    maxWidth: "100%",
    height: 698,
    top: 231,
    overflow: "hidden",
  },
  historicopassageiroChild4: {
    top: 892,
    maxHeight: "100%",
    width: 37,
  },
  historicopassageiroChild5: {
    top: 262,
    left: 29,
    position: "absolute",
  },
  textUsurio4: {
    marginTop: 23,
    marginLeft: -182,
  },
  historicopassageiroChild6: {
    top: 513,
    left: 29,
    position: "absolute",
  },
  historicopassageiroChild7: {
    top: 372,
    left: 29,
    position: "absolute",
  },
  historicopassageiroChild8: {
    top: 478,
    left: 29,
    position: "absolute",
  },
  rotaColina3: {
    top: 677,
    left: 88,
    height: 21,
    width: 175,
  },
  partidaNoPonto2: {
    top: 708,
    width: 242,
    left: 88,
    height: 20,
  },
  aurlio: {
    fontFamily: FontFamily.sunflowerBold,
    color: Color.colorDimgray_100,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    left: 0,
    top: 0,
  },
  aurlioWrapper: {
    top: 649,
    left: 88,
  },
  historicopassageiroChild9: {
    top: 653,
    height: 48,
    width: 49,
  },
  userIcon3: {
    top: 655,
    height: 43,
    width: 41,
  },
  textUsurio5: {
    marginTop: 145,
    marginLeft: -178,
  },
  historicopassageiroChild10: {
    top: 644,
    width: 332,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  historicopassageiroChild11: {
    top: 613,
    width: 332,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  rotaColina4: {
    top: 786,
    width: 176,
    height: 20,
    left: 90,
  },
  partidaNoPonto3: {
    top: 815,
    width: 240,
    height: 20,
    left: 90,
  },
  lucas: {
    fontFamily: FontFamily.sunflowerBold,
    color: Color.colorDimgray_100,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    left: 0,
    top: 0,
  },
  lucasWrapper: {
    top: 756,
    left: 90,
  },
  historicopassageiroChild12: {
    top: 753,
    height: 48,
    width: 49,
  },
  userIcon4: {
    top: 755,
    left: 36,
    position: "absolute",
  },
  historicopassageiroChild13: {
    top: 743,
    left: 29,
    position: "absolute",
  },
  rotaColina5: {
    top: 898,
    left: 93,
    height: 20,
  },
  clebersonLeonardo: {
    fontFamily: FontFamily.sunflowerBold,
    color: Color.colorDimgray_100,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    left: 0,
    top: 0,
  },
  clebersonLeonardoWrapper: {
    top: 868,
    left: 93,
  },
  historicopassageiroChild14: {
    top: 861,
    height: 48,
    width: 49,
  },
  userIcon5: {
    top: 863,
    left: 39,
    position: "absolute",
  },
  historicopassageiroChild15: {
    top: 855,
    width: 332,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  luizaMorosini1: {
    fontFamily: FontFamily.sunflowerBold,
    color: Color.colorDimgray_100,
    textAlign: "left",
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    left: 0,
    top: 0,
  },
  luizaMorosiniContainer: {
    top: 277,
    left: 86,
  },
  rotaColina6: {
    left: 86,
    top: 304,
    height: 21,
  },
  partidaNoPonto4: {
    width: 243,
    height: 20,
  },
  historicopassageiro: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default HistoricoPassageiro;
