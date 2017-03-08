import * as actionTypes from './constants';
import v4 from 'node-uuid';

export const addLink = (url, description, group) => ({
    type: actionTypes.ADD_LINK,
    id: v4(),
    url,
    description,
    group
});

export const addGroup = (name, color) => ({
    type: actionTypes.ADD_GROUP,
    id: v4(),
    name,
    color
});

export const changeBackgroundColor = (color) => ({
    type: actionTypes.CHANGE_DASHBOARD_BACKGROUND_COLOR,
    color: color
});