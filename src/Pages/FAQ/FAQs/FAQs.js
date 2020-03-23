import React from 'react';
import './FAQs.scss';
import VisibilitySensor from 'react-visibility-sensor';
import Question from './Question/Question.js';
import Questions from './Questions.js';

import {
  useHistory
} from "react-router-dom";

const FAQs = ()=>{
  return (
    <div className="faqs-container">
      <div className="title-faqs">Preguntas Frecuentes</div>
      {Questions.map((question, idx)=>{
        return(
          <Question key={idx} order={idx} question={question.question} answer={question.answer}/>
        )
      })}
    </div>
  );
}

export default FAQs;
