import * as api from '../utils/api'

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';
export const SORT_POSTS = 'SORT_POSTS';

const ERROR_MESSAGE = 'Something went wrong.';

export const fetchPosts = () => dispatch => {
    api.getAllPosts().then(
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
    api.getPost(id).then(
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