import React from 'react';

const person = (props) => {
  return (
    <>
      <p>I'm {props.name} and I am {props.age}</p>
      {props.children ? <p>{props.children}</p> : null }
    </>
  )
}

export default person;