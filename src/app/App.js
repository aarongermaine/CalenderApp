import '../styles/App.css';
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../components/Login/'
import Register from '../components/Register/'

class App extends Component {
  render() {
    return (
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/register" component={Register} />
    </Switch>
  </BrowserRouter>
  )
  };
}

export default App;
