import * as actionTypes from './constants';

export const addLink = (id, url, description) => ({
    type: actionTypes.ADD_LINK,
    id,
    url,
    description
});