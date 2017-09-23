import * as api from '../utils/api'

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';
export const SORT_POSTS = 'SORT_POSTS';
export const CHANGE_VOTE_SCORE_SUCCESS = 'CHANGE_VOTE_SCORE_SUCCESS';
export const CHANGE_VOTE_SCORE_FAILURE = 'CHANGE_VOTE_SCORE_FAILURE';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
export const EDIT_COMMENT_SUCCESS = 'EDIT_COMMENT_SUCCESS';
export const EDIT_COMMENT_FAILURE = 'EDIT_COMMENT_FAILURE';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_SUCCESS_MESSAGE_SHOWN = 'ADD_POST_SUCCESS_MESSAGE_SHOWN';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
export const EDIT_POST_FAILURE = 'EDIT_POST_FAILURE';

const ERROR_MESSAGE = 'Something went wrong.';

export const fetchPosts = () => dispatch => {
    api.fetchAllPosts().then(
        posts => {
            dispatch({
                type: FETCH_POSTS_SUCCESS,
                posts,
            });
        }, error => {
            dispatch({
                type: FETCH_POSTS_FAILURE,
                message: error.message || ERROR_MESSAGE,
            });
        }
    );
};

export const fetchPost = (id) => dispatch => {
    api.fetchPost(id).then(
        post => {
            dispatch({
                type: FETCH_POST_SUCCESS,
                post,
            });
        }, error => {
            dispatch({
                type: FETCH_POST_FAILURE,
                message: error.message || ERROR_MESSAGE,
            });
        }
    );
};

export const sortPosts = (param) => {
    return {
        type: SORT_POSTS,
        param: param
    };
};

export const changeVoteScore = (entryType, entryId, userId, option) => dispatch => {
    switch (entryType) {
        case 'post':
            api.changePostVoteScore(entryId, option).then(
                entry => {
                    dispatch({
                        type: CHANGE_VOTE_SCORE_SUCCESS,
                        entry,
                        entryType,
                        entryId,
                        option
                    });
                }, error => {
                    dispatch({
                        type: CHANGE_VOTE_SCORE_FAILURE,
                        message: error.message || ERROR_MESSAGE,
                    });
                }
            );
            break;
        case 'comment':
            api.changeCommentVoteScore(entryId, option).then(
                entry => {
                    dispatch({
                        type: CHANGE_VOTE_SCORE_SUCCESS,
                        entry,
                        entryType,
                        entryId,
                        option
                    });
                }, error => {
                    dispatch({
                        type: CHANGE_VOTE_SCORE_FAILURE,
                        message: error.message || ERROR_MESSAGE,
                    });
                }
            );
            break;
        default:
            throw new Error('Unrecognized entry type');
    }

};

export const fetchComments = (postId) => dispatch => {
    api.fetchComments(postId).then(
        comments => {
            dispatch({
                type: FETCH_COMMENTS_SUCCESS,
                comments
            });
        }
    );
};

export const addComment = (data) => dispatch => {
    api.addComment(data).then(
        addedComment => {
            dispatch({
                type: ADD_COMMENT_SUCCESS,
                addedComment
            });
        }, error => {
            dispatch({
                type: ADD_COMMENT_FAILURE,
                message: error.message || ERROR_MESSAGE,
            });
        }
    );
};

export const editComment = (id, data) => dispatch => {
    api.editComment(id, data).then(
        editedComment => {
            dispatch({
                type: EDIT_COMMENT_SUCCESS,
                editedComment
            });
        }, error => {
            dispatch({
                type: EDIT_COMMENT_FAILURE,
                message: error.message || ERROR_MESSAGE,
            });
        }
    );
};

export const fetchCategories = () => dispatch => {
    api.fetchCategories().then(
        data => {
            dispatch({
                type: FETCH_CATEGORIES_SUCCESS,
                data,
            });
        }, error => {
            dispatch({
                type: FETCH_CATEGORIES_FAILURE,
                message: error.message || ERROR_MESSAGE,
            });
        }
    );
};

export const addPost = (data) => dispatch => {
    api.addPost(data).then(
        addedPost => {
            dispatch({
                type: ADD_POST_SUCCESS,
                addedPost
            });
        }, error => {
            dispatch({
                type: ADD_POST_FAILURE,
                message: error.message || ERROR_MESSAGE,
            });
        }
    );
};


export const addPostSuccessMessageShown = () => ({
    type: ADD_POST_SUCCESS_MESSAGE_SHOWN
});