import { fetchDetailsPage } from '../../store/homepageDetails/actions'
import { selectDetailPage} from '../../store/homepageDetails/selectors'
import { useEffect,  } from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import HomepageDetails from "../../components/HomepageDetails/index";

import React from 'react'

export default function HomePageDetails() {
    const dispatch = useDispatch()
    const page = useSelector(selectDetailPage)

    

    useEffect( ()=>{
        dispatch(fetchDetailsPage())
        
    },[dispatch])

    console.log('page test', page)
    
    
    return (
        <div>
            <h1>does it work?</h1>
            
                
                    
                        <HomepageDetails
                          key={page.id}
                          id={page.id}
                          title={page.title}
                          description={page.description}
                          backgroundColor={page.backgroundColor}
                          color={page.color}
                          showLink={true}
                        />
                         
                
           
        </div>
    )
}