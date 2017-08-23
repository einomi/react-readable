import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers'

const middlewares = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
}

const store = createStore(rootReducer, {
        user: 'fakeUserId' // Authentication/authorization is not implemented in this app
    },
    applyMiddleware(...middlewares));

export default store