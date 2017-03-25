import linksReducer from './linksReducer';
import groupsReducer from './groupsReducer';
import dashboardReducer from './dashboardReducer';
import {reducer as formReducer} from 'redux-form';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'
import client from '../apollo';

const rootReducer = combineReducers({
    routing: routerReducer,
    form: formReducer,
    apollo: client.reducer(),
    dashboard: dashboardReducer,
    groups: groupsReducer,
    links: linksReducer
});

export default rootReducer;