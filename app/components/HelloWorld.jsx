import React from 'react';
import LeftNav from './LeftNav';

const firebase = require('firebase');

/* the main page for the index route of this app */
const HelloWorld = () => {
    var dbRef = firebase.app().database().ref('/categories/foodAndLiquidContainers');
    var stages;
    dbRef.on("value", function(snapshot) {
        console.log(snapshot.val());
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });

    return (
        <div>
            <h1>Hello World!</h1>
            <LeftNav/>
        </div>
    );
};

export default HelloWorld;
