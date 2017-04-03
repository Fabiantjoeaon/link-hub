import * as actionTypes from './constants';

export const changeBackgroundColor = (backgroundColor) => ({
    type: actionTypes.CHANGE_DASHBOARD_BACKGROUND_COLOR,
    backgroundColor
});

export const setNotification = (message) => ({
    type: actionTypes.SET_NOTIFICATION,
    message
});

export const setError = (message) => ({
    type: actionTypes.SET_ERROR,
    message
});