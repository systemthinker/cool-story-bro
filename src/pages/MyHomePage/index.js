//shows homepage of current logged in user

import React, {useEffect} from 'react'
import { selectUser } from '../../store/user/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMyHomePage } from '../../store/homepageDetails/actions'
import { getUserWithStoredToken } from '../../store/user/actions'

export default function MyHomePage(props) {
    const user = props
    
    const dispatch = useDispatch()
    

    useEffect( ()=>{
        dispatch(getUserWithStoredToken())
        dispatch(fetchMyHomePage())
        
        
    },[dispatch])

    return (
        <div>
            <p>x</p>
        </div>
    )
}
