import linksReducer from './linksReducer';
import groupsReducer from './groupsReducer';
import {combineReducers} from 'redux';

//TODO: create selectors

const rootReducer = combineReducers({
    groups: groupsReducer,
    links: linksReducer
});

export default rootReducer;