import React from 'react';
import './Person.css'

const person = (props) => {
  return (
  <div className="Person">
    <p> I'm {props.name} and I'm {props.age} years old</p>
    <p onClick={props.passClick}>{props.children}</p>
    <input 
      onChange={props.changed}
      value={props.name}
      type="text"/>
  </div>
  
  )
};

export default person;