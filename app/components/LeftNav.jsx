import React from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

/* the main page for the index route of this app */
const LeftNav = ({stages}) => {

    const displayStages = [];

    for (let property in stages) {
        if (stages.hasOwnProperty(property)) {
            displayStages.push(stages[property]);
        }
    }

    return (
        <ListGroup>
            {
                displayStages.map((stage) => {
                    return (<ListGroupItem key={stage.index} >{stage && stage.stage_name}</ListGroupItem>);
                })
            }
        </ListGroup>
    );
};

export default LeftNav;
