import {
    CHANGE_DASHBOARD_BACKGROUND_COLOR,
    TOGGLE_DASHBOARD_BOTTOM_PANEL_VISIBILITY
} from '../actions/constants';

import { LOCATION_CHANGE } from 'react-router-redux';

import {combineReducers} from 'redux';

const backgroundColorReducer = (state = 'f2f2f2', action) => {
    switch (action.type) {
        case CHANGE_DASHBOARD_BACKGROUND_COLOR:
            return action.backgroundColor;
        default:
            return state;
    }
}

export const getBackgroundColor = (state) => state.dashboard.backgroundColor;

const bottomPanelVisibilityReducer = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_DASHBOARD_BOTTOM_PANEL_VISIBILITY:
        case LOCATION_CHANGE:
            if(action.payload.pathname == '/') {
                return false;
            } else {
                return true;
            }
        default:
            return state;
    }
};

export const getIsBottomPanelVisible = (state) => state.dashboard.isBottomPanelVisible;

const dashboardReducer = combineReducers({
    backgroundColor: backgroundColorReducer,
    isBottomPanelVisible: bottomPanelVisibilityReducer
});

export default dashboardReducer;