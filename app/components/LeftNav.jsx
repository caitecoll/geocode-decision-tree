import React from 'react';
import NavItem from "react-bootstrap/es/NavItem";
import Nav from "react-bootstrap/es/Nav";

/* the main page for the index route of this app */
const LeftNav = ({stages, onStageClick, activeStage}) => {

    let activeIndex = 1;

    if (stages.length > 0) {
        return (
            <Nav activeKey={activeIndex} style={styles.navbarStyles}>
                {stages.map((stage, index) => {
                    if (stage.index === activeStage.index) {
                        return (<NavItem eventKey={stage.index}
                                         onClick={() => onStageClick(stage.firebaseId)}
                                            key={index}
                                         style={styles.activeListItem}>{stage && stage.stage_name}</NavItem>);
                    } else {
                        return (<NavItem eventKey={stage.index}
                                         onClick={() => onStageClick(stage.firebaseId)}
                                         style={styles.nonactiveListItem}
                                         key={index}>{stage && stage.stage_name}</NavItem>);
                    }
                })
                }
            </Nav>
        );
    } else {
        return (<Nav activeKey={activeIndex} style={styles.navbarStyles}></Nav>)
    }
};

export default LeftNav;

const styles = {
    activeListItem: {
        backgroundColor: '#aaaaaa',
    },
    nonactiveListItem: {
        backgroundColor: '#dddddd',
    },
    navbarStyles: {
        marginTop: '10vh'
    }
};
