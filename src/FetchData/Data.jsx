import React, {  useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchData } from './fetchApi'
import  'bootstrap/dist/css/bootstrap.min.css'


const Data = () => {

const dispatch=useDispatch()

const {loading,data,error}=useSelector(state=>state)
console.log(data);


useEffect(()=>{
    dispatch(fetchData())
},[dispatch])

  return (
    <div className='container mb-5'>
      <h1>Consumindo APi com redux</h1>
      <p>{loading && 'Carregando...'}</p>
      <p>{error && <li>{error}</li>}</p>

            <table  class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
              {data.users?.map((user)=>(
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
                 ))}
              </tbody>
            </table>
     
    </div>
  )
}

export default Data
