import React, {useEffect} from 'react';
import './App.scss';
import Home from './Pages/Home/Home';
import TNC from './Pages/TNC/TNC';
import FAQ from './Pages/FAQ/FAQ';
import OrderCatering from './Pages/OrderCatering/OrderCatering';
import RegisterCompany from './Pages/RegisterCompany/RegisterCompany';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import scrollToComponent from 'react-scroll-to-component';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

const Connector = ()=>{
  return (
    <div className="main">
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/ordenar_catering">
          <OrderCatering />
        </Route>
        <Route path="/registrar_catering">
          <RegisterCompany />
        </Route>
        <Route path="/preguntas_frecuentes">
          <FAQ />
        </Route>
        <Route path="/terminos_y_condiciones">
          <TNC />
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default Connector;
