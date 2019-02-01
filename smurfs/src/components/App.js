import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SmurfsView from '../views/SmurfsView';
import SmurfFormView from '../views/SmurfFormView';

import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={SmurfsView} />
        <Route path='/smurf-form' component={SmurfFormView} />
      </div>
    );
  }
}

export default App;
