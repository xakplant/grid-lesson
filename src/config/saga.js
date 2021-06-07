import { takeEvery, all, call } from 'redux-saga/effects'
import { episodes } from './slices'

function* start(){
    yield call(console.log, 'START')
}

export function* saga(){
    yield all([
        takeEvery(episodes.actions.start, start)
    ])
}