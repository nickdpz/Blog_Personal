import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import initialState from './initialState'
import App from './routes/App';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));
const preloadedState = store.getState();
console.log(preloadedState);

ReactDOM.render(
    <Provider store={store}>
         <App isLogged={(preloadedState.user.id)} />
    </Provider>,
    document.getElementById('app')
);
