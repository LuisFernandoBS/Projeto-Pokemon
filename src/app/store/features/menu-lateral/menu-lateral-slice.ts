import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from '../../store.ts'

interface MenuLateralState {
    fechado:boolean;
};

const initialState:MenuLateralState = {
    fechado:false,
};

export const menuLateralSlice = createSlice({
    name:"menu",
    initialState,
    reducers:{
        setSituacaoMenu:(state, actions:PayloadAction<MenuLateralState>) => {
            console.log(actions.payload);            
            state.fechado = actions.payload.fechado;
        }
    }
})

export const {setSituacaoMenu} = menuLateralSlice.actions;
export const menuLateralReducer = menuLateralSlice.reducer;
export const selectMenuLateral = (state: RootState) => state.menu;
