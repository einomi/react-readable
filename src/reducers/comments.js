import {
    FETCH_COMMENTS_SUCCESS,
    CHANGE_VOTE_SCORE_SUCCESS,
    ADD_COMMENT_SUCCESS,
    EDIT_COMMENT_SUCCESS,
    DELETE_COMMENT_SUCCESS
} from '../actions'

const comments = (state = [], action) => {
    switch (action.type) {
        case FETCH_COMMENTS_SUCCESS:
            return action.comments;
        case CHANGE_VOTE_SCORE_SUCCESS:
            if (action.entryType !== 'comment') {
                return state;
            }
            return state.map((comment) =>
                comment.id === action.entry.id
                    ? action.entry
                    : comment
            );
        case ADD_COMMENT_SUCCESS:
            return [
                ...state,
                action.addedComment
            ];
        case EDIT_COMMENT_SUCCESS:
            return state.map((comment) =>
                comment.id === action.editedComment.id
                    ? action.editedComment
                    : comment
            );
        case DELETE_COMMENT_SUCCESS:
            return state.filter(comment => comment.id !== action.deletedComment.id);
        default:
            return state;
    }
};

export default comments