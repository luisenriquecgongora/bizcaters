import React from 'react';
import './Knowledge.scss';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import VisibilitySensor from 'react-visibility-sensor';
import {
  useHistory,
  Link
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


const Knowledge =  React.forwardRef((props, ref)=>{
  const history = useHistory();
  const classes = useStyles();

  const changeVisibility = (isVisible)=>{
    if(isVisible){
      history.push('/?section=knowledge&moving=true')
    }
  }

  const goToRequestInstall = ()=>{

  }

  return (
    <VisibilitySensor partialVisibility={true} onChange={changeVisibility}>
      <div ref={ref} className="knowledge-container">
        <div className="title-knowledge">¿Eres un catering?</div>
        <div className="subtitle-knowledge">Te conectamos con más clientes</div>
        <Link to="/registrar_catering" className="button-bizcaters"><b>Registra tu negocio</b></Link>
      </div>
    </VisibilitySensor>
  );
});

export default Knowledge;
