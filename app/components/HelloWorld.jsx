import React, { Component } from 'react';
import LeftNav from './LeftNav';
import Grid from "react-bootstrap/es/Grid";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";

const firebase = require('firebase');

/* the main page for the index route of this app */
class HelloWorld extends Component {

    constructor() {
        super();

        this.state = {
            stages: {}
        }
    }

    componentDidMount() {
        const dbRef = firebase.app().database().ref('/categories/foodAndLiquidContainers');
        dbRef.on("value", (snapshot) => {
            this.setState({stages: snapshot.val()});
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
                    </Col>
                </Row>
            </Grid>
        );
    }

};

export default HelloWorld;
