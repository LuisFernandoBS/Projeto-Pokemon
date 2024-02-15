import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../../store.ts'

interface UsuarioState {
    nome:string;
    admin:boolean;
};

const initialState:UsuarioState = {
    nome:"",
    admin:false,
};

export const usuarioSlice = createSlice({
    name:"usuario",
    initialState,
    reducers:{
        setNome:(state, actions:PayloadAction<UsuarioState>) => {
            state.nome = actions.payload.nome;
        },
        limparNome:(state) => {
            state.nome = "";
        }
    }
})

export const {setNome,limparNome} = usuarioSlice.actions;
export const usuarioReducer = usuarioSlice.reducer;
export const selectUsuario = (state: RootState) => state.usuario;
