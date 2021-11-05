import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Read from './pages/Read';

const App = () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path = '/' component={Read}/>
            </Switch>
        </Router>
    )
}

export default App;