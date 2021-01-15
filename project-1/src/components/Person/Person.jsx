import React from 'react';

const person = (props) => {
  return (
    <div onClick={() => props.handleClick('Jefferson') }>
      <p>I'm {props.name} and I am {props.age}</p>
      {props.children ? <p>{props.children}</p> : null }
    </div>
  )
}

export default person;