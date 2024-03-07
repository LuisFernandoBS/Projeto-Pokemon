import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../../store.ts'

interface AlertaState {
    mensagem: string;
    tipo: string;
    time?: number;
    show?: boolean;
};

interface Time {
    time?: number;
};

const initialState: AlertaState = {
    mensagem: "",
    tipo: "",
    time: 4000,
    show: false,
};

export const AlertaSlice = createSlice({
    name: "alerta",
    initialState,
    reducers: {
        mostrarAlerta: (state, actions: PayloadAction<AlertaState>) => {
            state.mensagem = actions.payload.mensagem;
            state.tipo = actions.payload.tipo;
            state.time = actions.payload.time;
            state.show = true;
        },
        fecharAlerta: (state) => {
            state.show = false;
        },
    }
})

export const { mostrarAlerta, fecharAlerta } = AlertaSlice.actions;
export const alertaReducer = AlertaSlice.reducer;
// export const selectAlerta = (state: RootState) => state.alerta;
