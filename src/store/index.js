import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const configureStore = () => {
    return createStore(
        rootReducer,
        {},
        window.devToolsExtension ? window.devToolsExtension() : f => f
    );
}

export default configureStore;