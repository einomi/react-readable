import { combineReducers } from 'redux'

import {
    FETCH_POSTS_SUCCESS,
    SORT_POSTS,
    CHANGE_VOTE_SCORE_SUCCESS,
    ADD_POST_SUCCESS,
    EDIT_POST_SUCCESS,
    DELETE_POST_SUCCESS,
} from '../actions'

const entities = (state = [], action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return action.posts;
        case CHANGE_VOTE_SCORE_SUCCESS:
            if (action.entryType !== 'post') {
                return state;
            }
            return state.map(post => {
                if (post.id === action.entry.id) {
                    return action.entry;
                }
                return post;
            });
        case ADD_POST_SUCCESS:
            return [
                ...state,
                action.addedPost
            ];
        case EDIT_POST_SUCCESS:
            return state.map((post, index) =>
                post.id === action.editedPost.id ? action.editedPost : post
            );
        case DELETE_POST_SUCCESS:
            return state.filter(post => post.id !== action.deletedPost.id);
        default:
            return state;
    }
};

const sortBy = (state = {param: 'timestamp', order: 'desc'}, action) => {
    switch (action.type) {
        case SORT_POSTS:
            return {
                ...state,
                param: action.param,
                order: action.param === 'timestamp' ? 'desc' : 'asc'
            };
        default:
            return state;
    }
};

export const getFilteredPosts = (state, category) => {
    if (category) {
        return state.entities.filter(post => post.category === category);
    }

    return state.entities;
};

export const getPost = (state, id) =>
    state.entities.length && state.entities.filter(post => post.id === id)[0];

export default combineReducers({
    entities,
    sortBy
})