import React from 'react';
import {Provider} from 'react-redux';
import {IndexRoute, Router, Route} from 'react-router';

import Dashboard from './Dashboard';
import AddLinkPanel from './AddLinkPanel';

//TODO: Maybe a /:cat filter?
const Root = ({store, history}) => (
    <Provider
        store={store}>
        <Router history={history}>
            <Route path="/" component={Dashboard}>
                <Route path="/add_link" component={AddLinkPanel}/>
            </Route>
        </Router>
    </Provider>
)

export default Root;
