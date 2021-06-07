import { combineReducers, createStore, applyMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { saga } from './saga'
import { episodes } from './slices'

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers( {episodes: episodes.reducer})
export const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(saga)
