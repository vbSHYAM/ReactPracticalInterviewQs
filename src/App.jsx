import React from "react";
import Axios from "./components/axios/Axios";
import Consumer from "./components/contextapi/Consumer";
import ControlledFormComp from "./components/controlledform/ControlledFormComp";
import SearchFilter from "./components/searchfilter/SearchFilter";
import ToDoList from "./components/todolist/ToDoList";
import AsyncUseEffect from "./components/useeffect/AsyncUseEffect";
import UseEffect from "./components/useeffect/UseEffect";
import ParentPropOne from "./components/props/ParentPropOne";
import ConsumerHoc from "./components/hoc/ConsumerHoc";
import ParentPropTwo from "./components/props/ParentPropTwo";
import Upload from "./components/uploadfile/Upload";

const App = () => {
  return (
    <div>
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
      <Consumer />
      {/* --------------Todolist-------------- */}
      {/* <ToDoList/> */}
      {/* ------------------------Props-------------- */}
      {/* <ParentPropOne /> */}
      {/* <ParentPropTwo/> */}
      {/* -----------------HOC---------------- */}
      {/* <ConsumerHoc/> */}
      {/* ------------upload--------------- */}
      {/* <Upload/> */}
    </div>
  );
};

export default App;

// ------------------------context API---------------------------------------

// import React from 'react'
// import ContextConsumer from './components/contextapinew/ContextConsumer'

// const App = () => {

//   return (
//     <div>
//     <ContextConsumer/>
//     </div>
//   )
// }

// export default App
