const initialState = 
    []


export default (state = initialState, action) => {
    switch (action.type) {
      
        case "FETCH_HOMEPAGES_DISPLAY":
          
           return [...action.payload]
              
           
            
            
        
  
      default:
        return state;
    }
  };
