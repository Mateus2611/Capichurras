import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';

export default function AppItem(props) {

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{props.titulo}</Text>
      <Text style={styles.textItem}>
        Quantidade de pessoas: {props.pessoas}
      </Text>
      <Text style={styles.textItem}>Valor estimado:{props.valor}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={props.local} style={styles.button}>
          <Text style={styles.btnTitle}>Ver Local</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnTitle}>Ver Lista</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btn_del_container}>
        <TouchableOpacity>
          <Icon name="trash" color="black" size={30} />
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
    backgroundColor: '#F6AA1C',
    marginTop: 20,
    marginBottom: 10,
    width: 330,
    height: 210,
    borderRadius: 20,
    alignSelf: 'center',
  },
  buttonsContainer: {
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#611D12',
    alignItems: 'center',
    borderRadius: 15,
    margin: 5,
    width: 180,
    height: 30,
  },
  btnTitle: {
    color: '#fff',
    fontSize: 16,
  },
  textTitle: {
    alignSelf: 'center',
    fontSize: 32,
    borderBottomWidth: 2,
    height: 45
  },
  textItem: {
    fontSize: 14,
    marginLeft: 50,
  },
  btn_del_container: {
    position: 'absolute',
    width: 30,
    height: 30,
    left: 285,
    top: 170
  },
});
