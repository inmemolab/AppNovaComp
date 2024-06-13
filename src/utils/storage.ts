// Importamos librerias
import { Storage } from 'redux-persist/es/types';
import { MMKVLoader } from 'react-native-mmkv-storage';
const MMKV = new MMKVLoader().initialize();

// Descripción: Para manejo de persistencia de la data en los stores
// Verificado: SI
// Creado por: Guillermo Corredor
// Fecha de creación: 06/13/2024
// NOTA:

export default function reduxStorage(): Storage {
	return {
		getItem(key: string): any {
			const value = MMKV.getString(key);
			return Promise.resolve(value);
		},
		setItem(key: string, value: any): any {
			MMKV.setString(key, value);
			return Promise.resolve();
		},
		removeItem(key: string): any {
			MMKV.removeItem(key);
			return Promise.resolve();
		},
	};
}
