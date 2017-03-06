import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, useRouterHistory} from 'react-router';
import createBrowserHistory from 'react-router/node_modules/history/lib/createBrowserHistory';
import Dashboard from './Dashboard';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

const browserHistory = useRouterHistory(createBrowserHistory)({
   basename: '/'
});

//TODO: Maybe a /:cat filter?
const Root = ({store}) => (
    <Provider
        store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Dashboard}/>
        </Router>
    </Provider>
)

export default DragDropContext(HTML5Backend)(Root);
