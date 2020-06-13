import axios from 'axios';



export const fetchHomePageDetailPage = homepage => ({
    type: "FETCH_HOMEPAGE_DETAILPAGE",
    payload: homepage
  });



export const fetchDetailsPage = (id) => {
   
    return async (dispatch,getState) => {
      
      const response = await axios.get(`http://localhost:4000/homepages/${id}`)

      console.log('response', response)
        
     
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



export const fetchMyHomePage = () => {
   
    return async (dispatch,getState) => {
      try{

            const id = getState().user.id

            console.log('user id is', id)

           
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

      console.log('response', response.data)
        
     
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

      console.log('response', response.data)
        
     
      dispatch(updateMyStoriesAction(response.data));

      } catch(e){
        console.log(`error: ${e.message}`)
      }
    };
  };