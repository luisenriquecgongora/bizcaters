import React from 'react';
import './Home.scss';
import VisibilitySensor from 'react-visibility-sensor';
import {
  withRouter,
  useHistory
} from "react-router-dom";

const Home = React.forwardRef((props, ref)=>{
  const history = useHistory();
  const changeVisibility = (isVisible)=>{
    if(isVisible){
      history.push('/?section=home&moving=true')
    }
  }

  const goToRequestInstall = (isVisible)=>{
    history.push('/ordenar_catering')
  }

  return (
    <VisibilitySensor partialVisibility={true}  onChange={changeVisibility}>
      <React.Fragment>
        <div ref={ref} className="home-container">
          <div className="background"></div>
          <div className="layer"></div>
          <img className="logo-home" src="/assets/logos_bizcaters.png" />
          <div className="title">Tenemos la solución para todas tus necesidades de catering</div>
          <div className="subtitle">Conectamos empresas con caterings locales</div>
          <button className="button-request" onClick={goToRequestInstall}>Ordena <b>ahora</b></button>
        </div>
      </React.Fragment>
    </VisibilitySensor>
  );
});

export default Home;
