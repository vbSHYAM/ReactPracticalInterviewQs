import React, { useRef } from 'react'

const ParentRef = () => {
    let colorRef = useRef()
    let ChangeColor = ()=>{
        colorRef.current.style.background="yellow"
    }
  return (
    <div>
      
<p ref={colorRef}>Cool</p>

<button onClick={ChangeColor}>Change color</button>

    </div>
  )
}

export default ParentRef
