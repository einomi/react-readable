import sortBy from 'sort-by'

import {FETCH_POSTS_SUCCESS, SORT_POSTS, FETCH_POST_SUCCESS, INCREASE_VOTE_SCORE_SUCCESS} from '../actions'

const posts = (state = [], action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return action.posts;
        case SORT_POSTS:
            let newState = [...state];
            newState.sort(sortBy(action.param));
            return newState;
        case FETCH_POST_SUCCESS:
            if (state.length) {
                return state;
            }
            return [action.post];
        case INCREASE_VOTE_SCORE_SUCCESS:
            return state.map((item, index) => {
                if (item.id === action.id) {
                    item.voteScore += 1;
                }
                return item;
            });
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