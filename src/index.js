import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import configureStore from './store';

if(module.hot) {
    module.hot.accept();
}

const store = configureStore();

ReactDOM.render(
    <Root store={store} />,
    document.querySelector('.App')
);