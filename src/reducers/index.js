import linksReducer from './linksReducer';
import groupsReducer from './groupsReducer';
import dashboardReducer from './dashboardReducer';
import {combineReducers} from 'redux';
import {routerStateReducer} from 'redux-router';

const rootReducer = combineReducers({
    router: routerStateReducer,
    groups: groupsReducer,
    links: linksReducer,
    dashboard: dashboardReducer
});

export default rootReducer;