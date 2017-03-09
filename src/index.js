import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import configureStore from './store';
import {syncHistoryWithStore} from 'react-router-redux';
import createBrowserHistory from 'react-router/node_modules/history/lib/createBrowserHistory';
import {useRouterHistory} from 'react-router';

if(module.hot) {
    module.hot.accept();
}

const store = configureStore();

const browserHistory = useRouterHistory(createBrowserHistory)({
    basename: '/'
});
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Root history={history} store={store} />,
    document.querySelector('.App')
);