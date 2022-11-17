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
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);
  const [checked5, setChecked5] = React.useState(false);
  const [checked6, setChecked6] = React.useState(false);
  const [checked7, setChecked7] = React.useState(false);
  const [checked8, setChecked8] = React.useState(false);
  const [checked9, setChecked9] = React.useState(false);
  const [checked10, setChecked10] = React.useState(false);
  const [checked11, setChecked11] = React.useState(false);
  const [checked12, setChecked12] = React.useState(false);
  const [checked13, setChecked13] = React.useState(false);
  const [checked14, setChecked14] = React.useState(false);
  const [checked15, setChecked15] = React.useState(false);
  const [checked16, setChecked16] = React.useState(false);
  const [checked17, setChecked17] = React.useState(false);
  const [checked18, setChecked18] = React.useState(false);
  const [checked19, setChecked19] = React.useState(false);
  const [checked20, setChecked20] = React.useState(false);
  const [checked21, setChecked21] = React.useState(false);
  const [checked22, setChecked22] = React.useState(false);
  const [checked23, setChecked23] = React.useState(false);
  const [checked24, setChecked24] = React.useState(false);
  const [checked25, setChecked25] = React.useState(false);
  const [checked26, setChecked26] = React.useState(false);
  const [checked27, setChecked27] = React.useState(false);
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
        <View>
          <Text style={styles.titulo_checkbox}>Carnes</Text>
          <Image
            source={require('../../../assets/mula.png')}
            style={styles.imagem}
          />
        </View>
        <View style={styles.checkbox_container1}>
          <View style={styles.checkbox_style}>
            <Checkbox
              status={checked1 ? 'checked' : 'unchecked'}
              style={styles.checkbox}
              onPress={() => {
                setChecked1(!checked1);
              }}
            />
            <Text style={styles.text_checkbox}>Picanha</Text>
          </View>
          <View style={styles.checkbox_style}>
            <Checkbox
              status={checked2 ? 'checked' : 'unchecked'}
              style={styles.checkbox}
              onPress={() => {
                setChecked2(!checked2);
              }}
            />
            <Text style={styles.text_checkbox}>Fraldinha</Text>
          </View>
          <View style={styles.checkbox_style}>
            <Checkbox
              status={checked3 ? 'checked' : 'unchecked'}
              style={styles.checkbox}
              onPress={() => {
                setChecked3(!checked3);
              }}
            />
            <Text style={styles.text_checkbox}>Alcatra</Text>
          </View>
        </View>

        <View style={styles.checkbox_container2}>
          <View style={styles.checkbox_style}>
            <Checkbox
              status={checked4 ? 'checked' : 'unchecked'}
              style={styles.checkbox}
              onPress={() => {
                setChecked4(!checked4);
              }}
            />
            <Text style={styles.text_checkbox}>Lombo</Text>
          </View>
          <View style={styles.checkbox_style}>
            <Checkbox
              status={checked5 ? 'checked' : 'unchecked'}
              style={styles.checkbox}
              onPress={() => {
                setChecked5(!checked5);
              }}
            />
            <Text style={styles.text_checkbox}>Costelinha</Text>
          </View>
          <View style={styles.checkbox_style}>
            <Checkbox
              status={checked6 ? 'checked' : 'unchecked'}
              style={styles.checkbox}
              onPress={() => {
                setChecked6(!checked6);
              }}
            />
            <Text style={styles.text_checkbox}>Linguiça</Text>
          </View>
        </View>

        <View style={styles.checkbox_container3}>
          <View style={styles.checkbox_style}>
            <Checkbox
              status={checked7 ? 'checked' : 'unchecked'}
              style={styles.checkbox}
              onPress={() => {
                setChecked7(!checked7);
              }}
            />
            <Text style={styles.text_checkbox}>Asa</Text>
          </View>
          <View style={styles.checkbox_style}>
            <Checkbox
              status={checked8 ? 'checked' : 'unchecked'}
              style={styles.checkbox}
              onPress={() => {
                setChecked8(!checked8);
              }}
            />
            <Text style={styles.text_checkbox}>Coxa</Text>
          </View>
          <View style={styles.checkbox_style}>
            <Checkbox
              status={checked9 ? 'checked' : 'unchecked'}
              style={styles.checkbox}
              onPress={() => {
                setChecked9(!checked9);
              }}
            />
            <Text style={styles.text_checkbox}>Coração</Text>
          </View>
        </View>
      </View>

      <View style={styles.container2}>
        <View>
          <Text style={styles.titulo_checkbox2}>Opções veganas</Text>
          <Image
            source={require('../../../assets/vegan.png')}
            style={styles.imagem2}
          />
        </View>
        <View style={styles.checkbox_container11}>
          <View style={styles.checkbox_style}>
            <Checkbox
              status={checked10 ? 'checked' : 'unchecked'}
              style={styles.checkbox}
              onPress={() => {
                setChecked10(!checked10);
              }}
            />
            <Text style={styles.text_checkbox}>Hamburguer Vegano</Text>
          </View>
          <View style={styles.checkbox_style}>
            <Checkbox
              status={checked11 ? 'checked' : 'unchecked'}
              style={styles.checkbox}
              onPress={() => {
                setChecked11(!checked11);
              }}
            />
            <Text style={styles.text_checkbox}>Steak Vegano</Text>
          </View>
        </View>
        <View style={styles.checkbox_container11}>
          <View style={styles.checkbox_style}>
            <Checkbox
              status={checked12 ? 'checked' : 'unchecked'}
              style={styles.checkbox}
              onPress={() => {
                setChecked12(!checked12);
              }}
            />
            <Text style={styles.text_checkbox}>Linguiça Vegana</Text>
          </View>
        </View>
      </View>

      <View style={styles.container3}>
        <View>
          <Text style={styles.titulo_checkbox3}>Bebidas</Text>
          <Image
            source={require('../../../assets/beer.png')}
            style={styles.imagem3}
          />
        </View>
        <View style={styles.checkbox_container11}>
          <View style={styles.checkbox_style}>
            <Checkbox
              status={checked13 ? 'checked' : 'unchecked'}
              style={styles.checkbox}
              onPress={() => {
                setChecked13(!checked13);
              }}
            />
            <Text style={styles.text_checkbox}>Refrigerante</Text>
          </View>
          <View style={styles.checkbox_style}>
            <Checkbox
              status={checked14 ? 'checked' : 'unchecked'}
              style={styles.checkbox}
              onPress={() => {
                setChecked14(!checked14);
              }}
            />
            <Text style={styles.text_checkbox}>Suco</Text>
          </View>
          <View style={styles.checkbox_style}>
            <Checkbox
              status={checked15 ? 'checked' : 'unchecked'}
              style={styles.checkbox}
              onPress={() => {
                setChecked15(!checked15);
              }}
            />
            <Text style={styles.text_checkbox}>Bebida alcoolica</Text>
          </View>
        </View>
        <View style={styles.checkbox_container11}>
          <View style={styles.checkbox_style}>
            <Checkbox
              status={checked16 ? 'checked' : 'unchecked'}
              style={styles.checkbox}
              onPress={() => {
                setChecked16(!checked16);
              }}
            />
            <Text style={styles.text_checkbox}>Água</Text>
          </View>
          <View style={styles.checkbox_style}>
            <Checkbox
              status={checked17 ? 'checked' : 'unchecked'}
              style={styles.checkbox}
              onPress={() => {
                setChecked17(!checked17);
              }}
            />
            <Text style={styles.text_checkbox}>Cerveja</Text>
          </View>
          <View style={styles.checkbox_style}>
            <Checkbox
              status={checked18 ? 'checked' : 'unchecked'}
              style={styles.checkbox}
              onPress={() => {
                setChecked18(!checked18);
              }}
            />
            <Text style={styles.text_checkbox}>Drinks</Text>
          </View>
        </View>
      </View>

      <View style={styles.container4}>
        <View>
          <Text style={styles.titulo_checkbox4}>Adicionais</Text>
          <Image
            source={require('../../../assets/basket.png')}
            style={styles.imagem4}
          />
        </View>
        <View style={styles.checkbox_container1}>
          <View style={styles.checkbox_style}>
            <Checkbox
              status={checked19 ? 'checked' : 'unchecked'}
              style={styles.checkbox}
              onPress={() => {
                setChecked19(!checked19);
              }}
            />
            <Text style={styles.text_checkbox}>Arroz</Text>
          </View>
          <View style={styles.checkbox_style}>
            <Checkbox
              status={checked20 ? 'checked' : 'unchecked'}
              style={styles.checkbox}
              onPress={() => {
                setChecked20(!checked20);
              }}
            />
            <Text style={styles.text_checkbox}>Feijão</Text>
          </View>
          <View style={styles.checkbox_style}>
            <Checkbox
              status={checked21 ? 'checked' : 'unchecked'}
              style={styles.checkbox}
              onPress={() => {
                setChecked21(!checked21);
              }}
            />
            <Text style={styles.text_checkbox}>Farofa</Text>
          </View>
        </View>
        <View style={styles.checkbox_container2}>
          <View style={styles.checkbox_style}>
            <Checkbox
              status={checked22 ? 'checked' : 'unchecked'}
              style={styles.checkbox}
              onPress={() => {
                setChecked22(!checked22);
              }}
            />
            <Text style={styles.text_checkbox}>Milho</Text>
          </View>
          <View style={styles.checkbox_style}>
            <Checkbox
              status={checked23 ? 'checked' : 'unchecked'}
              style={styles.checkbox}
              onPress={() => {
                setChecked23(!checked23);
              }}
            />
            <Text style={styles.text_checkbox}>Queijo Coalho</Text>
          </View>
          <View style={styles.checkbox_style}>
            <Checkbox
              status={checked24 ? 'checked' : 'unchecked'}
              style={styles.checkbox}
              onPress={() => {
                setChecked24(!checked24);
              }}
            />
            <Text style={styles.text_checkbox}>Pão de alho</Text>
          </View>
        </View>
        <View style={styles.checkbox_container3}>
          <View style={styles.checkbox_style}>
            <Checkbox
              status={checked25 ? 'checked' : 'unchecked'}
              style={styles.checkbox}
              onPress={() => {
                setChecked25(!checked25);
              }}
            />
            <Text style={styles.text_checkbox}>Vinagrete</Text>
          </View>
          <View style={styles.checkbox_style}>
            <Checkbox
              status={checked26 ? 'checked' : 'unchecked'}
              style={styles.checkbox}
              onPress={() => {
                setChecked26(!checked26);
              }}
            />
            <Text style={styles.text_checkbox}>Maionese</Text>
          </View>
          <View style={styles.checkbox_style}>
            <Checkbox
              status={checked27 ? 'checked' : 'unchecked'}
              style={styles.checkbox}
              onPress={() => {
                setChecked27(!checked27);
              }}
            />
            <Text style={styles.text_checkbox}>Frutas</Text>
          </View>
        </View>
      </View>

      <View style={styles.container5}>
        <Text style={styles.titulo_checkbox5}>Local</Text>
        <TextInput
          style={styles.input_mapas}
          onChangeText={onChangeText4}
          value={text4}
          placeholder="Nome do Churrasco"
          placeholderTextColor="#000"
        />
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
    marginTop: 35,
    marginRight: 15,
  },
  titulo_checkbox2: {
    alignSelf: 'center',
    fontSize: 25,
    borderBottomWidth: 2,
    padding: 0,
    marginTop: 15,
  },
  titulo_checkbox3: {
    alignSelf: 'center',
    fontSize: 25,
    borderBottomWidth: 2,
    padding: 0,
    marginTop: 0,
  },
  titulo_checkbox4: {
    alignSelf: 'center',
    fontSize: 25,
    borderBottomWidth: 2,
    padding: 0,
    marginTop: 35,
  },
  titulo_checkbox5: {
    alignSelf: 'center',
    fontSize: 25,
    borderBottomWidth: 2,
    padding: 0,
    marginTop: 0,
    bottom: 15,
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
    bottom: 30,
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    top: 47,
  },
  checkbox_container11: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 10,
  },
  checkbox_container2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    left: 115,
    bottom: 18,
  },
  checkbox_container3: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    left: 245,
    bottom: 82,
  },
  text_checkbox: {
    margin: 8,
    marginLeft: 0,
  },
  checkbox_style: {
    display: 'flex',
    flexDirection: 'row',
  },
  imagem: {
    left: 210,
    bottom: 30,
    height: 30,
    width: 30,
  },
  imagem2: {
    left: 270,
    bottom: 30,
    height: 30,
    width: 30,
  },
  imagem3: {
    left: 220,
    bottom: 30,
    height: 30,
    width: 30,
  },
  imagem4: {
    left: 235,
    bottom: 30,
    height: 30,
    width: 30,
  },
});
