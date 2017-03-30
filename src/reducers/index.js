import dashboardReducer from './dashboardReducer';
import {reducer as formReducer} from 'redux-form';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'
import client from '../graphql/apolloClient';

const rootReducer = combineReducers({
    routing: routerReducer,
    form: formReducer,
    apollo: client.reducer(),
    dashboard: dashboardReducer,
});

export default rootReducer;