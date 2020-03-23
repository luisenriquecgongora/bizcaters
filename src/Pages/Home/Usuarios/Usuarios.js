import React from 'react';
import './Usuarios.scss';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import VisibilitySensor from 'react-visibility-sensor';
import {
  useHistory
} from "react-router-dom";

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


const Usuarios =  React.forwardRef((props, ref)=>{
  const history = useHistory();
  const classes = useStyles();

  const changeVisibility = (isVisible)=>{
    if(isVisible){
      history.push('/?section=usuarios&moving=true')
    }
  }

  const goToRequestInstall = ()=>{

  }

  return (
    <VisibilitySensor partialVisibility={true} onChange={changeVisibility}>
      <div ref={ref} className="usuarios-container">
        <div className="title-usuarios">¿Por qué escoger Bizcaters como opción para tu empresa?</div>
        <div className="container-grid">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4} className="container-card">
              <img src="/assets/choices.png" className="image-card"></img>
              <div className="title-card">Mayor diversidad y flexibilidad en tus pedidos</div>
              <div className="subtitle-card">¡Ordena lo que quieras y como quieras! </div>
            </Grid>
            <Grid item xs={12} sm={4} className="container-card">
              <img src="/assets/truck.png" className="image-card"></img>
              <div className="title-card">Despreocúpate del catering</div>
              <div className="subtitle-card">Nos aseguramos de que tu pedido llegue a tiempo.</div>
            </Grid>
            <Grid item xs={12} sm={4} className="container-card">
              <img src="/assets/customer-service.png" className="image-card"></img>
              <div className="title-card">Ten un asistente personalizado de comida</div>
              <div className="subtitle-card">¡Nosotros nos encargamos de todo el proceso!</div>

            </Grid>
          </Grid>
        </div>
      </div>
    </VisibilitySensor>
  );
});

export default Usuarios;
