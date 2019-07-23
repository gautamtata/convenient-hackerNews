import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SplitterLayout from 'react-splitter-layout'
import 'react-splitter-layout/lib/index.css'
import App from './App';
import TestComponent from './testComponent'
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render( <SplitterLayout>
    <App />
    <TestComponent />
</SplitterLayout>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
