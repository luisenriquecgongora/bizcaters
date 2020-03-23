import React, {useEffect} from 'react';
import Home from './Home/Home';
import Description from './Description/Description';
import Usuarios from './Usuarios/Usuarios';
import Knowledge from './Knowledge/Knowledge';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import scrollToComponent from 'react-scroll-to-component';

const useQuery = ()=>{
  return new URLSearchParams(useLocation().search);
}

const App = ()=>{
  let section = useQuery().get("section");
  let moving =  useQuery().get("moving");
  let HomeRef = React.createRef();
  let DescriptionRef = React.createRef();
  let UsuariosRef = React.createRef();
  let KnowledgeRef = React.createRef();
  useEffect(()=>{
    if(moving=='false'){
      switch (section) {
        case 'home':
          scrollToComponent(HomeRef.current, { align: 'top' })
          break;
        case 'description':
          scrollToComponent(DescriptionRef.current, { align: 'top', offset: -60})
          break;
        case 'usuarios':
          scrollToComponent(UsuariosRef.current, { align: 'top', offset: -60})
          break;
        case 'knowledge':
          scrollToComponent(KnowledgeRef.current, { align: 'top', offset: -60})
          break;
        default:
          //scrollToComponent(HomeRef.current)
      }
    }
  },[section,moving])

  return (
    <div>
      <Home ref={HomeRef}/>
      <Description ref={DescriptionRef}/>
      <Usuarios ref={UsuariosRef} />
      <Knowledge ref={KnowledgeRef}/>
    </div>
  );
}

export default App;
