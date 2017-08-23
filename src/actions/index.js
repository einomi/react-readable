import * as api from '../utils/api'

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';
export const SORT_POSTS = 'SORT_POSTS';
export const CHANGE_VOTE_SCORE_SUCCESS = 'CHANGE_VOTESCORE_SUCCESS';
export const CHANGE_VOTE_SCORE_FAILURE = 'CHANGE_VOTESCORE_FAILURE';

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
    api.changeVoteScore(entryId, userId, option).then(
        (data) => {
            dispatch({
                type: CHANGE_VOTE_SCORE_SUCCESS,
                entryType,
                entryId,
                userId,
                option
            });
        }, error => {
            dispatch({
                type: CHANGE_VOTE_SCORE_FAILURE,
                message: error.message || ERROR_MESSAGE,
            });
        }
    );
};