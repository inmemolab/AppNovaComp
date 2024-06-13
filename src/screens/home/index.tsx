// Importar librerias
import React from "react";
import {SafeAreaView, View} from "react-native";
// Importar estylos
import {stylesLayout} from "@theme/Layout";
import ButtonBase from "@components/buttons/ButtonBase";

// Descripción:
// Verificado: SI
// Creado por: Guillermo Corredor
// Fecha de creación: 06/13/2024
// NOTA:

// Screen
const HomeScreen = ({navigation}: any) => {
  // Return
  return (
    <SafeAreaView style={stylesLayout.wrapperApp}>
      <View style={stylesLayout.wrapperMain}>
        <ButtonBase
          isDisable={false}
          isIndicator={false}
          uselabel="Task"
          useBG={"secondary"}
          useIconSide={"l"}
          useIcon={"subtask"}
          onPress={() => navigation.navigate("Task")}
        />
        <ButtonBase
          isDisable={false}
          isIndicator={false}
          uselabel="List"
          useBG={"secondary"}
          useIconSide={"l"}
          useIcon={"list"}
          onPress={() => navigation.navigate("List")}
        />
      </View>
    </SafeAreaView>
  );
};
// Export componente
export default HomeScreen;
