import * as api from '../utils/api'

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

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
                message: error.message || 'Something went wrong.',
            });
        }
    );
};