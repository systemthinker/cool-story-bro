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

      case "UPDATE_MY_STORY" :
               
          return {
              ...state,
              myHomePage : {...state.myHomePage,
              stories : [action.payload, ...state.myHomePage.stories.filter(s=>s.id !== action.payload.id)] 

              }
              } 
       case "DELETE_MY_STORY" :
           return {
               ...state,
               myHomePage: {...state.myHomePage,
               stories : [...state.myHomePage.stories.filter(s=>s.id !== action.payload.id)] 
            
            }
           }  
           
        case "CREATE_MY_STORY":
            return {
                ...state,
                myHomePage: {...state.myHomePage,
                stories: [...state.myHomePage.stories, action.payload]}
            }   
          
            
            
        
  
      default:
        return state;
    }
  };