import React from 'react';
import './Word.css';

const Word = (props) => {
   return (
      <div className="word">
         <span style={{ color: 'red' }}>{props.en}</span>
         <span> &#8594; </span>
         <span style={{ color: 'green' }}>{props.pl}</span>
      </div>
   );
};

export default Word;
