import { ERROR } from '../actions'

const error = (state = {errorOccurred: false}, action) => {
    switch (action.type) {
        case ERROR:
            return {
                ...state,
                errorOccurred: true,
                message: action.message
            };
        default:
            return state;
    }
};

export default error