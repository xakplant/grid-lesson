import React, { useCallback, useEffect } from 'react'
import { 
    // useSelector, 
    useDispatch 
} from 'react-redux'
import { episodes } from '../config/slices'

export const Lesson2 = () => {
    const dispatch = useDispatch()
    // const list  = useSelector((state)=> state)
    const start = useCallback(()=>{
        dispatch(episodes.actions.start())
    }, [dispatch])

    useEffect(()=>{
        start()
    }, [start])


    return <div></div>
}