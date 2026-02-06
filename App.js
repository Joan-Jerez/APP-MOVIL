import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./screens/HomeScreen";
import SumScreen from "./screens/SumScreen";
import NumToWordsScreen from "./screens/NumToWordsScreen";
import TableScreen from "./screens/TableScreen";
import VideoScreen from "./screens/VideoScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Inicio">
        <Drawer.Screen name="Inicio" component={HomeScreen} />
        <Drawer.Screen name="Sumadora" component={SumScreen} />
        <Drawer.Screen name="Número a Letras" component={NumToWordsScreen} />
        <Drawer.Screen name="Tabla de Multiplicar" component={TableScreen} />
        <Drawer.Screen name="Experiencia Personal" component={VideoScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
