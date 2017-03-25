import React from 'react';
// import {Provider} from 'react-redux';
import Dashboard from './Dashboard';
import {Router, Route} from 'react-router';
import {ApolloProvider} from 'react-apollo';
import client from '../apollo';
import {history} from '../index';
import AddLinkPanel from './AddLinkPanel';

//TODO: Maybe a /:cat filter?
const Root = ({store, history}) => (
    <ApolloProvider
        client={client}
        store={store}>
        <Router history={history}>
            <Route path="/" component={Dashboard}>
                <Route path="/add_link" component={AddLinkPanel}></Route>
            </Route>
        </Router>
    </ApolloProvider>
)

export default Root;
