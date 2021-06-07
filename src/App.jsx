import React from 'react'
import { Provider } from 'react-redux'
import { store } from './config/state'
//import {Lesson1 } from './lesson1'
import { Lesson2 } from './lesson2'

export const App = () => {
    return <Provider store={store}>
         <div><Lesson2/></div>
    </Provider>
}