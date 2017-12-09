import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import ContentApp from './components/contentApp.js';
import NavBar from './components/navBar.js';

class App extends React.Component {
  render () {
    return <div className="app">
            <header className="header">
              <NavBar />
            </header>
              <div className="content-app">
                <ContentApp />
              </div>
           </div>
  }
}

ReactDOM.render(<BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById('app-container'));
