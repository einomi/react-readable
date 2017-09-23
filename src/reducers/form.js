import { ADD_POST_SUCCESS, ADD_POST_SUCCESS_MESSAGE_SHOWN } from '../actions'

const post = (state = {}, action) => {
    switch (action.type) {
        case ADD_POST_SUCCESS:
            return {
                ...state,
                addPostSuccess: true
            };
        case ADD_POST_SUCCESS_MESSAGE_SHOWN:
            return {
                ...state,
                addPostSuccess: false
            };
        default:
            return state;
    }
};

export default post