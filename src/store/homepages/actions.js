// fetches homepages from db

import axios from 'axios';


export const fetchHomepagesDisplay = homepages => ({
    type: "FETCH_HOMEPAGES_DISPLAY",
    payload: homepages
  });



export const fetchHomepages = () => {
    return async (dispatch) => {
      
      const response = await axios.get('http://localhost:4000/homepages')
  
      // console.log(response.data);
      dispatch(fetchHomepagesDisplay(response.data));
    };
  };
  

