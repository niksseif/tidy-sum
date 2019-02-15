import { applyMiddleware, createStore, compose } from 'redux'
import combineReducers from './reducers/index'
// import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

export default function setupStore(initialState) {
    return createStore(combineReducers, initialState)
}