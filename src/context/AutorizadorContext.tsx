"use client"

import React,{ createContext, useContext, useEffect, useState } from "react";
import { setCookie } from 'nookies'
import axios from 'axios';

type SignInData = {
    user: string;
    senha: string;
}

type DataResp = {
    error: boolean,
    message: string,
    statusCode: number,
    result: object
  }
  
  type Resp = {
    config: object,
    data: DataResp,
    headers: object,
    request: object,
    status: number,
    statusText: string,
  }

type AuthContextType = {
  logar: (data: SignInData) => Promise<DataResp>,
  usuario:string,
  setUsuario:Function
}

export const AuthContext = createContext({} as AuthContextType)

export function AutorizadorProvider({ children }: { children: React.ReactNode}) {
    let [usuario, setUsuario] = useState("");

    async function logar({ user, senha }: SignInData) {
        let resp = await axios.post('https://api-projeto-pokemon.vercel.app/api/logar', {
            user: user,
            senha: senha
        })
        .then(function (response) {        
            if (response.data.result.token) {            
                setCookie(undefined, 'nextauth.token', response.data.result.token, {
                    maxAge: 60 * 60 * 1, // 1 hour
                })
            }
            setUsuario("Pondian");
            return response.data;
        })
        .catch(function (error) {
            return error;
        });
        
    
        return resp;
    }

  return (
    <AuthContext.Provider value={{ logar,usuario,setUsuario }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext);