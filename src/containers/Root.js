import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, useRouterHistory} from 'react-router';
import createBrowserHistory from 'react-router/node_modules/history/lib/createBrowserHistory';
import Dashboard from './Dashboard';

const browserHistory = useRouterHistory(createBrowserHistory)({
   basename: '/'
});

const Root = ({store}) => (
    <Provider
        store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Dashboard}/>
        </Router>
    </Provider>
)

export default Root;
