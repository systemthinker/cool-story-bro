//shows homepage of current logged in user

import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMyHomePage } from '../../store/homepageDetails/actions'
import { selectMyHomePage } from '../../store/homepageDetails/selectors'
import { useHistory } from 'react-router-dom'

import MyHomePageCard from '../../components/MyHomePageCard'
import MyHomepageEditForm from '../../components/MyHomePageEditForm'
import MyStoryCreateForm from '../../components/MyStoryCreateForm'
import MyStoriesEditForm from '../../components/MyStoriesEditForm'
import Stories from '../../components/Stories'
import MessageBox from '../../components/MessageBox'

export default function MyHomePage() {
    
    const history = useHistory()
    const dispatch = useDispatch()
    const myPage = useSelector(selectMyHomePage)
    const stories = myPage.stories || []
    const id = parseInt(history.location.pathname.slice(12,13))
   

    useEffect( ()=>{
        
        dispatch(fetchMyHomePage(id))
        
        
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
                        <MessageBox />
                       
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
                        <MessageBox />
                        <MyStoryCreateForm />
                        <MyStoriesEditForm />

                        
                         
                
           
        </div>
    )
}
