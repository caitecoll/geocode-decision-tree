import React from 'react';
import CSSModules from 'react-css-modules';
import Col from "react-bootstrap/es/Col";
import Image from "react-bootstrap/es/Image";
import Panel from "react-bootstrap/es/Panel";

import styles from './Choice.css';

const Choice = (props) => {
  return (
    <Col xs={6} md={6} lg={6}>
      <div onClick={() => props.updateStage(props.choice.next_stage)}>
        <Panel bsStyle="primary">
          <Panel.Heading>{props.choice.title}</Panel.Heading>
          <Panel.Body>
            <div styleName="container">
              <Image src={props.choice.image} styleName="image" rounded />
              <div>{props.choice.description}</div>
            </div>
          </Panel.Body>
        </Panel>
      </div>
    </Col>
  );
};

export default CSSModules(Choice, styles);
