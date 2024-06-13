// Importamos librerias
import {RootState} from "../index";
import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";

// Descripción:
// Verificado: SI
// Creado por: Guillermo Corredor
// Fecha de creación: 06/13/2024
// NOTA:

export type TaskData = {
  id: string;
  description: string;
};

type AppState = {
  userTask: Array<TaskData>;
};

const initialState: AppState = {
  userTask: []
};

const appSlice = createSlice({
  name: "App",
  initialState: initialState,
  reducers: {
    setTask: (state, action: PayloadAction<TaskData>) => {
      state.userTask.push(action.payload);
    }
  }
});

export const {setTask} = appSlice.actions;

const appStateSelector = (state: RootState) => state.App;

export const appSelector = createSelector(appStateSelector, (state: AppState) => state);

export default appSlice.reducer;
