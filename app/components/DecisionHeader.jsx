import React from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

/* the main page for the index route of this app */
const DecisionHeader = ({activeStage}) => {
    return (
        <div>
            <h1>{!!activeStage && activeStage.stage_name}</h1>
            <h3>{!!activeStage && activeStage.description}</h3>
        </div>
    );
};

export default DecisionHeader;
