import {fetchHomepages} from '../../store/homepages/actions'
import { useEffect } from 'react'
import { useDispatch,  } from 'react-redux'

import React from 'react'

export default function HomePage() {
    const dispatch = useDispatch()

    useEffect( ()=>{
        dispatch(fetchHomepages())
        
    },[dispatch])
    
    
    return (
        <div>
            <h1>does it work?</h1>
        </div>
    )
}
