import React from 'react';
import Col from "react-bootstrap/es/Col";
import Image from "react-bootstrap/es/Image";
import Panel from "react-bootstrap/es/Panel";

const Choice = (props) => {
  return (
    <Col xs={6} md={6} lg={6}>
      <Image src={props.choice.image} rounded />
      <div>{props.choice.title}</div>
      <div>{props.choice.description}</div>
    </Col>
  );
};

export default Choice;
