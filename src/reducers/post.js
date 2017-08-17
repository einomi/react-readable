import { FETCH_POST_SUCCESS } from '../actions'

const post = (state = [], action) => {
    switch (action.type) {
        case FETCH_POST_SUCCESS:
            return action.post;
        default:
            return state;
    }
};

export default post