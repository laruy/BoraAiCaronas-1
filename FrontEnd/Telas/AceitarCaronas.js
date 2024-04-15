import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import SearchInput from '../Comps/searchInput';
import Caronas from '../Comps/Caronas';

const AceitarCaronas = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.searchContainer}>
          <View style={styles.inputContainer}>
            <SearchInput placeholder="BUSCAR" />
          </View>
        </View>
        <Text style={styles.solicitacoesText}>SOLICITAÇÕES</Text>
        <Caronas nomeUsuario="Nome do Usuário 1" localParada="Local de Parada 1" textoBotao="Aceitar"  />
        <Caronas nomeUsuario="Nome do Usuário 2" localParada="Local de Parada 2" textoBotao="Aceitar"  />
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <TouchableOpacity style={styles.botaoCancelar}>
            <Text style={styles.textoBotao}>Cancelar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerRight}>
          <TouchableOpacity style={styles.botaoFinalizar}>
            <Text style={styles.textoBotao}>Finalizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E57A4B',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  searchContainer: {
    marginBottom: 20,
  },
  solicitacoesText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF',
    textAlign: 'center'
  },
  solicitacaoContainer: {
    marginBottom: 20,
  },
  solicitacao: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
  },
  parada: {
    fontSize: 16,
  },
  botaoAceitar: {
    backgroundColor: '#28873D',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  textoBotao: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 22
  },
  separator: {
    borderBottomColor: '#FFF',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  footerLeft: {
    flex: 1,
    marginRight: 10,
  },
  footerRight: {
    flex: 1,
    marginLeft: 10,
  },
  botaoCancelar: {
    backgroundColor: '#A34147',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  botaoFinalizar: {
    backgroundColor: '#28873D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
});

export default AceitarCaronas;
