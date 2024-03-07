// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { usuarioReducer } from "./features/usuario/usuario-slice";
import { menuLateralReducer } from "./features/menu-lateral/menu-lateral-slice";
import { alertaReducer } from "./features/alerta/alerta-slice";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedUsuarioReducer = persistReducer(persistConfig, usuarioReducer)
const persistedMenuLateralReducer = persistReducer(persistConfig, menuLateralReducer)

export const store = configureStore({
  reducer: {
    usuario: persistedUsuarioReducer,
    menu: persistedMenuLateralReducer,
    alerta: alertaReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export let persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch


