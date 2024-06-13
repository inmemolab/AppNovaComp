// Importar librerias
import {FontsFamily} from "@theme/fontsfamily";
import {Border} from "@theme/borders";
import {StyleSheet, Dimensions} from "react-native";
const {width} = Dimensions.get("window");

// Descripción:
// Verificado: SI
// Creado por: Guillermo Corredor
// Fecha de creación: 06/13/2024
// NOTA:

// Color
const Color = {
  btnPrimary: "#666687",
  btnSecondary: "#8981AE",
  btnSuccess: "#67B173",
  btnInfo: "#2991db",
  btnWarning: "#FFC84B",
  btnDanger: "#F17171",

  brBtnDark: "#666687",
  brBtnLight: "#EAEAEF",

  bgBtnDark: "#495057",
  bgBtnLight: "#EAEAEF",
  bgBtnDisable: "#EAEAEF",
  bgBtnSlide: "#F6F6F9",
  bgTab: "#666687",

  txtBtnDark: "#495057",
  txtBtnLight: "#EAEAEF",
  txtBtnDisable: "#8f8fa7",
  txtBgSlide: "#C0C0CF",

  indicatorDark: "#495057",
  indicatorLight: "#EAEAEF",

  icBtnDark: "#495057",
  icBtnLight: "#EAEAEF",
  icSmall: "#666687",
  icOrange: "#FFB01D"
};
// FONTS
const Fonts = {
  txtBtnSlide: {
    fontSize: 16,
    fontFamily: FontsFamily.m_m
  },
  txtBtnBase: {
    fontSize: 14,
    fontFamily: FontsFamily.m_m
  },
  ButtonRoundLabel: {
    fontSize: 13,
    fontFamily: FontsFamily.m_m
  },
  ButtonSmallLabel: {
    fontSize: 10,
    fontFamily: FontsFamily.m_m
  },
  ButtonXSmallLabel: {
    fontSize: 9,
    fontFamily: FontsFamily.m_m
  }
};

const styBtnDisable = StyleSheet.create({
  btnBg: {
    borderColor: Color.brBtnDark,
    backgroundColor: Color.bgBtnDisable
  },
  btnBgIcon: {
    backgroundColor: Color.icBtnDark
  },
  btnBgIconSmall: {
    backgroundColor: Color.btnPrimary
  },
  btnTxt: {
    color: Color.txtBtnDisable
  }
});
const styBtnPrimary = StyleSheet.create({
  btnBg: {
    borderColor: Color.brBtnLight,
    backgroundColor: Color.btnPrimary
  },
  btnBgIcon: {
    backgroundColor: Color.btnPrimary
  },
  btnTxt: {
    color: Color.txtBtnLight
  }
});
const styBtnSecondary = StyleSheet.create({
  btnBg: {
    borderColor: Color.brBtnLight,
    backgroundColor: Color.btnSecondary
  },
  btnBgIcon: {
    backgroundColor: Color.btnSecondary
  },
  btnTxt: {
    color: Color.txtBtnLight
  }
});
const styBtnSuccess = StyleSheet.create({
  btnBg: {
    borderColor: Color.brBtnLight,
    backgroundColor: Color.btnSuccess
  },
  btnBgIcon: {
    backgroundColor: Color.btnSuccess
  },
  btnTxt: {
    color: Color.txtBtnLight
  }
});
const styBtnInfo = StyleSheet.create({
  btnBg: {
    borderColor: Color.brBtnLight,
    backgroundColor: Color.btnInfo
  },
  btnBgIcon: {
    backgroundColor: Color.btnInfo
  },
  btnTxt: {
    color: Color.txtBtnLight
  }
});
const styBtnWarning = StyleSheet.create({
  btnBg: {
    borderColor: Color.brBtnLight,
    backgroundColor: Color.btnWarning
  },
  btnBgIcon: {
    backgroundColor: Color.btnWarning
  },
  btnTxt: {
    color: Color.txtBtnDark
  }
});
const styBtnDanger = StyleSheet.create({
  btnBg: {
    borderColor: Color.brBtnLight,
    backgroundColor: Color.btnDanger
  },
  btnBgIcon: {
    backgroundColor: Color.btnDanger
  },
  btnTxt: {
    color: Color.txtBtnLight
  }
});
const styBtnLight = StyleSheet.create({
  btnBg: {
    borderColor: Color.brBtnDark,
    backgroundColor: Color.bgBtnLight
  },
  btnBgIcon: {
    backgroundColor: Color.icBtnLight
  },
  btnTxt: {
    color: Color.txtBtnDark
  }
});
const styBtnDark = StyleSheet.create({
  btnBg: {
    borderColor: Color.brBtnLight,
    backgroundColor: Color.bgBtnDark
  },
  btnBgIcon: {
    backgroundColor: Color.icBtnDark
  },
  btnTxt: {
    color: Color.txtBtnLight
  }
});

const styButtonBase = StyleSheet.create({
  wrapperBtn: {
    width: "100%",
    height: 50,
    padding: 8,
    marginTop: 5
  },
  btnBg: {
    width: "100%",
    height: 50,
    borderWidth: Border.b1,
    borderRadius: Border.r16
  },
  btnCover: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  btnIconLeftCover: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left: 24
  },
  btnIconRightCover: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    right: 10
  },
  btnIdicatorColumn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 247,
    height: 50
  },
  btnIdicator: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center"
  },
  btnTxt: {
    position: "absolute",
    textAlign: "center",
    ...Fonts.txtBtnBase,
    fontWeight: "600",
    letterSpacing: -0.3
  },
  btnIconBg: {
    width: 40,
    height: "100%"
  }
});

// Export
export {
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
  styButtonBase,
};
