import React, { useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, StyleSheet, Image, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {BackGround} from '../Comps/BackGround';
import { CustomTextInputBorda} from '../Comps/CustomInputBorda';
import { CustomButton } from '../Comps/CustomButton';


const EmailIcon = require("../icons/EmailIcon.png");
const PasswordIcon = require("../icons/PasswordIcon.png");
const UserIcon = require("../icons/UserIcon.png");
const CPFIcon = require("../icons/CPFIcon.png");
const Phone = require("../icons/Phone.png");

const CadastroScreen = () => {
  const [nome, setNome] = useState('');
  const [user, setUser] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const navigation = useNavigation();

  const handleCadastro = () => {
    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }
    if(nome !== '' && email !== '' && telefone !== '' && senha !== '' & confirmarSenha !== '' && cpf !== '' && user !== ''){
      const usuario = {
        nome: nome,
        user: user,
        cpf: cpf,
        telefone: telefone,
        email: email,
        senha: senha,
        confirmarSenha: confirmarSenha,
      };
    
      Axios.post("/user/cadastro", usuario)
        .then((response) => {
          alert("Usuário cadastrado com sucesso!");
          navigation.goBack();
        })
        .catch((error) => {
          alert("Erro ao cadastrar usuário!");
        });
        setNome('');
        setEmail('');
        setTelefone('');
        setSenha('');
        setConfirmarSenha('');
    }else {
      alert("Preencha todos os dados!");
    };

  };  

  return (
    <BackGround>
      <CustomTextInputBorda
        placeholder="NOME" value={nome} fontSize={22} onChangeText={setNome} iconSource={UserIcon}/>
      <CustomTextInputBorda
        placeholder="USER" value={user} fontSize={22} onChangeText={setUser}iconSource={UserIcon}/>
      <CustomTextInputBorda
        placeholder="FONE" value={telefone} fontSize={22} onChangeText={setTelefone} iconSource={Phone}/>
      <CustomTextInputBorda
        placeholder="CPF" value={cpf} fontSize={22} onChangeText={setCpf} secureTextEntry iconSource={CPFIcon}/>
      <CustomTextInputBorda
        placeholder="EMAIL" value={confirmarSenha} fontSize={22} onChangeText={setConfirmarSenha} secureTextEntry iconSource={EmailIcon}/>
      <CustomTextInputBorda
        placeholder="SENHA" value={senha} fontSize={22} onChangeText={setSenha} secureTextEntry iconSource={PasswordIcon}/>
      <CustomTextInputBorda //Campo com borada Ondulada nas estremidades
        placeholder="CONFIRME SENHA" value={confirmarSenha} fontSize={22} onChangeText={setConfirmarSenha} secureTextEntry iconSource={PasswordIcon}/>
      <View style={styles.buttonContainer}>
        <CustomButton fontSize={20} title="CADASTRAR" backgroundColor="#E57A4B" textColor="#FFFFFF" onPress={() => {
          <TouchableOpacity onPress={() => navigation.navigate('Registrar')}>
        </TouchableOpacity>
        }} />
      </View>
      </BackGround>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    marginBottom: 50,
    width:330,
    height:71,
  },
});

export default CadastroScreen;