import './css/index.scss';
import * as React from'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from "./redux/Store";
import Root from "./Root";

ReactDOM.render((
    <Root store={store}/>
), document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
{
    {/*<Provider store={store}>*/}
    {/*    <Router>*/}
    {/*        <App/>*/}
    {/*    </Router>*/}
    {/*</Provider>*/}
}

