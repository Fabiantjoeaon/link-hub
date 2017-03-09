import linksReducer from './linksReducer';
import groupsReducer from './groupsReducer';
import dashboardReducer from './dashboardReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    groups: groupsReducer,
    links: linksReducer,
    dashboard: dashboardReducer
});

export default rootReducer;