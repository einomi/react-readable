import { combineReducers } from "redux";
import posts, * as fromPosts from './posts'
import post from './post'
import user from './user'

const rootReducer = combineReducers({
    posts,
    post,
    user
});

export const getFilteredPosts = (state, category) =>
    fromPosts.getFilteredPosts(state.posts, category);

export const getPost = (state, id) =>
    fromPosts.getPost(state.posts, id);

export default rootReducer