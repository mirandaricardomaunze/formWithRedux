import React, { useEffect, useState } from 'react'
import  'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../FetchData/fetchApi'



const Login = () => {
const dispatch= useDispatch()
const{token,loading,message}=useSelector((state)=>state)
const[name,setName]=useState('')
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')

const handleSubmit=async(e)=>{
   e.preventDefault()
   dispatch( login({name:name,email:email,password:password}))
   setName('')
   setEmail('')
   setPassword('')
}

console.log(token);

useEffect(()=>{
    console.log(name,email,password);
})

  return (
    <div>
     <div className='container mt-5 mb-5 d-flex align-items-center justify-content-center'>
       <div class="col-4 ">
         <h1>Entrar</h1>
         <p>{token && <>Logado</>}</p>
         <form  onSubmit={handleSubmit}>
         <div class="form-group">
                <label for="name">Nome:</label>
                <input type="text" class="form-control" id="name"
                 placeholder="Degite o nome" name="name"
                  value={name}
                  onChange={(e)=>{setName(e.target.value)}}
                 />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" class="form-control" id="email" 
                placeholder="Degite o email" name="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                />
            </div>
            <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd" 
                placeholder="Degite o password" name="pwd"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                />
            </div>
            <div class="checkbox">
                <label><input type="checkbox" name="remember"/> Lembrar-me</label>
            </div>
            <button type="submit" class="btn btn-primary" >Enviar</button>
         </form>
         <h1>{loading && <p>Processamento em curso.....</p>}</h1>
         {message!=null && <p className='bg-success p-2 rounded'>{message?.message}</p>}
      </div>
    </div>
 </div>
  )
}

export default Login

