import React from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

/* the main page for the index route of this app */
const LeftNav = (stagesObject) => {
    console.log(stagesObject.stages);
    const displayStages = [];
    for (let property in stagesObject.stages) {
        if (stagesObject.stages.hasOwnProperty(property)) {
            displayStages.push(stagesObject.stages[property]);
        }
    }
    console.log(displayStages)
    return (
        <ListGroup>
            <ListGroupItem>{displayStages[0] && displayStages[0].stage_name}</ListGroupItem>
            <ListGroupItem>{displayStages[1] && displayStages[1].stage_name}</ListGroupItem>
        </ListGroup>
    );
};

export default LeftNav;
