// Importamos librerias
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
// Importamos estapas de navegacion
import NavigatorHome from "./NavigatorHome";

// Descripción: Para le manejo de las navegaciones y cargas de los screens
// Verificado: SI
// Creado por: Guillermo Corredor
// Fecha de creación: 06/13/2024
// NOTA:

// componente
const AppNavigator = () => {
  // para render de screen iniciales
  const renderView = () => {
    return <NavigatorHome />;
  };
  // Return
  return <NavigationContainer>{renderView()}</NavigationContainer>;
};
// Export componente
export default AppNavigator;
