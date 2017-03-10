import React from 'react';
import {Provider} from 'react-redux';
import Dashboard from './Dashboard';
import {Router, Route, IndexRoute} from 'react-router';
import {history} from '../index';
import AddLinkPanel from './AddLinkPanel';

//TODO: Maybe a /:cat filter?
const Root = ({store, history}) => (
    <Provider
        store={store}>
        <Router history={history}>
            <Route path="/" component={Dashboard}>
                <Route path="/add_link" component={AddLinkPanel}></Route>
            </Route>
        </Router>
    </Provider>
)

export default Root;
