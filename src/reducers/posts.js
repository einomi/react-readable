import sortBy from 'sort-by'

import { FETCH_POSTS_SUCCESS } from '../actions'
import { SORT_POSTS } from '../actions'

const posts = (state = [], action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return action.posts;
        case SORT_POSTS:
            let newState = [...state];
            newState.sort(sortBy(action.param));
            return newState;
        default:
            return state;
    }
};

export default posts