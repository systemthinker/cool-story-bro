//shows homepage of current logged in user

import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMyHomePage } from '../../store/homepageDetails/actions'
import { selectMyHomePage } from '../../store/homepageDetails/selectors'
import MyHomePageCard from '../../components/MyHomePageCard'
import MyHomepageEditForm from '../../components/MyHomePageEditForm'
import Stories from '../../components/Stories'

export default function MyHomePage() {
    
    
    const dispatch = useDispatch()
    const myPage = useSelector(selectMyHomePage)
    const stories = myPage.stories || []
   

    useEffect( ()=>{
        
        dispatch(fetchMyHomePage())
        
        
    },[dispatch])

    return (
        <div>
            <h1>My Home Page</h1>
            
                
                    
                        <MyHomePageCard
                          key={myPage.id}
                          id={myPage.id}
                          title={myPage.title}
                          description={myPage.description}
                          backgroundColor={myPage.backgroundColor}
                          color={myPage.color}
                          showLink={true}
                        />

                        <MyHomepageEditForm />
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
