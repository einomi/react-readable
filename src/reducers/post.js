import { FETCH_POST_SUCCESS, CHANGE_VOTE_SCORE_SUCCESS } from '../actions'

const post = (state = {}, action) => {
    switch (action.type) {
        case FETCH_POST_SUCCESS:
            return action.post;
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