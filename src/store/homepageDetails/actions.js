import axios from 'axios';

export const fetchHomePageDetailPage = homepage => ({
    type: "FETCH_HOMEPAGE_DETAILPAGE",
    payload: homepage
  });

export const fetchDetailsPage = (id) => {
   
    return async (dispatch,getState) => {
      
      const response = await axios.get(`http://localhost:4000/homepages/${id}`)

      dispatch(fetchHomePageDetailPage(response.data));
    };
  };

  export const fetchMyHomePageAction = homepage => ({
    type: "FETCH_MY_HOMEPAGE",
    payload: homepage
  });

  export const fetchMyHomePageUpdateAction = homepage => ({
    type: "UPDATE_MY_HOMEPAGE",
    payload: homepage
  });

  export const updateMyStoriesAction = story => ({
    type: "UPDATE_MY_STORY",
    payload: story
  })

  export const deleteMyStoryAction = story => ({
    type: "DELETE_MY_STORY",
    payload: story
  })

  export const createMyStoryAction = story =>({
    type: "CREATE_MY_STORY",
    payload: story
  })

export const fetchMyHomePage = (id) => {
   
    return async (dispatch,getState) => {
      try{
          
      const response = await axios.get(`http://localhost:4000/myhomepage/${id}`)
    
      dispatch(fetchMyHomePageAction(response.data));

      } catch(e){
        console.log(`error: ${e.message}`)
      }
    };
  };  

  // updateMyPage
export const updateMyHomePage = (title, description, backgroundColor, color) => {
   
    return async (dispatch,getState) => {
      try{

      const id = getState().user.id
           
      const response = await axios.patch(`http://localhost:4000/myhomepage`,{
        id,
        title,
        description,
        backgroundColor,
        color,
      })
     
      dispatch(fetchMyHomePageAction(response.data));

      } catch(e){
        console.log(`error: ${e.message}`)
      }
    };
  };

  export const updateMyStories = (storyId, name, content, imageUrl) => {
   
    return async (dispatch,getState) => {
      try{

      const id = storyId

           
      const response = await axios.patch(`http://localhost:4000/story/${id}`,{
        name,
        content,
        imageUrl,
       })
     
      dispatch(updateMyStoriesAction(response.data));

      } catch(e){
        console.log(`error: ${e.message}`)
      }
    };
  };

export const deleteMyStory =(id) => {

  return async(dispatch,getState)=>{
    try{

      const response = await axios.delete(`http://localhost:4000/story/${id}`)
      

      dispatch(deleteMyStoryAction(response.data))
    } catch(e){
      console.log(`error: ${e.message}`)
    }

  } 
}

export const createMyStory =(id,name,content,imageUrl) => {

  return async(dispatch,getState)=>{
    try{

      const response = await axios.post(`http://localhost:4000/story/${id}`,{
        name,
        content,
        imageUrl,
      })
      
      console.log('res is', response)
      dispatch(createMyStoryAction(response.data))
    } catch(e){
      console.log(`error: ${e.message}`)
    }

  } 
}