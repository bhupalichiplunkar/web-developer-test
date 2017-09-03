import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router , browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';
import reducers from './reducers/index';
import routes from './route';
injectTapEventPlugin();

const createStoreWithMiddleWare = applyMiddleware()(createStore)

ReactDOM.render(
    <Provider store = { createStoreWithMiddleWare(reducers) }> 
        <Router history ={browserHistory} routes= { routes }/>
    </Provider>, 
document.getElementById('root'));
