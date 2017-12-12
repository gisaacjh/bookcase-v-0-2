import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landing.js';
import NavBar from './navBar.js';
import SignUpView from './signUp.js';
import ProjectsView from './projectView.js';
import LogIn from './logIn.js';
import UserView from './userView.js';
import AboutView from './aboutView.js';
import ReadingView from './readingView.js'
import CategoriesView from './categoriesView.js';

class ContentApp extends Component {
  render () {
    return (
      <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signUp" component={SignUpView} />
        <Route exact path="/projectView" component={ProjectsView} />
        <Route exact path="/logIn" component={LogIn} />
        <Route exact path="/userView" component={UserView} />
        <Route exact path="/aboutView" component={AboutView} />
        <Route exact path="/readingView" component={ReadingView} />
        <Route exact path="/categoriesView" component={CategoriesView} />
      </Switch>
      </div>
    );
  }
};

export default ContentApp
