import linksReducer from './linksReducer';
import groupsReducer from './groupsReducer';
import backgroundColorReducer from './backgroundColorReducer';
import {combineReducers} from 'redux';

//TODO: create selectors

const rootReducer = combineReducers({
    groups: groupsReducer,
    links: linksReducer,
    backgroundColor: backgroundColorReducer
});

export default rootReducer;