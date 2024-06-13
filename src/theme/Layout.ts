// Importar librerias
import {StyleSheet} from "react-native";
import {FontsFamily} from "@theme/fontsfamily";
import {Color} from "@theme/colors";

// Descripción:
// Verificado: SI
// Creado por: Guillermo Corredor
// Fecha de creación: 06/13/2024
// NOTA:

// FONTS
const Fonts = {
  textAlert: {
    fontSize: 13,
    fontFamily: FontsFamily.m_m
  }
};

const stylesLayout = StyleSheet.create({
  wrapperApp: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Color.AppBackground
  },
  wrapperMain: {
    flex: 1,
    alignSelf: "stretch"
  },
  wrapperContent: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "column"
  }
});
// Export
export {stylesLayout};
