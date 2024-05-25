import React, { useState } from 'react';
import { View, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BackGround } from '../Comps/BackGround';
import { CustomTextInputBorda } from '../Comps/CustomInputBorda';
import { CustomButton } from '../Comps/CustomButton';
import Axios from '../Comps/Axios';

const EmailIcon = require("../icons/EmailIcon.png");
const PasswordIcon = require("../icons/PasswordIcon.png");
const UserIcon = require("../icons/UserIcon.png");
const CPFIcon = require("../icons/CPFIcon.png");
const Phone = require("../icons/Phone.png");
const AvatarIcon = require("../icons/IconAvatar.png");

const CadastroScreen = () => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const navigation = useNavigation();

  const handleCadastro = () => {
    console.log(nome)
    console.log(email)
    console.log(telefone)
    console.log(senha)
    console.log(confirmarSenha)
    console.log(cpf)
    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }
    if(nome !== "" && email !== "" && telefone !== "" && senha !== "" && confirmarSenha !== "" && cpf !== ""){
      const usuario = {
        "nome": nome,
        "CPF": cpf,
        "telefone": telefone,
        "email": email,
        "senha": senha,
        "confirmarSenha": confirmarSenha,
      };
      console.log(usuario)
    
      Axios.post("/user/cadastro", usuario)
        .then((response) => {
          alert("Usuário cadastrado com sucesso!");
          navigation.goBack();
        })
        .catch((error) => {
          console.log(error)
          alert("Erro ao cadastrar usuário!");
        });
        setNome("");
        setCpf("");
        setTelefone("");
        setEmail("");
        setSenha("");
        setConfirmarSenha("");
    } else {
      alert("Preencha todos os dados!");
    }
  };  

  return (
    <BackGround>
      <View style={styles.formContainer}>
        <Image source={AvatarIcon} style={styles.avatar} />
        <CustomTextInputBorda
          placeholder="NOME" 
          fontSize={22} 
          iconSource={UserIcon}
          onChangeText={setNome} 
          value={nome} 
        />
        <CustomTextInputBorda
          placeholder="CPF" 
          value={cpf} 
          fontSize={22} 
          onChangeText={setCpf} 
          iconSource={CPFIcon} 
        />
        <CustomTextInputBorda
          placeholder="FONE" 
          value={telefone} 
          fontSize={22} 
          onChangeText={setTelefone} 
          iconSource={Phone} 
        />
        <CustomTextInputBorda
          placeholder="EMAIL" 
          value={email} 
          fontSize={22} 
          onChangeText={setEmail} 
          iconSource={EmailIcon} 
        />
        <CustomTextInputBorda
          placeholder="SENHA" 
          value={senha} 
          fontSize={22} 
          onChangeText={setSenha} 
          secureTextEntry 
          iconSource={PasswordIcon} 
        />
        <CustomTextInputBorda
          placeholder="CONFIRME SENHA" 
          value={confirmarSenha} 
          fontSize={22} 
          onChangeText={setConfirmarSenha} 
          secureTextEntry 
          iconSource={PasswordIcon} 
        />
        <View style={styles.buttonContainer}>
          <CustomButton 
            fontSize={20} 
            title="CADASTRAR" 
            backgroundColor="#E57A4B" 
            textColor="#FFFFFF" 
            onPress={handleCadastro} 
          />
        </View>
      </View>
    </BackGround>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 50, // Ajuste esta margem para mover os campos mais para baixo
    alignItems: 'center', // Centralizar o avatar
  },
  avatar: {
    width: 100, // Largura do avatar
    height: 100, // Altura do avatar
    marginBottom: 20, // Espaçamento abaixo do avatar
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 50,
    width: 330,
    height: 71,
  },
});

export default CadastroScreen;
