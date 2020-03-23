import React, { useState, useEffect } from 'react';
import './OrderCatering.scss';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import VisibilitySensor from 'react-visibility-sensor';
import swal from 'sweetalert';
import {
  useHistory
} from "react-router-dom";

const OrderCatering = React.forwardRef((props, ref)=>{
  const history = useHistory();
  const [eventType, setEventType] = useState('Coffee Break');
  const [otherEventType, setOtherEventType] = useState('Coffee Break');

  const [optionEventType, setOptionEventType] = useState(false);

  const handleChangeEventType = (e)=>{
    let newEventType = e.target.value
    setEventType(newEventType);
    if (newEventType == 'Otro'){
      setOptionEventType(true);
    }else{
      setOptionEventType(false);
    }
  }

  const handleChangeOther = (e) => {
    let otherEventType = e.target.value;
    setOtherEventType(otherEventType);
  }

  const submitForm = (e)=>{
    e.preventDefault();
    const {name, email, phone, details} =  e.target.elements;
    const google_sheets_ulr = 'https://script.google.com/macros/s/AKfycbyK7u-uRtGzgaw6hVtP5MjJyOrF1GLo_a8UdosaMk0N-QqF4aw/exec';
    if(!name.value){
      swal({text: "Porfavor ingrese su nombre", buttons: false, timer: 4000})
    }else if(!email.value){
      swal({text: "Porfavor ingrese su correo", buttons: false, timer: 4000})
    }else if(!phone.value){
      swal({text: "Porfavor ingrese el nombre del teléfono de la empresa", buttons: false, timer: 4000})
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
      formData.append('details', details.value);
      formData.append('event', eventType);
      formData.append('other_event', otherEventType);
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
        <div className="title-request">Ordena tu catering</div>
        <div className="subtitle-request">¡Ahorra dinero y gana productividad! Por favor llena el formulario con tus datos y nos contactaremos contigo: </div>
        <form onSubmit={submitForm} className="form-container">
          <input name="name" type="name" className="input-form" placeholder="Nombre" required></input>
          <input name="email" type="email" className="input-form" placeholder="Correo" required></input>
          <input name="phone" type="tel" className="input-form" placeholder="Teléfono de la empresa" required minlength={6}></input>
          <div className="label-event">¿Qué tipo de evento desea cubrir?</div>
          <Select
              className="select-container"
              value={eventType}
              onChange={handleChangeEventType}
            >
              <MenuItem value={'Coffee Break'}>Coffee Break</MenuItem>
              <MenuItem value={'Desayuno'}>Desayuno</MenuItem>
              <MenuItem value={'Almuerzo'}>Almuerzo</MenuItem>
              <MenuItem value={'Otro'}>Otro</MenuItem>
          </Select>
          {optionEventType &&
            <input onChange={handleChangeOther} className="input-form" placeholder="Describe el evento que deseas cubrir" required></input>
          }
          <div className="comment-label">¿Te gustaría añadir algo más?</div>
          <textarea name="details" className="comment" rows="5"></textarea>
          <button type="submit" className="button-request">Solicitar</button>
        </form>
      </div>
    </div>
  );
});

export default OrderCatering;
