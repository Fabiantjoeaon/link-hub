import * as actionTypes from './constants';
import v4 from 'node-uuid';

export const addLink = (id, url, description) => ({
    type: actionTypes.ADD_LINK,
    id: v4(),
    url,
    description
});