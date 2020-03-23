import React, { useState, useEffect } from 'react';
import './RegisterCompany.scss';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import VisibilitySensor from 'react-visibility-sensor';
import swal from 'sweetalert';
import {
  useHistory
} from "react-router-dom";

const RegisterCompany = React.forwardRef((props, ref)=>{
  const history = useHistory();
  const [relationship, setRelationship] = useState('Residente');
  const [optionRelationship, setOptionRelationship] = useState(false);
  const [buildingType, setBuildingType] = useState('Residencial');
  const [optionBuildingType, setOptionBuildingType] = useState(false);

  const toggleOptionRelationship = ()=>{

  }

  const handleChangeRelationship = (e)=>{
    let newRelationsip = e.target.value
    setRelationship(newRelationsip);
    if (newRelationsip == 'Otro'){
      setOptionRelationship(true);
    }else{
      setOptionRelationship(false);
    }
  }

  const handleChangeBuildingType = (e)=>{
    let buildingType = e.target.value
    setBuildingType(buildingType);
    if (buildingType == 'Otro'){
      setOptionBuildingType(true);
    }else{
      setOptionBuildingType(false);
    }
  }

  const submitForm = (e)=>{
    e.preventDefault();
    const { name, email, phone, catering, details } =  e.target.elements;
    const google_sheets_ulr = 'https://script.google.com/macros/s/AKfycbzQPBI_e8O_pCedj4W0feBfA0YRt2bp-kBr6eDECLYk6fbsTtw/exec';
    if(!name.value){
      swal({text: "Porfavor ingrese su nombre", buttons: false, timer: 4000})
    }else if(!email.value){
      swal({text: "Porfavor ingrese su correo", buttons: false, timer: 4000})
    }else if(!phone.value){
      swal({text: "Porfavor ingrese su número de teléfono", buttons: false, timer: 4000})
    }else if(!catering.value){
      swal({text: "Porfavor ingrese su apellido", buttons: false, timer: 4000})
    }else{
      /*
      POST TO GOOGLE FORMS
      */
      swal({
        title: '',
        text: 'Enviando solicitud...',
        button: false,
        className: 'send-mail-alert'
      })
      var formData = new FormData();
      formData.append('name', name.value);
      formData.append('email', email.value);
      formData.append('phone', phone.value);
      formData.append('catering', catering.value);
      formData.append('details', details.value);
      return fetch( google_sheets_ulr,{ method: 'POST', body: formData, mode: 'cors'})
      .then((response) => {
        if (response.ok) {
          swal({text: "¡Gracias por llenar el formulario, nos comunicaremos contigo en las próximas 48 horas!", buttons: false, timer: 4000})
        }else{
          swal({text: "¡Lo sentimos! Inténtelo nuevamente más adelante", buttons: false, timer: 4000})
        }
        history.push("/");
      });
    }
  }

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <div className="full-container">
      <div ref={ref} className="request-container">
        <div className="title-request">Registra tu Catering</div>
        <div className="subtitle-request">¡Sé un catering Bizcaters! Gracias por querer ser parte de la familia Bizcaters, por favor responde las siguientes preguntas: </div>
        <form onSubmit={submitForm} className="form-container">
          <input name="name" type="name" className="input-form" placeholder="Nombre" required></input>
          <input name="email" type="email" className="input-form" placeholder="Correo" required></input>
          <input name="phone" type="tel" className="input-form" placeholder="Número de teléfono" required minlength={3}></input>
          <input name="catering" type="name" className="input-form" placeholder="Nombre del Catering" required minlength={3}></input>
          <div className="comment-label">¿Te gustaría añadir algo más?</div>
          <textarea name="details" className="comment" rows="5"></textarea>
          <button className="button-request">Registrar mi Catering</button>
        </form>
      </div>
    </div>
  );
});

export default RegisterCompany;
