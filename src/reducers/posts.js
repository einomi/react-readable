import sortBy from 'sort-by'

import { FETCH_POSTS_SUCCESS, SORT_POSTS, FETCH_POST_SUCCESS, CHANGE_VOTE_SCORE_SUCCESS } from '../actions'

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
                if (!(post.id === action.entryId)) {
                    return post;
                }

                let howUserVoted;

                if (post.usersVoted) {
                    howUserVoted = post.usersVoted[action.userId];
                } else {
                    post.usersVoted = {};
                }

                if (howUserVoted && action.option === howUserVoted) {
                    return post;
                } else {
                    action.option == 'upVote' ? post.voteScore += 1 : post.voteScore -= 1;
                    if (howUserVoted) {
                        delete post.usersVoted[action.userId];
                    } else {
                        post.usersVoted[action.userId] = action.option;
                    }
                }

               return post;
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