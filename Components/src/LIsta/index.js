import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  
} from 'react-native';

export default function Lista() {
  return (
    <ScrollView style={styles.back}>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Lista</Text>

        <Text style={styles.textGrande}>Consumo Alimentos</Text>
        <View style={styles.values}>
          <Text style={styles.textPequeno}>Homens:</Text>
          <Text style={styles.textPequeno}>Mulheres:</Text>
          <Text style={styles.textPequeno}>Crianças:</Text>
          <Text style={styles.textPequeno}>Total de Alimentos:</Text>
          <Text style={styles.textPequeno}>Valor total de Alimentos:</Text>
        </View>

        <Text style={styles.textGrande}>Consumo Bebidas</Text>
        <View style={styles.values}>
          <Text style={styles.textPequeno}>Homens:</Text>
          <Text style={styles.textPequeno}>Mulheres:</Text>
          <Text style={styles.textPequeno}>Crianças:</Text>
          <Text style={styles.textPequeno}>Total de Bebidas:</Text>
          <Text style={styles.textPequeno}>Valor total de bebidas:</Text>
        </View>

        <Text style={styles.textGrande}>Utilitarios</Text>
        <View style={styles.values}>
          <Text style={styles.textPequeno}>Pratos descartaveis:</Text>
          <Text style={styles.textPequeno}>Copos descartaveis:</Text>
          <Text style={styles.textPequeno}>Talheres descartaveis:</Text>
          <Text style={styles.textPequeno}>Guardanapos descartaveis:</Text>
          <Text style={styles.textPequeno}>Sal Grosso:</Text>
          <Text style={styles.textPequeno}>Gelo:</Text>
          <Text style={styles.textPequeno}>Carvão:</Text>
          <Text style={styles.textPequeno}>Valor total dos utilitarios:</Text>
        </View>

        <Text style={styles.textGrande}>Valor Total:</Text>
        <Text style={styles.textGrande}>Rateio por pessoa:</Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button_editar}>
            <Image
              source={require('../../../assets/editar.png')}
              style={styles.imagem_editar}
            />
          </TouchableOpacity>
        </View>
      </View>
      
      <Text style={styles.footer}>Os valores são meramente sugestivos</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#611D12',
    height: '100%',
    width: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#F6AA1C',
    marginTop: 20,
    marginBottom: 10,
    width: 350,
    height: 650,
    borderRadius: 20,
    alignSelf: 'center',
  },
  imagem_editar: {
    height: 35,
    width: 35,
  },
  button_editar: {
    position: 'relative',
    left: 140,
    margin: 10
  },
  buttonsContainer: {
    alignSelf: 'center',
  },
  textTitle: {
    alignSelf: 'center',
    fontSize: 32,
    borderBottomWidth: 2,
    marginBottom: 5,
    marginTop: 3,
  },
  textGrande: {
    fontSize: 20,
    marginLeft: 30,
  },
  textPequeno: {
    fontSize: 16,
    marginLeft: 10,
  },
  footer: {
    fontSize: 21,
    
    color: '#F6AA1C',
    alignSelf: 'center',
     
  },
  values: {
    borderLeftWidth: 2,
    marginHorizontal: 40,
  },
});
