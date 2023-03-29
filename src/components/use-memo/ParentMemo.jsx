import React, { useState } from 'react'
import ChildMemo from './ChildMemo'

const ParentMemo = () => {
    let [count,setCount]=useState(0)
    const [name,setName]=useState("Aishu")
    console.log("parent render");
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>count:{count}</button>
      <button onClick={()=>setName("vaishu")}>change name</button>

      <ChildMemo name={name}/>
    </div>
  )
}

export default ParentMemo
