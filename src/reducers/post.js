import { combineReducers } from 'redux'

import {
    FETCH_POST_START,
    FETCH_POST_SUCCESS,
    FETCH_POST_NOT_FOUND,
    CHANGE_VOTE_SCORE_SUCCESS
} from '../actions'

const entity = (state = {}, action) => {
    switch (action.type) {
        case FETCH_POST_START:
            return {};
        case FETCH_POST_SUCCESS:
            return action.post;
        case CHANGE_VOTE_SCORE_SUCCESS:
            if (action.entryType !== 'post') {
                return state;
            }
            return action.entry;
        default:
            return state;
    }
};

const notFound = (state = false, action) => {
    switch (action.type) {
        case FETCH_POST_SUCCESS:
            return false;
        case FETCH_POST_NOT_FOUND:
            return true;
        default:
            return state;
    }
};

export default combineReducers({
    entity,
    notFound
})