import { FETCH_POST_SUCCESS, INCREASE_VOTE_SCORE_SUCCESS } from '../actions'

const currentPostId = (state = '', action) => {
    switch (action.type) {
        case FETCH_POST_SUCCESS:
            return action.post.id;
        // case INCREASE_VOTE_SCORE_SUCCESS:
        //     return {
        //         ...state,
        //         voteScore: state.voteScore + 1
        //     };
        default:
            return state;
    }
};

export default currentPostId