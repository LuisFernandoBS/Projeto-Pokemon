// store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { usuarioReducer } from "./features/usuario/usuario-slice";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedUsuarioReducer = persistReducer(persistConfig, usuarioReducer)

export const store = configureStore({
  reducer: {
    usuario: persistedUsuarioReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export let persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch


