const initialState = 
    {
        details: "detailsTest",
        myHomePage: {},
    }


export default (state = initialState, action) => {
    switch (action.type) {
      
      case "FETCH_HOMEPAGE_DETAILPAGE":
          
      

      return {
          ...state,
          ...action.payload
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