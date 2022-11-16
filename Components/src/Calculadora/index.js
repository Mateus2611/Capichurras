import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Checkbox } from 'react-native-paper';

export default function Calculadora() {
  const [checked, setChecked] = React.useState(false);
  const [text1, onChangeText1] = React.useState('');
  const [text2, onChangeText2] = React.useState('');
  const [text3, onChangeText3] = React.useState('');
  const [text4, onChangeText4] = React.useState('');
  const [number1, onChangeNumber1] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);
  const [number3, onChangeNumber3] = React.useState(null);
  return (
    <ScrollView style={styles.back}>
      <View style={styles.input_container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText1}
          value={text1}
          placeholder="Nome do Churrasco"
          placeholderTextColor="#F6AA1C"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText2}
          value={text2}
          placeholder="Responsável pelo evento"
          placeholderTextColor="#F6AA1C"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText3}
          value={text3}
          placeholder="Contato do responsável"
          placeholderTextColor="#F6AA1C"
        />
      </View>

      <View style={styles.input_pessoas_container}>
        <TextInput
          style={styles.input_pessoas}
          onChangeText={onChangeNumber1}
          value={number1}
          placeholder="Homens:"
          placeholderTextColor="#FFF"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input_pessoas}
          onChangeText={onChangeNumber2}
          value={number2}
          placeholder="Mulheres:"
          placeholderTextColor="#FFF"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input_pessoas}
          onChangeText={onChangeNumber3}
          value={number3}
          placeholder="Crianças:"
          placeholderTextColor="#FFF"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.container1}>
        <Text style={styles.titulo_checkbox}>Carnes</Text>
        <Image
          source={require('../../../assets/mula.png')}
          style={styles.imagem_checkbox}
        />
        <View style={styles.checkbox_container1}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            style={styles.checkbox}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={styles.text_checkbox}>Picanha</Text>
          
          <Image
            source={require('../../../assets/porco.png')}
            style={styles.imagem_checkbox}
          />
          <Image
            source={require('../../../assets/galinha.png')}
            style={styles.imagem_checkbox}
          />
        </View>
      </View>
    
      <View style={styles.container2}>
        <Text style={styles.titulo_checkbox}>Opções veganas</Text>
        <Image
          source={require('../../../assets/vegan.png')}
          style={styles.imagem_checkbox}
        />
      </View>

      <View style={styles.container3}>
        <Text style={styles.titulo_checkbox}>Bebidas</Text>
        <Image
          source={require('../../../assets/beer.png')}
          style={styles.imagem_checkbox}
        />
      </View>

      <View style={styles.container4}>
        <Text style={styles.titulo_checkbox}>Adicionais</Text>
        <Image
          source={require('../../../assets/restaurant.png')}
          style={styles.imagem_checkbox}
        />
      </View>

      <View style={styles.container5}>
        <Text style={styles.titulo_checkbox}>Local</Text>
        <TextInput
          style={styles.input_mapas}
          onChangeText={onChangeText4}
          value={text4}
          placeholder="Nome do Churrasco"
          placeholderTextColor="#000"
        />
        <TouchableOpacity style={styles.botao_style}>
          <Text style={styles.titulo_botao}>Confirmar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.botao_container}>
        <TouchableOpacity style={styles.botao_stylec}>
          <Text style={styles.titulo_botaoc}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: '#611D12',
    height: '100%',
    width: '100%',
  },
  input: {
    marginTop: 20,
    display: 'flex',
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#F6AA1C',
    backgroundColor: '#811B0C',
    height: 50,
    width: 250,
  },
  input_pessoas: {
    marginTop: 15,
    display: 'flex',
    marginLeft: 15,
    alignSelf: 'center',
    borderColor: '#F6AA1C',
    height: 25,
    width: 250,
    borderBottomWidth: 2,
    borderBottomColor: '#BC3908',
  },
  container1: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#F6AA1C',
    marginTop: 25,
    marginBottom: 10,
    width: 350,
    height: 250,
    borderRadius: 20,
    alignSelf: 'center',
  },
  titulo_checkbox: {
    alignSelf: 'center',
    fontSize: 25,
    borderBottomWidth: 2,
    padding: 0,
    margin: 0,
  },
  imagem_checkbox: {
    height: 40,
    width: 40,
    marginLeft: 15,
  },
  container2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#F6AA1C',
    marginTop: 25,
    marginBottom: 10,
    width: 350,
    height: 150,
    borderRadius: 20,
    alignSelf: 'center',
  },
  container3: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#F6AA1C',
    marginTop: 25,
    marginBottom: 10,
    width: 350,
    height: 200,
    borderRadius: 20,
    alignSelf: 'center',
  },
  container4: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#F6AA1C',
    marginTop: 25,
    marginBottom: 10,
    width: 350,
    height: 250,
    borderRadius: 20,
    alignSelf: 'center',
  },
  container5: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#F6AA1C',
    marginTop: 25,
    marginBottom: 10,
    width: 350,
    height: 200,
    borderRadius: 20,
    alignSelf: 'center',
  },
  input_mapas: {
    display: 'flex',
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#000',
    backgroundColor: '#F6AA1C',
    height: 50,
    width: 250,
  },
  botao_style: {
    display: 'flex',
    textAlign: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#000',
    backgroundColor: '#811B0C',
    height: 50,
    width: 250,
  },
  titulo_botao: {
    alignSelf: 'center',
    marginTop: 15,
    color: '#fff',
  },
  botao_stylec: {
    display: 'flex',
    textAlign: 'center',
    marginBottom: 30,
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#F6AA1C',
    backgroundColor: '#811B0C',
    marginTop: 35,
    height: 50,
    width: 250,
  },
  titulo_botaoc: {
    alignSelf: 'center',
    marginTop: 15,
    color: '#F6AA1C',
  },
  checkbox_container1: {
    flexDirection: "row",
  },
  text_checkbox: {
    margin: 8,
  },
});
   