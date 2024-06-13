// Importamos librerias
import type {NativeStackNavigationProp} from "@react-navigation/native-stack";

// Descripción: Para manejo de rutas
// Verificado: SI
// Creado por: Guillermo Corredor
// Fecha de creación: 06/13/2024
// NOTA:

// Ajusta TOptions según tus necesidades
type TOptions = {
  // Otras propiedades según sea necesario
};

// Modifica DefaultTReturn para siempre devolver string
type DefaultTReturn<TOpt extends TOptions> = string;
// Enum
export enum RouteScreens {
  Home = "Home",
  Task = "Task",
  List = "List",
}
// Interface
interface routeItem {
  showBack?: number;
  goHome: boolean;
}
// Export Type
export type RootStackParamList = {
  params(params: any): unknown;
  navigate(arg0: string): void;
  goBack(): void;
  Home: routeItem;
  Task: routeItem;
  List: routeItem;
};
// Export Type
export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;
// DEclare
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
