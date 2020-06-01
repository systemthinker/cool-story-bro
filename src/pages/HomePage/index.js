import {fetchHomepages} from '../../store/homepages/actions'
import { selectHomepages } from '../../store/homepages/selectors'
import { useEffect,  } from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import Homepage from "../../components/Homepage/index";

import React from 'react'

export default function HomePage() {
    const dispatch = useDispatch()
    const homepages = useSelector(selectHomepages)

    console.log('homepages', homepages)

    useEffect( ()=>{
        dispatch(fetchHomepages())
        
    },[dispatch])
    
    
    return (
        <div>
            <h1>does it work?</h1>
            {homepages.map(homepage =>{
                return (
                    
                        <Homepage
                          key={homepage.id}
                          id={homepage.id}
                          title={homepage.title}
                          description={homepage.description}
                          backgroundColor={homepage.backgroundColor}
                          color={homepage.color}
                          showLink={true}
                        />
                         
                )
            })}
        </div>
    )
}
