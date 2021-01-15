import React from 'react';
import "./Person.css";

const person = (props) => {
  return (
    <div className='Person' onClick={() => props.handleClick('Jefferson') }>
      <p>I'm {props.name} and I am {props.age}</p>
      {props.children ? <p>{props.children}</p> : null }
      {/* { props.nameChanged ? <input type='text' onChange={props.handleChange}} */}
    </div>
  )
}

export default person;