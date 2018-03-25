import React from 'react';
import StageHeader from './components/StageHeader'
import Choice from './components/Choice/Choice'
import Grid from "react-bootstrap/es/Grid";
import Row from "react-bootstrap/es/Row";

const StageDisplay = (props) => {
  /* Need to change this to props.choices once we have that from the
  parent container, but just hard-coding in a constant for now */
  const choices = props.activeStage.choices || [];
  const stage = props.activeStage;

  return (
    <div>
      <StageHeader stage={stage} ></StageHeader>
      <Grid fluid={true}>
          <Row>
            {choices.map((choice, index) => { return (<Choice key={index} choice={choice} updateStage={props.updateStage}></Choice>)})}
          </Row>
      </Grid>
    </div>
  );
};

export default StageDisplay;
