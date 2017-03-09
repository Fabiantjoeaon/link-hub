import linksReducer from './linksReducer';
import groupsReducer from './groupsReducer';
import dashboardReducer from './dashboardReducer';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
    routing: routerReducer,
    groups: groupsReducer,
    links: linksReducer,
    dashboard: dashboardReducer
});

export default rootReducer;