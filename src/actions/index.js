import isEmpty from 'lodash/isEmpty'

import * as api from '../utils/api'

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POST_START = 'FETCH_POST_START';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_NOT_FOUND = 'FETCH_POST_NOT_FOUND';
export const SORT_POSTS = 'SORT_POSTS';
export const CHANGE_VOTE_SCORE_SUCCESS = 'CHANGE_VOTE_SCORE_SUCCESS';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const EDIT_COMMENT_SUCCESS = 'EDIT_COMMENT_SUCCESS';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_SUCCESS_MESSAGE_SHOWN = 'ADD_POST_SUCCESS_MESSAGE_SHOWN';
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
export const ERROR = 'ERROR';

const ERROR_MESSAGE = 'Error occurred while fetching data from remote server. Please, contact website\'s administrator..';

export const fetchPosts = () => dispatch => {
    api.fetchAllPosts().then(
        posts => {
            dispatch({
                type: FETCH_POSTS_SUCCESS,
                posts,
            });
        }, error => {
            dispatch({
                type: ERROR,
                message: error.message || ERROR_MESSAGE,
            });
        }
    );
};

export const fetchPost = (id) => dispatch => {
    dispatch({
        type: FETCH_POST_START
    });
    api.fetchPost(id).then(
        post => {
            if (isEmpty(post) || post.error) {
                dispatch({
                    type: FETCH_POST_NOT_FOUND
                });
            } else {
                dispatch({
                    type: FETCH_POST_SUCCESS,
                    post,
                });
            }
        }, error => {
            dispatch({
                type: ERROR,
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
                        type: ERROR,
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
                        type: ERROR,
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
        }, error => {
            dispatch({
                type: ERROR,
                message: error.message || ERROR_MESSAGE
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
                type: ERROR,
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
                type: ERROR,
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
                type: ERROR,
                message: error.message || ERROR_MESSAGE,
            });
        }
    );
};

export const addPost = (data) => dispatch => {
    return api.addPost(data).then(
        addedPost => {
            dispatch({
                type: ADD_POST_SUCCESS,
                addedPost
            });
        }, error => {
            dispatch({
                type: ERROR,
                message: error.message || ERROR_MESSAGE,
            });
        }
    );
};

export const addPostSuccessMessageShown = () => ({
    type: ADD_POST_SUCCESS_MESSAGE_SHOWN
});

export const editPost = (id, data) => dispatch => {
    return api.editPost(id, data).then(
        editedPost => {
            dispatch({
                type: EDIT_POST_SUCCESS,
                editedPost
            });
        }, error => {
            dispatch({
                type: ERROR,
                message: error.message || ERROR_MESSAGE,
            });
        }
    );
};

export const deletePost = (id) => dispatch => {
    return api.deletePost(id).then(
        deletedPost => {
            dispatch({
                type: DELETE_POST_SUCCESS,
                deletedPost
            });
        }, error => {
            dispatch({
                type: ERROR,
                message: error.message || ERROR_MESSAGE,
            });
        }
    );
};

export const deleteComment = (id) => dispatch => {
    return api.deleteComment(id).then(
        deletedComment => {
            dispatch({
                type: DELETE_COMMENT_SUCCESS,
                deletedComment
            });
        }, error => {
            dispatch({
                type: ERROR,
                message: error.message || ERROR_MESSAGE,
            });
        }
    );
};
