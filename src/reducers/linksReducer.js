import {ADD_LINK, DELETE_LINK} from '../actions/constants';

const linksReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_LINK:
            return [
                ...state,
                {
                    id: action.id,
                    url: action.url,
                    description: action.description,
                    group: action.group,
                }
            ];
        default:
            return state;
    }
}

export const getLinksByGroup = (state, group) => state.links.filter(f => f.group);

export default linksReducer;