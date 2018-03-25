import React, { Component } from 'react';
import LeftNav from './LeftNav';
import StageDisplay from './StageDisplay/StageDisplay'
import Grid from "react-bootstrap/es/Grid";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";

const firebase = require('firebase');

/* the main page for the index route of this app */
class DecisionTree extends Component {

    constructor() {
        super();

        this.state = {
            stages: {},
            activeStage: {}
        }
    }

    static findActiveStage(stages) {
        let activeStage = {};
        for (let stageId in stages) {
            if (stages.hasOwnProperty(stageId)) {
                if (stages[stageId].index === 1) {
                    activeStage = stages[stageId];
                }

                if (stages[stageId].isActive) {
                    activeStage = stages[stageId];
                }
            }
        }
        return activeStage;
    }

    componentDidMount() {
        const dbRef = firebase.app().database().ref('/categories/foodAndLiquidContainers');
        dbRef.on("value", (snapshot) => {
            const stages = snapshot.val();
            let activeStage = DecisionTree.findActiveStage(stages);
            console.dir(stages);
            this.setState({stages: snapshot.val(), activeStage});
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={4} md={4} lg={4} >
                        <LeftNav stages={this.state.stages}/>
                    </Col>
                    <Col xs={8} md={8} lg={8}>
                        <h1>The Decision Tree</h1>
                        <StageDisplay activeStage={this.state.activeStage}></StageDisplay>
                    </Col>
                </Row>
            </Grid>
        );
    }

};

export default DecisionTree;