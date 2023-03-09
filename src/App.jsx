import React from "react";
import Axios from "./components/axios/Axios";
import Consumer from "./components/contextapi/Consumer";
import Provider from "./components/contextapi/Provider";
import ControlledFormComp from "./components/controlledform/ControlledFormComp";
import SearchFilter from "./components/searchfilter/SearchFilter";
import ToDoList from "./components/todolist/ToDoList";
import AsyncUseEffect from "./components/useeffect/AsyncUseEffect";
import UseEffect from "./components/useeffect/UseEffect";
import ParentPropOne from "./components/props/ParentPropOne";
import ConsumerHoc from "./components/hoc/ConsumerHoc";

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
      {/* <ToDoList/> */}
      {/* ------------------------Props-------------- */}
      {/* <ParentPropOne /> */}
      {/* -----------------HOC---------------- */}
      <ConsumerHoc/>
    </Provider>
    
  );
};

export default App;
