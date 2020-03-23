import React, {useEffect} from 'react';
import FAQs from './FAQs/FAQs';

const FAQ = ()=>{
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div className="full-container">
      <FAQs/>
    </div>
  );
}

export default FAQ;
