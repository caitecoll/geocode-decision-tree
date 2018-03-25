import React from 'react';
import CSSModules from 'react-css-modules';
import StageHeader from './components/StageHeader'
import Choice from './components/Choice/Choice'
import Grid from "react-bootstrap/es/Grid";
import Row from "react-bootstrap/es/Row";

import recycle from '../../assets/images/recycle.png';
import styles from './StageDisplay.css';

const StageDisplay = (props) => {
  /* Need to change this to props.choices once we have that from the
  parent container, but just hard-coding in a constant for now */
  const choices = props.activeStage.choices || [];
  const stage = props.activeStage;

  function setContent() {
    if (stage.index == 200){
      return (
        <div>Throw it in the Trash!</div>
      );
    } else if (stage.index == 100){
      return (
        <div styleName="container">
          <img styleName="image" src={recycle} />
          <h2>Recycle It!</h2>
        </div>
      );
    } else {
      return (
        <Grid fluid={true}>
            <Row>
              {choices.map((choice, index) => { return (<Choice key={index} choice={choice} updateStage={props.updateStage}></Choice>)})}
            </Row>
            <p>Select one of the above options to find out if the item is recyclable. </p>
        </Grid>
      );
    }
  }

    return (
        <div>
            <StageHeader stage={stage} ></StageHeader>
            {setContent()}
        </div>
    );
};

export default CSSModules(StageDisplay, styles);
