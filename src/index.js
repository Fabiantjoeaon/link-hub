import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import createBrowserHistory from 'react-router/node_modules/history/lib/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import {useRouterHistory} from 'react-router';

if(module.hot) {
    module.hot.accept();
}

const browserHistory = useRouterHistory(createBrowserHistory)({
    basename: '/'
});
const middleware = routerMiddleware(browserHistory);

const configureStore = () => {
    return createStore(
        rootReducer,
        {},
        composeWithDevTools(
            applyMiddleware(middleware)
        )
    );
}

const store = configureStore();

export const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Root history={history} store={store} />,
    document.querySelector('.App')
);