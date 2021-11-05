import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import LandingPage from './containers/LandingPage/LandingPage';
import FriendsList from './containers/FriendsList/FriendsList';

class App extends Component {
  render() {
    console.log('[App.js] render')
    let routes = (
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/friendlist" exact component={FriendsList} />
        <Redirect to="/" />
      </Switch>
    );
    return (
      routes
    );
  }
}

export default App;

