
import { FETCH_POST_SUCCESS, FETCH_POST_NOT_FOUND, CHANGE_VOTE_SCORE_SUCCESS } from '../actions'

const post = (state = {notFound: false}, action) => {
    switch (action.type) {
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                ...action.post
            };
        case FETCH_POST_NOT_FOUND:
            return {
                notFound: true
            };
        case CHANGE_VOTE_SCORE_SUCCESS:
            if (action.entryType !== 'post') {
                return state;
            }
            return action.entry;
        default:
            return state;
    }
};

export default post