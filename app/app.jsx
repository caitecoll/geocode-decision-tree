import firebase from 'firebase';
import React from 'react';
import { render } from 'react-dom';

var config = {
    apiKey: "AIzaSyDM_Ny1NVCkqMwZqnOU7BQXm4aqzNCDQ-s",
    authDomain: "decisiontree-72710.firebaseapp.com",
    databaseURL: "https://decisiontree-72710.firebaseio.com",
    projectId: "decisiontree-72710",
    storageBucket: "",
    messagingSenderId: "954065223280"
};
firebase.initializeApp(config);
// router
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import { hashHistory } from 'react-router-dom';

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
const votes = require('./reducers');

let store = createStore(votes);

/* Import Components */
import DecisionTree from './components/DecisionTree';

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={DecisionTree}/>
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('main'));
