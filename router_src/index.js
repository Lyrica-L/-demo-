import React from 'react';
import ReactDOM from 'react-dom';
import {Route,HashRouter} from 'react-router-dom';
import App from './App';
import Home from './Home';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';

ReactDOM.render(
    <HashRouter>
        <App>
            <Route exact path="/" component={Home}/>
            <Route path="/Chapter1" component={Chapter1}/>
            <Route path="/Chapter2" component={Chapter2}/>
        </App>
    </HashRouter>,
    document.getElementById('root')
);
