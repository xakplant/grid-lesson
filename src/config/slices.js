import { createSlice } from '@reduxjs/toolkit'

export const episodes = createSlice({
    name: 'episodes',
    initialState: {
        list: ['1']
    },
    reducers: {
        start: (state) =>{
            state.list = []
        }
    }
})