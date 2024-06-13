// Importar librerias
import {StyleSheet} from "react-native";

// Descripción:
// Verificado: SI
// Creado por: Guillermo Corredor
// Fecha de creación: 06/13/2024
// NOTA:

// Color
const Color = {
  icLeft: "#8E8EA9",
  icDisable: "#666687",
  icLight: "#F6F6F9",
  icDark: "#495057",
  icOrange: "#FFB01D"
};

const styIconInput = StyleSheet.create({
  iconColor: {
    color: Color.icLeft
  }
});

const styIconDisable = StyleSheet.create({
  iconColor: {
    color: Color.icDisable
  }
});
const styIconPrimary = StyleSheet.create({
  iconColor: {
    color: Color.icLight
  }
});
const styIconSecondary = StyleSheet.create({
  iconColor: {
    color: Color.icLight
  }
});
const styIconSuccess = StyleSheet.create({
  iconColor: {
    color: Color.icLight
  }
});
const styIconInfo = StyleSheet.create({
  iconColor: {
    color: Color.icLight
  }
});
const styIconWarning = StyleSheet.create({
  iconColor: {
    color: Color.icDark
  }
});
const styIconDanger = StyleSheet.create({
  iconColor: {
    color: Color.icLight
  }
});
const styIconLight = StyleSheet.create({
  iconColor: {
    color: Color.icLight
  }
});
const styIconDark = StyleSheet.create({
  iconColor: {
    color: Color.icDark
  }
});
const styIconOrange = StyleSheet.create({
  iconColor: {
    color: Color.icOrange
  }
});
// Export
export {
  styIconInput,
  styIconDisable,
  styIconPrimary,
  styIconSecondary,
  styIconSuccess,
  styIconInfo,
  styIconWarning,
  styIconDanger,
  styIconLight,
  styIconDark,
  styIconOrange
};
