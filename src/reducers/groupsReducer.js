import {ADD_GROUP} from '../actions/constants';

const initialState = [
    {
        id: 0,
        name: 'Uncategorized',
        color: '999999',
        dateAdded: new Date(2014).toString()
    }
];

const groupsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GROUP:
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    color: action.color,
                    dateAdded: action.dateAdded
                }
            ]
        default:
            return state;
    }
}

export const getGroupsSortedByDate = (state) =>
    state.groups.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));

export default groupsReducer;