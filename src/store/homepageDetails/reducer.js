const initialState = 
    {
        details: "detailsTest",
        myHomePage: {
            stories: []
        },
    }


export default (state = initialState, action) => {
    switch (action.type) {
      
      case "FETCH_HOMEPAGE_DETAILPAGE":
          
      

      return {
          ...state,
          details: {...action.payload}
      }

      case "FETCH_MY_HOMEPAGE" :

      return {
            ...state,
            myHomePage: {...action.payload}
      }
            
            
        
  
      default:
        return state;
    }
  };