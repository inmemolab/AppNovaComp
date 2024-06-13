// Importamos librerias
import React from "react";
import {StatusBar} from "react-native";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {Provider} from "react-redux";
import {persistor, store} from "./store";
import { PersistGate } from 'redux-persist/integration/react';
// Importamos navegación
import AppNavigator from "@navigation/AppNavigator";

// Descripción: Para inicio del app y configuraciones, se configura redux y persistencia para la prueba de NovaComp
// Verificado: SI
// Creado por: Guillermo Corredor
// Fecha de creación: 06/13/2024
// NOTA:

const App = () => {
  // Return base app
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar animated={true} />
          <AppNavigator />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
