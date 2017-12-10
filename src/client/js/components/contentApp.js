import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landing.js';
import NavBar from './navBar.js';
import SignUpView from './signUp.js';
import ProjectsView from './projectView.js';
import LogIn from './logIn.js';
import UserView from './userView.js';
import AboutView from './aboutView';


class ContentApp extends Component {
  render () {
    return (
      <div>
      <Switch>
        <Route exact path="/components/landing" component={Landing} />
        <Route exact path="/components/signUp" component={SignUpView} />
        <Route exact path="/components/projectView" component={ProjectsView} />
        <Route exact path="/components/logIn" component={LogIn} />
        <Route exact path="/components/userView" component={UserView} />
        <Route exact path="/components/aboutView" component={AboutView} />
      </Switch>
      </div>
    );
  }
};

export default ContentApp