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
        placeholder="NOME" value={nome} onChangeText={setNome} iconSource={UserIcon}/>
      <CustomTextInputBorda
        placeholder="USER" value={user} onChangeText={setUser}iconSource={UserIcon}/>
      <CustomTextInputBorda
        placeholder="FONE" value={telefone} onChangeText={setTelefone} iconSource={Phone}/>
      <CustomTextInputBorda
        placeholder="CPF" value={cpf} onChangeText={setCpf} secureTextEntry iconSource={CPFIcon}/>
      <CustomTextInputBorda
        placeholder="EMAIL" value={confirmarSenha} onChangeText={setConfirmarSenha} secureTextEntry iconSource={EmailIcon}/>
      <CustomTextInputBorda
        placeholder="SENHA" value={senha} onChangeText={setSenha} secureTextEntry iconSource={PasswordIcon}/>
      <CustomTextInputBorda //Campo com borada Ondulada nas estremidades
        placeholder="CONFIRME SENHA" value={confirmarSenha} onChangeText={setConfirmarSenha} secureTextEntry iconSource={PasswordIcon}/>
      <View >
        <CustomButton fontSize={20} title="CADASTRAR" backgroundColor="#E57A4B" textColor="#FFFFFF" onPress={() => {
          <TouchableOpacity onPress={() => navigation.navigate('Registrar')}>
        </TouchableOpacity>
        }} />
      </View>
      </BackGround>
  );
};

export default CadastroScreen;