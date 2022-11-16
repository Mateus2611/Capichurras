import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  function goToMeusChurras() {
    navigation.navigate('MeusChurrascos');
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/logo.png')}
        style={styles.home_logo}
      />
      <View style={styles.botoes}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Calculadora')}
          style={styles.botao_style}>
          <Image
            source={require('../../../assets/calculadora.png')}
            style={styles.imagem_btns}
          />
          <Text style={styles.title_btns}>Calculadora</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Receitas')}
          style={styles.botao_style}>
          <Image
            source={require('../../../assets/faca.png')}
            style={styles.imagem_btns}
          />
          <Text style={styles.title_btns}>Receitas</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToMeusChurras} style={styles.botao_style}>
          <Image
            source={require('../../../assets/notas.png')}
            style={styles.imagem_btns}
          />
          <Text style={styles.title_btns}>Churrascos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#621708',
    height: '100%',
    width: '100%',
  },
  home_logo: {
    alignSelf: 'center',
    width: 380,
    height: 160,
    marginBottom: 50,
    marginTop: 35,
  },
  botoes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title_btns: {
    marginTop: 0,
    fontSize: 20,
    textAlign: 'center',
    color: '#F6AA1C',
  },
  imagem_btns: {
    marginTop: 10,
    alignSelf: 'center',
    height: 60,
    width: 60,
  },
  botao_style: {
    justifyContent: 'center',
    backgroundColor: '#611D12',
    borderRadius: 15,
    padding: 5,
    borderColor: '#F6AA1C',
    borderWidth: StyleSheet.hairlineWidth,
    width: 120,
    height: 120,
  },
});
