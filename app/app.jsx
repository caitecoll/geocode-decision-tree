import React from 'react';
import { render } from 'react-dom';

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
import HelloWorld from './components/HelloWorld';

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={HelloWorld}/>
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('main'));
