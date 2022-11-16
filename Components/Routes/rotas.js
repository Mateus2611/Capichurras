import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Calculadora from "../src/Calculadora/index";
import Home from "../src/Home/Home";
import Lista from "../src/LIsta/index"
import MeusChurrascos from "../src/Churrascos/MeusChurras";

const { Screen, Navigator } = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Lista">
        <Screen
          name="Home"
          component={Home}
          options={{
            title: null, 
            headerTrasparent: true, 
            headerShown: false,
          }}
        />
        <Screen
          name="MeusChurrascos"
          component={MeusChurrascos}
          options={{
            title: "Meus Churrascos",
            headerStyle: {
              backgroundColor: '#611D12',
            },
            headerTintColor: '#F6AA1C',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#F6AA1C',
              fontSize: 32,
            },
          }}
        />
        <Screen 
          name="Lista"
          component={Lista}
          options={{
            title: "Lista do Churrasco",
            headerStyle: {
              backgroundColor: '#611D12',
            },
            headerTintColor: '#F6AA1C',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#F6AA1C',
              fontSize: 32,
            },
          }}
        />
        <Screen 
          name="Calculadora"
          component={Calculadora}
          options={{
            title: "Calcular Churrasco",
            headerStyle: {
              backgroundColor: '#611D12',
            },
            headerTintColor: '#F6AA1C',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#F6AA1C',
              fontSize: 32,
            },
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}