import {combineReducers} from 'redux';
import {ADD_LINK} from '../actions/constants';

const linkReducer = (state = {}, action) => {
    switch(action.type) {
        case ADD_LINK:
            return [
                ...state,
                {
                    id: action.id,
                    url: action.url,
                    description: action.description
                }
            ];
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    links: linkReducer
});

export default rootReducer;