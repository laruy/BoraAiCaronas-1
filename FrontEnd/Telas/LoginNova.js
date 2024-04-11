import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Platform  } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { CustomButton } from '../Comps/CustomButton';
import { CustomTextInput} from '../Comps/CustomInput';
import {BackGround} from '../Comps/BackGround';
import {Logo} from '../Comps/Logo'; // Importando o componente LogoImage

const EmailIcon = require("../icons/UserIcon.png");
const PasswordIcon = require("../icons/PasswordIcon.png");

const LoginNova = () => {
  const navigation = useNavigation();
  
  return (
    <BackGround>
      <View style={styles.container}>
        <Logo source={require("../icons/Logo.png")} width={413} height={360} marginBottom={20} />
        <CustomTextInput placeholder='EMAIL-USUÁRIO' textColor='#BCB6B6' fontSize={20} iconSource={EmailIcon} />
        <CustomTextInput placeholder='SENHA' textColor='#BCB6B6' fontSize={20} iconSource={PasswordIcon} />
        <View style={styles.buttonContainer}>
          <CustomButton fontSize={20} title="Entrar" backgroundColor="#E57A4B" textColor="#FFFFFF" onPress={() => {
            // Lógica para o botão de login aqui
          }} />
          <TouchableOpacity onPress={() => navigation.navigate('Registrar')}>
            <Text style={styles.registerText}>REGISTRAR-SE</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.footer}>Todos os direitos reservados</Text>
      </View>
    </BackGround>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 50,
    width:330,
    height:71,
  },
  registerText: {
    color: 'white',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20,
    alignSelf:'center',
    color:'#E57A4B'
  },
  footer: {
    color: "white",
    position: "absolute",
    bottom: 0,
    marginBottom: 10,
    fontSize: 12,
    fontWeight: "bold"
  },
});

export default LoginNova;
