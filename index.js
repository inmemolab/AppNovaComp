// Importamos librerias
import "react-native-gesture-handler";
import {AppRegistry} from "react-native";
import App from "./src/App";
import {name as appName} from "./app.json";
// Llamamos a App
AppRegistry.registerComponent(appName, () => App);
