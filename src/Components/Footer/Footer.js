import React from 'react';
import './Footer.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import getMobileOperatingSystem from '../../Helpers/DetectDeviceType';


const Footer = ()=>{

  const goToDownload = ()=>{
    let os = getMobileOperatingSystem();
    if(os == 'unknown'){
      window.open(`https://play.google.com/store?utm_source=emea_Med&utm_medium=hasem&utm_content=090514&utm_campaign=Evergreen&pcampaignid=MKT-EG-emea-pl-all-Med-hasem-py-Evergreen-090514-1%7cONSEM_kwid_43700007034273533&gclid=Cj0KCQiAm4TyBRDgARIsAOU75sqF-juw5e1YlRj0_2NdQUlm_hhv3JNTQpVMARRdDLKk42BC8tkkew8aAqEJEALw_wcB&gclsrc=aw.ds`);
    }else if(os == 'android'){
      window.open(`https://play.google.com/store?utm_source=emea_Med&utm_medium=hasem&utm_content=090514&utm_campaign=Evergreen&pcampaignid=MKT-EG-emea-pl-all-Med-hasem-py-Evergreen-090514-1%7cONSEM_kwid_43700007034273533&gclid=Cj0KCQiAm4TyBRDgARIsAOU75sqF-juw5e1YlRj0_2NdQUlm_hhv3JNTQpVMARRdDLKk42BC8tkkew8aAqEJEALw_wcB&gclsrc=aw.ds`);
    }else if(os == 'ios'){
      window.open(`https://www.apple.com/ios/app-store/`);
    }
  }

  const goToDownloadAndroid = ()=>{
    window.open(`https://play.google.com/store?utm_source=emea_Med&utm_medium=hasem&utm_content=090514&utm_campaign=Evergreen&pcampaignid=MKT-EG-emea-pl-all-Med-hasem-py-Evergreen-090514-1%7cONSEM_kwid_43700007034273533&gclid=Cj0KCQiAm4TyBRDgARIsAOU75sqF-juw5e1YlRj0_2NdQUlm_hhv3JNTQpVMARRdDLKk42BC8tkkew8aAqEJEALw_wcB&gclsrc=aw.ds`);
  }

  const goToDownloadIOS = ()=>{
    window.open(`https://www.apple.com/ios/app-store/`);
  }

  return (
    <div className="footer-container">
      <Link to={'/?section=home&moving=false'}><img src="/assets/logos_bizcaters.png" className="logo-footer"/></Link>
      <Link to="/ordenar_catering" className="link-footer">Solicitar Catering</Link>
      <Link to="/registrar_catering" className="link-footer">Registra tu Empresa</Link>
      <Link to="preguntas_frecuentes" className="link-footer">Preguntas frecuentes</Link>
      {/*<Link to="terminos_y_condiciones" className="link-footer">Términos y Condiciones</Link>*/}
      <div className="container-icons">
        <a href="https://www.facebook.com/Bizcaters-110367850558116/?ref=br_rs" className="container-icon"><img className="icon" src="/assets/facebook.png" /></a>
        <a href="https://instagram.com/bizcaters?igshid=1dq7i2fyb52av" className="container-icon"><img className="icon" src="/assets/instagram.png" /></a>
        <a href="https://www.linkedin.com/company/tuschefs/about/?viewAsMember=true" className="container-icon"><img className="icon" src="/assets/linkedin.png" /></a>
        <a href="https://api.whatsapp.com/send?phone=+51969639848" className="container-icon"><img className="icon" src="/assets/whatsapp.png" /></a>
      </div>
    </div>
  );
}

export default Footer;
