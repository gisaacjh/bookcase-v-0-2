import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './components/landing.js';
import NavBar from './components/navBar.js';
import SignUpView from './components/signUp.js';


class App extends React.Component {
  render () {
    return <div className="app">
            <header className="header">
              <NavBar />
            </header>
              <div>
              <Switch>
                <Route exact path="/components/landing" component={Landing} />
                <Route exact path="/components/signUp" component={SignUpView} />
                <Routh exact path="/components/projectViews" component={ProjectsView} />
              </Switch>
              </div>
              <div>

              </div>
           </div>
  }
}

ReactDOM.render(<BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById('app-container'));
