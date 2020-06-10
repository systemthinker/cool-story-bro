import { fetchDetailsPage } from '../../store/homepageDetails/actions'
import { selectDetailPage} from '../../store/homepageDetails/selectors'
import { useEffect,  } from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import HomepageDetails from "../../components/HomepageDetails/index";
import Stories from "../../components/Stories/index"
import { useParams } from "react-router-dom";

import React from 'react'

export default function HomePageDetails() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const page = useSelector(selectDetailPage)
    const stories = page.stories || []
    

    

    useEffect( ()=>{
        dispatch(fetchDetailsPage(id))
        
    },[dispatch])

    
    
    
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
                        {stories.map(story =>{
                        return (
                                    <Stories 
                                    key={story.id}
                                    name={story.name}
                                    content={story.content}
                                    imageUrl={story.imageUrl}
                                    
                                    />
                            )
                        })}
                        
                         
                
           
        </div>
    )
}