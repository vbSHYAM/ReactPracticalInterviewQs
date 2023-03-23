import React from "react";
import Axios from "./components/axios/Axios";
import ControlledFormComp from "./components/controlledform/ControlledFormComp";
import SearchFilter from "./components/searchfilter/SearchFilter";
import ToDoList from "./components/todolist/ToDoList";
import AsyncUseEffect from "./components/useeffect/AsyncUseEffect";
import UseEffect from "./components/useeffect/UseEffect";
import ParentPropOne from "./components/props/ParentPropOne";
import ConsumerHoc from "./components/hoc/ConsumerHoc";
import ParentPropTwo from "./components/props/ParentPropTwo";
import Upload from "./components/uploadfile/Upload";
import Get from "./components/getpostput/Get";
import Post from "./components/getpostput/Post";
import Put from "./components/getpostput/Put";
import Delete from "./components/getpostput/Delete";
import ParentState from "./components/passStateasPropsandSetState/ParentState";

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
      {/* <Consumer /> */}
      {/* --------------Todolist-------------- */}
      {/* <ToDoList/> */}
      {/* ------------------------Props-------------- */}
      {/* <ParentPropOne /> */}
      {/* <ParentPropTwo/> */}
      {/* -----------------HOC---------------- */}
      {/* <ConsumerHoc/> */}

      {/* ------------upload--------------- */}
      {/* <Upload/> */}
      {/* ----------------GET Method------------------------ */}
      {/* <Get/> */}
      {/* ---------------POST MEthod---------------------- */}
      {/* <Post/> */}
      {/* --------------PUT Method-------------------- */}
      {/* <Put/> */}
      {/* -----------------DELETE Method------------ */}
      {/* <Delete /> */}
      {/* -------------------Props As state and Update State------------------------------ */}
      <ParentState/>
    </div>
  );
};

export default App;

// !------------------------!!context API!!---------------------------------------

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
