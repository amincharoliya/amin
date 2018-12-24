import React, { Component } from 'react';
import Home from './home';
import Notfound from './notfound';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
                <main>
                    <div className="main-area">
                      <Switch>
                          <Route exact path="/" component={Home} />
                          <Route component={Notfound} />
                      </Switch>
                    </div>
                </main>   
            </Router>
      
    );
  }
}

export default App;
