import React from 'react';
// const Link = require('react-router-dom').Link
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
// const ListGroupItem = require('react-bootstrap/lib/ListGroupItem');

/* the main page for the index route of this app */
const LeftNav = () => (
  <ListGroup>
    <ListGroupItem>Item 1</ListGroupItem>
    <ListGroupItem>Item 2</ListGroupItem>
  </ListGroup>
);

export default LeftNav;
