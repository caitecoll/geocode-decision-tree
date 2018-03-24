import React from 'react';
import LeftNav from './LeftNav';

const firebase = require('firebase');

/* the main page for the index route of this app */
const HelloWorld = () => {
    var dbRef = firebase.app().database().ref('/categories/foodAndLiquidContainers');
    // dbRef.push({
    //     "index" : 1,
    //     "previous_stage": 5,
    //     "stage_name": "flexibility",
    //     "description": "Is your material rigid or flexible?",
    //     "choices": [
    //         {
    //             "title": "Rigid",
    //             "image": "kslndvipdfbnw",
    //             "description": "An item qualifies as rigid if you set it on a table and it would retain its shape.",
    //             "next_stage": "color"
    //         },
    //         {
    //             "title": "Flexible",
    //             "image": "kslndvipdfbnw",
    //             "description": "A description for flexible goes here.",
    //             "next_stage": "stretchy"
    //         }
    //     ]
    // }).then((response) => {
    //     console.dir(response)
    // })
    var stages;

    return (
        <div>
            <h1>Hello World!</h1>
            <LeftNav/>
        </div>
    );
}
)
;

export default HelloWorld;
