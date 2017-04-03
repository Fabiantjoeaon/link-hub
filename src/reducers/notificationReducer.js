import {
    SET_NOTIFICATION,
    SET_ERROR
} from '../actions/constants';

const initialState = {
    notificationType: '',
    message: ''
}

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NOTIFICATION:
        case SET_ERROR:
            return Object.assign({}, {
                notificationType: action.notificationType,
                message: action.message
            });
        default:
            return state;
    }
}

export default notificationReducer;