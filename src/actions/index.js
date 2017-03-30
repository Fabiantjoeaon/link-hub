import * as actionTypes from './constants';

export const changeBackgroundColor = (backgroundColor) => ({
    type: actionTypes.CHANGE_DASHBOARD_BACKGROUND_COLOR,
    backgroundColor
});