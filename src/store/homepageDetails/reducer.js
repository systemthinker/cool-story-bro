const initialState = 
    {
        details: "detailsTest"
    }


export default (state = initialState, action) => {
    switch (action.type) {
      
      case "FETCH_HOMEPAGE_DETAILPAGE":
          
      console.log('action.payload', action.payload)

      return {
          ...state,
          ...action.payload
      }
            
            
        
  
      default:
        return state;
    }
  };