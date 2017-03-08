import {ADD_GROUP} from '../actions/constants';

const groupsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_GROUP:
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    color: action.color
                }
            ]
        default:
            return state;
    }
}

export const getGroups = (state) => state.groups;

export default groupsReducer;