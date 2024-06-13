// Importar librerias
import React from "react";
import {View} from "react-native";
// Importar estylos
import {
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
} from "./styles";

// Descripción:
// Verificado: SI
// Creado por: Guillermo Corredor
// Fecha de creación: 06/13/2024
// NOTA:

// Importar iconos
import IconSubtask from "@assets/svg/icons/subtask.svg";
import IconList from "@assets/svg/icons/list.svg";
import IconNew from "@assets/svg/icons/text-plus.svg";
import IconSave from "@assets/svg/icons/device-floppy.svg";
import IconCancel from "@assets/svg/icons/circle-x.svg";

// Props
interface Props {
  useBG: "input" | "noctive" | "active" | "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "light" | "dark" | "color";
  useSize: number;
  useIcon: string;
}
// componente
const AppIcons = ({useBG, useSize, useIcon}: Props) => {
  // Logica
  let styData: any = "";
  if (useBG === "input") {
    styData = styIconInput;
  }
  if (useBG === "noctive") {
    styData = styIconDisable;
  }
  if (useBG === "primary") {
    styData = styIconPrimary;
  }
  if (useBG === "secondary") {
    styData = styIconSecondary;
  }
  if (useBG === "success") {
    styData = styIconSuccess;
  }
  if (useBG === "info") {
    styData = styIconInfo;
  }
  if (useBG === "warning") {
    styData = styIconWarning;
  }
  if (useBG === "danger") {
    styData = styIconDanger;
  }
  if (useBG === "light") {
    styData = styIconLight;
  }
  if (useBG === "dark") {
    styData = styIconDark;
  }
  if (useBG === "color") {
    styData = styIconOrange;
  }

  // Return
  return (
    <View>
      {useIcon === "subtask" && <IconSubtask style={styData.iconColor} width={useSize} height={useSize} />}
      {useIcon === "list" && <IconList style={styData.iconColor} width={useSize} height={useSize} />}
      {useIcon === "text-plus" && <IconNew style={styData.iconColor} width={useSize} height={useSize} />}
      {useIcon === "device-floppy" && <IconSave style={styData.iconColor} width={useSize} height={useSize} />}
      {useIcon === "circle-x" && <IconCancel style={styData.iconColor} width={useSize} height={useSize} />}


    </View>
  );
};
// Export componente
export default AppIcons;
