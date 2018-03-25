import React from 'react';
import NavItem from "react-bootstrap/es/NavItem";
import Nav from "react-bootstrap/es/Nav";

/* the main page for the index route of this app */
const LeftNav = ({stages, onStageClick}) => {

    const displayStages = [];
    let activeIndex = 1;

    for (let property in stages) {
        if (stages.hasOwnProperty(property)) {
            stages[property].firebaseId = property;
            displayStages.push(stages[property]);
            if (stages[property].isActive) {
                activeIndex = stages[property].index;
                console.log(activeIndex)
            }
        }
    }
    console.log(onStageClick)

    return (
        <Nav activeKey={activeIndex} style={styles.navbarStyles}>
            {
                displayStages.map((stage, index) => {
                    if (stage.isActive) {
                        return (<NavItem eventKey={stage.index}
                                         onClick={() => onStageClick(stage.firebaseId)}
                                         key={index}
                                         style={styles.activeListItem}>{stage && stage.stage_name}</NavItem>);
                    } else {
                        return (<NavItem eventKey={stage.index}
                                         onClick={() => onStageClick(stage.firebaseId)}
                                         key={index}>{stage && stage.stage_name}</NavItem>);
                    }
                })
            }
        </Nav>
    );
};

export default LeftNav;

const styles = {
    activeListItem: {
        backgroundColor: '#D3D3D3',
    },
    navbarStyles: {
        marginTop: '10vh'
    }
};
