import {combineReducers} from 'redux';

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
    linkReducer
});

export default rootReducer;