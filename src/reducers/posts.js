import sortBy from 'sort-by'

import {
    FETCH_POSTS_SUCCESS,
    SORT_POSTS,
    CHANGE_VOTE_SCORE_SUCCESS,
    ADD_POST_SUCCESS,
    EDIT_POST_SUCCESS,
    DELETE_POST_SUCCESS,
} from '../actions'

const posts = (state = [], action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return action.posts;
        case SORT_POSTS:
            let newState = [...state];
            newState.sort(sortBy(action.param));
            return newState;
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

export const getFilteredPosts = (state, category) => {
    if (category) {
        return state.filter(post => post.category === category);
    }

    return state;
};

export const getPost = (state, id) =>
state.length && state.filter(post => post.id === id)[0];

export default posts