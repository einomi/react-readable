import { CHANGE_VOTE_SCORE_SUCCESS } from '../actions'

const user = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_VOTE_SCORE_SUCCESS:
            let user = {...state};
            let howUserVoted = user.voted[action.entryType][action.entryId];
            if (howUserVoted !== action.option) {
                if (howUserVoted !== undefined) {
                    howUserVoted = undefined;
                } else {
                    howUserVoted = action.option;
                }
            }
            user.voted[action.entryType][action.entryId] = howUserVoted;
            return user;
        default:
            return state;
    }
};

export default user