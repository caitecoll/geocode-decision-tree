import React from 'react';

const Choice = (props) => {
  return (
    <div>
      <img src={props.choice.image} />
      <div>{props.choice.title}</div>
      <div>{props.choice.description}</div>
    </div>
  );
};

export default Choice;
