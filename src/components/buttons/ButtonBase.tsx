// Importar librerias
import React from "react";
import {ActivityIndicator, GestureResponderEvent, Text, TouchableOpacity, View} from "react-native";
// Importar estylos
import {
  Color,
  styBtnDisable,
  styBtnPrimary,
  styBtnSecondary,
  styBtnSuccess,
  styBtnInfo,
  styBtnWarning,
  styBtnDanger,
  styBtnLight,
  styBtnDark,
  styButtonBase
} from "./styles";
// Importar iconos
import AppIcons from "@components/icon/AppIcons";

// Descripción:
// Verificado: SI
// Creado por: Guillermo Corredor
// Fecha de creación: 06/13/2024
// NOTA:

// Props
interface Props {
  isDisable: boolean;
  isIndicator: boolean;
  useBG: "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "light" | "dark";
  uselabel: string;
  useIconSide: string;
  useIcon: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}
// componente
const ButtonBase = ({isDisable, isIndicator, useBG, uselabel, useIconSide, useIcon, onPress}: Props) => {
  // Logica
  const iconSize = 22;
  let styData: any = "";
  let colorIndicator: string = Color.indicatorLight;
  if (isDisable === true) {
    styData = styBtnDisable;
  } else {
    if (useBG === "primary") {
      styData = styBtnPrimary;
      colorIndicator = Color.indicatorLight;
    }
    if (useBG === "secondary") {
      styData = styBtnSecondary;
      colorIndicator = Color.indicatorLight;
    }
    if (useBG === "success") {
      styData = styBtnSuccess;
      colorIndicator = Color.indicatorLight;
    }
    if (useBG === "info") {
      styData = styBtnInfo;
      colorIndicator = Color.indicatorLight;
    }
    if (useBG === "warning") {
      styData = styBtnWarning;
      colorIndicator = Color.indicatorDark;
    }
    if (useBG === "danger") {
      styData = styBtnDanger;
      colorIndicator = Color.indicatorLight;
    }
    if (useBG === "light") {
      styData = styBtnLight;
      colorIndicator = Color.indicatorDark;
    }
    if (useBG === "dark") {
      styData = styBtnDark;
      colorIndicator = Color.indicatorLight;
    }
  }
  // Return
  return (
    <TouchableOpacity style={styButtonBase.wrapperBtn} onPress={onPress} disabled={isDisable}>
      <View style={[styButtonBase.btnBg, styData.btnBg]}>
        <View style={styButtonBase.btnCover}>
          <View style={styButtonBase.btnIconLeftCover}>
            <View style={styButtonBase.btnIconBg}>{useIconSide === "l" && <AppIcons useBG={useBG} useSize={iconSize} useIcon={useIcon} />}</View>
          </View>
          <View style={styButtonBase.btnIdicatorColumn}>
            {isIndicator ? (
              <ActivityIndicator size="small" color={colorIndicator} style={styButtonBase.btnIdicator}></ActivityIndicator>
            ) : (
              <Text style={[styButtonBase.btnTxt, styData.btnTxt]}>{uselabel}</Text>
            )}
          </View>
          <View style={styButtonBase.btnIconRightCover}>
            <View style={styButtonBase.btnIconBg}>{useIconSide === "r" && <AppIcons useBG={useBG} useSize={iconSize} useIcon={useIcon} />}</View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
// Export componente
export default ButtonBase;
