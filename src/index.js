import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './home';

ReactDOM.render(<BrowserRouter>

<Route exact path="/" component={App} />
<Route exact path="/home" component={Home} />
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
