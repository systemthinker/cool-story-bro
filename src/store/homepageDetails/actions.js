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



export const fetchMyHomePage = () => {
   
    return async (dispatch,getState) => {
      console.log('state', getState().user.id)

      const id = getState().user.id

     
      const response = await axios.post(`http://localhost:4000/myhomepage/`,{id})

      console.log('response', response)
        
     
      // dispatch(fetchMyHomePageAction(response.data));
    };
  };  