import {
    FETCH_CATEGORIES_SUCCESS,
} from '../actions'

const categories = (state = [], action) => {
    switch (action.type) {
        case FETCH_CATEGORIES_SUCCESS:
            return action.data.categories;
        default:
            return state;
    }
};

export default categories