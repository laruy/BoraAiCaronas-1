// SolicitacaoContainer.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const SolicitacaoContainer = ({ nomeUsuario, localParada, textoBotao }) => {
  return (
    <View style={styles.solicitacaoContainer}>
      <View style={styles.solicitacao}>
        <Image source={require('../icons/Perfil.png')} style={styles.profileImage} />
        <View style={styles.solicitacaoInfo}>
          <Text style={styles.nome}>{nomeUsuario}</Text>
          <Text style={styles.parada}>{localParada}</Text>
        </View>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>{textoBotao}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.separator}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  solicitacaoContainer: {
    marginBottom: 20,
  },
  solicitacao: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    fontFamily: 'syncopate' // tem que importar essa fonte mas não sei fazer ainda
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  solicitacaoInfo: {
    flex: 1,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D9D9D9'
  },
  parada: {
    fontSize: 16,
    color: '#D9D9D9'
  },
  botao: {
    backgroundColor: '#28873D',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  textoBotao: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
  },
  separator: {
    borderBottomColor: '#FFF',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});

export default SolicitacaoContainer;
