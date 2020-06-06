import axios from 'axios';




export const fetchHomePageDetailPage = homepage => ({
    type: "FETCH_HOMEPAGE_DETAILPAGE",
    payload: homepage
  });



export const fetchDetailsPage = (id) => {
   
    return async (dispatch) => {
      
      const response = await axios.get(`http://localhost:4000/homepages/${id}`)

      console.log('response', response)
        
     
      dispatch(fetchHomePageDetailPage(response.data));
    };
  };