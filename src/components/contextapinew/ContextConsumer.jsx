import React, { useContext ,useState} from 'react'
import { MyContextApi } from './ContextProvider'
import { useEffect } from 'react';

const ContextConsumer = () => {
    let [state,setState]=useState([])
    let data = useContext(MyContextApi)
    console.log(data);
  useEffect(()=>{
    setState(data)
    
  },[])
  console.log(state);
  return (
    <div>
     {state.map((v,id)=>{
        return(
            <div key={id}>
                <h2>{id}</h2>
            <h1>{v.Name}</h1>

            <p>{v.Id}</p>

            <p>{v.role}</p>
            </div>
        )
     })}
    </div>
  )
}

export default ContextConsumer
