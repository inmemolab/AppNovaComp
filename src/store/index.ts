// Importamos librerias
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist/es/constants';
import { PersistConfig } from 'redux-persist/es/types';
// Importamos Utils
import reduxStorage from '@utils/storage';
// Importamos Stores
import AppReducer from './app/index';

// Descripción: Inicio del Store con redux y persistencia
// Verificado: SI
// Creado por: Guillermo Corredor
// Fecha de creación: 06/13/2024
// NOTA:

const reducers = combineReducers({
	App: persistReducer(
		{
			key: 'app',
			storage: reduxStorage(),
			whitelist: ['App'],
		},
		AppReducer
	),
});

const persistConfig: PersistConfig<any> = {
	key: 'root',
	version: 1,
	storage: reduxStorage(),
	blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		});
	},
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof reducers>;

export { persistor, store };
