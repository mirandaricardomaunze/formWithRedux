import {
   FETCH_DATA_REQUEST,
   FETCH_DATA_SUCCESS,
   FETCH_DATA_ERROR, 
   FETCH_SIGNUP_REQUEST,
   FETCH_SIGNUP_SUCCESS, 
   FETCH_SIGNUP_ERROR ,
   FETCH_LOGIN_REQUEST,
   FETCH_LOGIN_SUCCESS,
   FETCH_LOGIN_ERROR 
  } from "./action";
import axios from 'axios'
import  BaseUrl from './api'


export  const fetchData=()=>{
    return async (dispatch) => {
    dispatch({type:FETCH_DATA_REQUEST})
      try {
          const response=await axios.post('http://localhost:4000/users');
          console.log('......'+response);
          if (response) {
            console.log('Requisicao feita com sucesso'+response);
          }
        dispatch({type:FETCH_DATA_SUCCESS,payload:response.data})
      } catch (error) {
        if (error) {
            console.log('Falha na requisicao ');
        }
        dispatch({type:FETCH_DATA_ERROR,payload:error.message})
      }
  }

}



export const register=({name,email,password})=>{
  return async (dispatch)=>{
    dispatch({type:FETCH_SIGNUP_REQUEST})
    try {
      const response=await axios.post("http://localhost:4000/register",{name,email,password});
      if (response) {
        console.log('Conectado com sucesso!');
      }
      dispatch({type:FETCH_SIGNUP_SUCCESS,payload:response.data})
    } catch (error) {
     dispatch({type:FETCH_SIGNUP_ERROR,payload:error.message})
     if (error) {
       console.log(`Ocorreu erro de conexao com servidor  ${error}`);
     }
    }
  }
}


export const login=({name,email,password})=>{
  return async (dispatch)=>{
    dispatch({type:FETCH_LOGIN_REQUEST})
    try {
     const response=await axios.post(BaseUrl, {name,email,password});
       console.log('Resposta:'+response.data);
     if (response) {
       console.log('Conectado com servidor');
     }
      dispatch({type:FETCH_LOGIN_SUCCESS,payload:response.data})
    } catch (error) {
     dispatch({type:FETCH_LOGIN_ERROR,payload:error.message})
     if (error) {
      console.log('Nao foi possivel conectar com servidor');
    }
    }
  }
}