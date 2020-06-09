import {fetchHomepages} from '../../store/homepages/actions'
import { selectHomepages } from '../../store/homepages/selectors'
import { useEffect,  } from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import Homepages from "../../components/Homepages/index";

import React from 'react'

export default function HomePage() {
    const dispatch = useDispatch()
    const homepages = useSelector(selectHomepages)
    

    

    useEffect( ()=>{

        dispatch(fetchHomepages())
        
        
    },[dispatch])
    
    
    return (
        <div className="App">
            <h1>All Homepages</h1>
            
            {homepages.map(homepage =>{
                return (
                    
                        <Homepages
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
