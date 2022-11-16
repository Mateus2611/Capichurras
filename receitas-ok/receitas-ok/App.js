import React from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet } from 'react-native';
import Card from './Card';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
        <Card /> 
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#621708',
  },



});

export default App;