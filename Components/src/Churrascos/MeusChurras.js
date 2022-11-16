import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import AppItem from './AppItem';

export default function MeusChurrascos({ navigation }) {
  const [items, setItems] = useState([
    {
      id: 1,
      tituloChurras: 'Aniversário',
      num_pessoas: 60,
      totalEstimado: 5000,
    },
    {
      id: 2,
      tituloChurras: 'Ano Novo',
      num_pessoas: 45,
      totalEstimado: 3000,
    },
  ]);

  function goToMaps() {
    navigation.navigate('Maps');
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.itemsContainer}>
        {items.map((item) => {
          return (
            <AppItem
              key={item.id}
              id={item.id}
              titulo={item.tituloChurras}
              pessoas={item.num_pessoas}
              valor={item.totalEstimado}
              local={goToMaps}
            />
          );
        })}
        <View style={styles.btn_add_container}>
          <TouchableOpacity style={styles.btn_add}>
            <Text style={styles.btn_add_content}>Novo Churras</Text>
            <Text style={styles.btn_add_content}>+</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#611D12',
    alignItems: 'center',
  },
  scrollContainer: {
    flex: 1,
    width: '90%',
  },
  itemsContainer: {
    flex: 1,
    marginTop: 10,
    padding: 20,
    borderRadius: 20,
  },
  btn_add_container: {
    alignItems: 'center',
    margin: 15,
  },
  btn_add: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#611D12',
    borderColor: '#F6AA1C',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 15,
    width: 320,
    height: 50,
  },
  btn_add_content: {
    color: '#F6AA1C',
    fontWeight: 'bold',
    fontSize: 34,
    marginTop: -5
  }
});
