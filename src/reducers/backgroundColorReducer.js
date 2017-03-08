import {CHANGE_DASHBOARD_BACKGROUND_COLOR} from '../actions/constants';

const backgroundColorReducer = (state = 'f2f2f2', action) => {
    switch(action.type)
    {
        case CHANGE_DASHBOARD_BACKGROUND_COLOR:
            return action.color
        default:
            return state;
    }
}

export default backgroundColorReducer;