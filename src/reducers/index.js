import { combineReducers } from "redux";
import posts, * as fromPosts from './posts'
import post from './post'
import user from './user'
import comments from './comments'
import categories from './categories'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    posts,
    post,
    user,
    comments,
    categories,
    form: formReducer,
});

export const getFilteredPosts = (state, category) =>
    fromPosts.getFilteredPosts(state.posts, category);

export const getPost = (state, id) =>
    fromPosts.getPost(state.posts, id);

export default rootReducer