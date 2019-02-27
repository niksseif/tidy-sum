import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import incomeReducer from './reducers/incomeReducer'
import logger from 'redux-logger'
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
    users: userReducer,
    income: incomeReducer
})

export default () => createStore(rootReducer, applyMiddleware(logger, thunkMiddleware))