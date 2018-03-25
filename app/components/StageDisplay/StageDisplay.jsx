import React from 'react';
import StageHeader from './components/StageHeader'
import Choice from './components/Choice'

const StageDisplay = (props) => {
  /* Need to change this to props.choices once we have that from the
  parent container, but just hard-coding in a constant for now */
  const choices = [
    {
      title: "Test",
      image: "https://www.fillmurray.com/200/300",
      description: "awesome description"
    },
    {
      title: "Test",
      image: "https://www.fillmurray.com/200/300",
      description: "awesome description"
    },
    {
      title: "Test",
      image: "https://www.fillmurray.com/200/300",
      description: "awesome description"
    },
  ];

  const stage =
  {
    stage_name: "Rigid or Flexible?",
    description: "This is the stage description"
  }

  return (
    <div>
      <StageHeader stage={stage} ></StageHeader>
      {choices.map((choice, index) => { return (<Choice key={index} choice={choice}></Choice>)})}
    </div>
  );
};

export default StageDisplay;
