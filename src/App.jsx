import React from 'react'
import Axios from './components/axios/Axios'
import Consumer from './components/contextapi/Consumer'
import Provider from './components/contextapi/Provider'
import ControlledFormComp from './components/controlledform/ControlledFormComp'
import SearchFilter from './components/searchfilter/SearchFilter'
import ToDoList from './components/todolist/ToDoList'
import AsyncUseEffect from './components/useeffect/AsyncUseEffect'
import UseEffect from './components/useeffect/UseEffect'

const App = () => {
  return (
    <Provider>
        {/* ----useEffect ------------------ */}
      {/* <UseEffect/> */}
      {/* <AsyncUseEffect/> */}
      {/* ----------Axios------------- */}
      {/* <Axios/> */}
      {/* ----------Controlled Form Comp / add fields--------------- */}
      {/* <ControlledFormComp/> */}
      {/* ------search filter------ */}
      {/* <SearchFilter/> */}
      {/* ----------contextApi------ */}
      {/* <Consumer/> */}
      {/* --------------Todolist-------------- */}
<ToDoList/>

    </Provider>
  )
}

export default App
