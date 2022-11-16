import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import axios from 'axios';
import MapView, { Marker } from 'react-native-maps';
export default function Maps({ navigation }) {
  const [endereco, setEndereco] = useState();
  const [getLatitude, setLatitude] = useState();
  const [getLongitude, setLongitude] = useState();

  useEffect(() => {
    const getMap = async () => {
      const { data } = await axios.get(
        'https://geocode.search.hereapi.com/v1/geocode?q=Av.Joaquim_Napoleao_Machado&apiKey=R4g15M8O7fhCCqh6uT_Xofl0wBd3KvDIS26_jKEPP0Q'
      );

      setEndereco(data.items[0].title);
      setLatitude(data.items[0].position.lat);
      setLongitude(data.items[0].position.lng);
    };
    getMap();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.title_card}>
          <Text style={styles.textTitle_card}>Localização</Text>
          <Image
            style={styles.imagem}
            source={require('../../../assets/location.png')}
          />
        </View>
        <Text style={styles.localization}>{endereco}</Text>
        <MapView
          region={{
            latitude: getLatitude,
            longitude: getLongitude,
          }}
          minZoomLevel={10}
          style={styles.map} />
        <TouchableOpacity style={styles.btn_edit}>
          <Icon name="edit" color="#611D12" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <View style={styles.title_card}>
          <Text style={styles.textTitle_card}>Mercado</Text>
          <Image
            style={styles.imagem}
            source={require('../../../assets/grocery.png')}
          />
        </View>
        <Text style={styles.localization}>Rua Xablau, 06</Text>
        <Image style={styles.img_localization} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#611D12',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: '#F6AA1C',
    margin: 20,
    width: 400,
    height: 400,
    borderRadius: 20,
    alignItems: 'center',
  },
  title_card: {
    display: 'flex',
    flexDirection: 'row',
    color: '#220901',
    borderBottomWidth: 2,
    borderBottomColor: '#611D12',
    marginTop: 15,
  },
  textTitle_card: {
    alignSelf: 'center',
    fontSize: 24,
    marginRight: 5,
  },
  imagem: {
    marginTop: 10,
    alignSelf: 'center',
    height: 30,
    width: 30,
  },
  localization: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
  },
  img_localization: {
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 20,
    margin: 10,
    height: 200,
    width: 300,
  },
  btn_edit: {
    position: 'relative',
    left: 170,
    marginBottom: 15,
  },
  map: {
    width: 300,
    height: 200,
  },
});
