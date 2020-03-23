import React , {useState, useEffect} from 'react';
import './Navbar.scss';
import { makeStyles } from '@material-ui/core/styles';
import {Drawer} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import getMobileOperatingSystem from '../../Helpers/DetectDeviceType';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";


const Navbar = (props)=>{
  const [drawerToggled, toggleDrawer] = useState(false);
  const [downloadAvailable, setDownload] = useState(false);
  const onToggleDrawer = ()=>{
    toggleDrawer(!drawerToggled);
  }

  const checkDownload = async (e)=>{
    let os = await getMobileOperatingSystem();
    os = os.toLowerCase();
    if(os == 'android' || os == 'ios'){
      setDownload(true);
    }else{
      setDownload(false);
    }
  }

  const goToDownload = async (e)=>{
    e.preventDefault();
    toggleDrawer(false);
    let os = await getMobileOperatingSystem();
    os = os.toLowerCase();
    if(os == 'unknown'){
      window.open(`https://play.google.com/store?utm_source=emea_Med&utm_medium=hasem&utm_content=090514&utm_campaign=Evergreen&pcampaignid=MKT-EG-emea-pl-all-Med-hasem-py-Evergreen-090514-1%7cONSEM_kwid_43700007034273533&gclid=Cj0KCQiAm4TyBRDgARIsAOU75sqF-juw5e1YlRj0_2NdQUlm_hhv3JNTQpVMARRdDLKk42BC8tkkew8aAqEJEALw_wcB&gclsrc=aw.ds`);
    }else if(os == 'android'){
      window.open(`https://play.google.com/store?utm_source=emea_Med&utm_medium=hasem&utm_content=090514&utm_campaign=Evergreen&pcampaignid=MKT-EG-emea-pl-all-Med-hasem-py-Evergreen-090514-1%7cONSEM_kwid_43700007034273533&gclid=Cj0KCQiAm4TyBRDgARIsAOU75sqF-juw5e1YlRj0_2NdQUlm_hhv3JNTQpVMARRdDLKk42BC8tkkew8aAqEJEALw_wcB&gclsrc=aw.ds`);
    }else if(os == 'ios'){
      window.open(`https://www.apple.com/ios/app-store/`);
    }
  }

  useEffect(()=>{
    checkDownload();
  },[])

  return (
    <div className="container-navbar">
      <Toolbar className="container-navbar-top">
        <Link className="container-logo-toolbar" to={'/?section=home&moving=false'}><img src="/assets/icon.png" className="logo-toolbar"/></Link>
        <i className="material-icons menu" onClick={onToggleDrawer}>menu</i>
        <Link to={'/?section=description&moving=false'} className="link-nav-top">¿Cómo funciona?</Link>
        <Link to={'/ordenar_catering'} className="link-nav-top">Solicitar Catering</Link>
        <Link to={'/registrar_catering'} className="link-nav-top">Registrar mi Catering</Link>
      </Toolbar>
      <Drawer open={drawerToggled} onClose={onToggleDrawer}>
        <nav className="drawer-container">
          <Link onClick={onToggleDrawer} to={'/?section=home&moving=false'} className="container-logo-drawer">
            <img className="logo-drawer" src="/assets/logo_black.png"></img>
          </Link>
          <Link to={'/?section=description&moving=false'} onClick={onToggleDrawer} className="link-drawer">¿Cómo funciona?</Link>
          <Link to={'/ordenar_catering'} onClick={onToggleDrawer} className="link-drawer">Solicitar Catering</Link>
          <Link to={'/registrar_catering'} onClick={onToggleDrawer} className="link-drawer">Registrar mi Catering</Link>
          <Link to={'/preguntas_frecuentes'} onClick={onToggleDrawer} className="link-drawer">Preguntas Frecuentes</Link>
        </nav>
      </Drawer>
    </div>
  );
}

export default Navbar;
