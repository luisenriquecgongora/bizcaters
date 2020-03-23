import React, {useState} from 'react';
import './Question.scss';
import VisibilitySensor from 'react-visibility-sensor';
import { Markup } from 'interweave';

const Question = (props)=>{
  const [open, setOpen] = useState(false);
  const toggleQuestion = ()=>{
    setOpen(!open)
  }
  return (
    <div className="container-question">
      <div className="question" onClick={toggleQuestion}>{props.order+1}. {props.question} <i className="material-icons icon-dropdown">{open ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</i></div>
      {
        open &&
        <div className="answer">
          <Markup content={props.answer}/>
        </div>
      }
    </div>
  );
}

export default Question;
