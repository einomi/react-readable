import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers'

const middlewares = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
}

const store = createStore(rootReducer, {
        user: { // Fake user. Authentication/authorization is not implemented in this app
            id: 'fakeUserId', voted: {
                post: {},
                comment: {}
            }
        }
    },
    applyMiddleware(...middlewares));

export default store