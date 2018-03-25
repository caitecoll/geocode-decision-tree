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
            activeStage: {},
            chosenStages: []
        }
        this.updateStage = this.updateStage.bind(this);
        // this.getStages = this.getStages.bind(this);
        // this.findNewActiveStage.bind(this);
    }

    changeActiveStage(stageId) {
        this.setState(
          {
            stages: this.state.stages,
            activeStage: this.state.stages[stageId]
          }
        );
    }

    findNewActiveStage(stageIndex) {
      // search for that id in state.stages
      const stages = this.state.stages;

      let active = {};

      // update state.activeStage = that stage
      for (let stageId in stages) {
        if (stages.hasOwnProperty(stageId)) {
          if (stages[stageId].index === stageIndex)
            active = stages[stageId];
          }
        }

      return active;
    }

    // updateStages() {
    //   this.setState({
    //     activeStage: addChosenStage(stage);
    //     chosenStages: getStages(stage)
    //   })
    // }
    //
    // updateLeftNav

    getStages(stage) {
      this.state.chosenStages.push(stage);
      return this.state.chosenStages;
    }

    static findActiveStage(stages) {
        let activeStage = {};
        for (let stageId in stages) {
            if (stages.hasOwnProperty(stageId)) {
                if (stages[stageId].isActive) {
                    activeStage = stages[stageId];
                    activeStage.firebaseId = stageId;
                }
            }
        }
        return activeStage;
    }

    updateStage(nextStageIndex) {
      const activeStage = this.findNewActiveStage(nextStageIndex);

      this.setState({
        activeStage: activeStage,
        chosenStages: this.getStages(activeStage)
      })
      console.log(this.state);
    }

    componentDidMount() {
        const dbRef = firebase.app().database().ref('/categories/foodAndLiquidContainers');
        dbRef.on("value", (snapshot) => {
            const stages = snapshot.val();
            let activeStage = DecisionTree.findActiveStage(stages);
            this.setState(
              {
                stages: snapshot.val(),
                activeStage,
                chosenStages: this.getStages(activeStage)
              }
            );
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={3} md={3} lg={3} >
                        <LeftNav onStageClick={this.changeActiveStage.bind(this)} stages={this.state.chosenStages}/>
                    </Col>
                    <Col xs={9} md={9} lg={9}>
                        <h1>The Decision Tree</h1>
                        <StageDisplay activeStage={this.state.activeStage} updateStage={this.updateStage}></StageDisplay>
                    </Col>
                </Row>
            </Grid>
        );
    }

};

export default DecisionTree;
