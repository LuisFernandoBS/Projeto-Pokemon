import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../../store.ts'

interface UsuarioState {
    nome:string;
    user:string;
    cartaSelecionada:string;
    admin:boolean;
};

const initialState:UsuarioState = {
    nome:"",
    user:"",
    cartaSelecionada:"",
    admin:false,
};

export const usuarioSlice = createSlice({
    name:"usuario",
    initialState,
    reducers:{
        setUsuario:(state, actions:PayloadAction<UsuarioState>) => {
            state = {...actions.payload}
        },
        limparNome:(state) => {
            state.nome = "";
        }
    }
})

export const {setUsuario,limparNome} = usuarioSlice.actions;
export const usuarioReducer = usuarioSlice.reducer;
export const selectUsuario = (state: RootState) => state.usuario;
