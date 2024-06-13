// Importamos librerias
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./routes";
// Screens
import HomeScreen from "@screens/home";
import TaskScreen from "@screens/task";
import ListScreen from "@screens/list";

// Descripción: Rutas
// Verificado: SI
// Creado por: Guillermo Corredor
// Fecha de creación: 06/13/2024
// NOTA:

// Constantes
const Stack = createNativeStackNavigator<RootStackParamList>();
// componente
const NavigatorHome = () => {
  // Return
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{showBack: 0, goHome: false}}
      />
      <Stack.Screen
        name="Task"
        component={TaskScreen}
        initialParams={{showBack: 1, goHome: true}}
      />
      <Stack.Screen
        name="List"
        component={ListScreen}
        initialParams={{showBack: 1, goHome: true}}
      />
    </Stack.Navigator>
  );
};
// Export componente
export default NavigatorHome;
