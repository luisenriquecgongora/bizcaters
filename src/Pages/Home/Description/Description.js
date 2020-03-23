import React from 'react';
import './Description.scss';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import VisibilitySensor from 'react-visibility-sensor';
import {
  useHistory
} from "react-router-dom";
import { Parallax, Background } from 'react-parallax';
import parallaxImage from '../../../assets/catering_2.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const Description =  React.forwardRef((props, ref)=>{
  const history = useHistory();
  const classes = useStyles();

  const changeVisibility = (isVisible)=>{
    if(isVisible){
      history.push('/?section=description&moving=true')
    }
  }

  const goToRequestInstall = ()=>{
    history.push('/ordenar_catering')
  }

  return (
    <VisibilitySensor partialVisibility={true} onChange={changeVisibility}>
      <div ref={ref} className="description-container">
        <div className="title-description">Ordena con Bizcaters</div>
        <div className="subtitle-description">"Si eres una startup buscando una orden fácil o una empresa grande con órdenes diarias. Nosotros te cubrimos"</div>
        <div className="container-grid">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} className="container-card">
              <div className="number-card">1</div>
              <img src="/assets/clipboard.png" className="image-card"></img>
              <div className="title-card">CONTÁCTANOS</div>
              <div className="subtitle-card">Llena el formulario y nos contactaremos contigo en menos de 24 horas</div>
              <button className="button-request" onClick={goToRequestInstall}>Ordena <b>ahora</b> </button>
            </Grid>
            <Grid item xs={12} sm={4} className="container-card">
              <div className="number-card">2</div>
              <img src="/assets/agreement.png" className="image-card"></img>
              <div className="title-card">DECIDE</div>
              <div className="subtitle-card">Un especialista se contactará contigo para hacerte propuestas en línea con tu requerimiento</div>
            </Grid>
            <Grid item xs={12} sm={4} className="container-card">
              <div className="number-card">3</div>
              <img src="/assets/dinner.png" className="image-card"></img>
              <div className="title-card">DISFRUTA</div>
              <div className="subtitle-card">No tienes que hacer nada más. Nosotros nos encargamos del resto</div>
            </Grid>
          </Grid>
        </div>
        <Parallax
            blur={2}
            style={{ width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}
            bgImage={parallaxImage}
            bgImageAlt="Bizcaters - Catering"
            strength={200}
        >
          <div className="text-parallax">
            -Tenemos la solución para todas tus necesidades de catering-
          </div>
        </Parallax>


      </div>
    </VisibilitySensor>
  );
});

export default Description;
