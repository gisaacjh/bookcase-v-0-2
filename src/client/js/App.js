import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import NavBar from './components/navBar.js';


class App extends React.Component {
  render (){
    return <div className='content'>
            <header>
              <NavBar />
            </header>
              <div>
                <Switch>

                </Switch>
              </div>
           </div>
  }
}

ReactDOM.render(<BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById('app-container'));
