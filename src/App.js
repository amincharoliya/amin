import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './home';
import Notfound from './notfound';
import { setTheme } from './utils/setTheme';

import './App.css';

const App = () => {
    const [togClass, setToggleClass] = React.useState('dark');
    let theme = localStorage.getItem('theme');

    const SwitchTheme = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setToggleClass('light')
        } else {
            setTheme('theme-dark');
            setToggleClass('dark')
        }
    }

    React.useEffect( () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setToggleClass('dark')
            setTheme('theme-dark');
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setToggleClass('light')
            setTheme('theme-light');
        }
    }, [theme])

    return (
      <Router>
                <main>
                    <div className="main-area">
                      <nav className="theme-toggle">
                        {
                            togClass === "light" ?
                            <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={SwitchTheme} checked />
                            :
                            <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={SwitchTheme} />
                        }
                        <label htmlFor="toggle" className="toggle--label">
                            <span className="toggle--label-background"></span>
                        </label>
                      </nav>
                      <Switch>
                          <Route exact path="/" component={Home} />
                          <Route component={Notfound} />
                      </Switch>
                    </div>
                </main>   
            </Router>
      
    );
}

export default App;
