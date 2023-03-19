import { GET_BLOGS, GET_DESTACADAS, GET_BLOG_DETAIL, CLEAN_DETAIL } from "./action-types";


//Estado global.
const initialState = {
    blogs: [],
    destacadas: [],
    blogDetail: {},
}

//Variable global para hacer los gets.
window.imageURL = "http://repo.ifelse.com.ar:7001/";

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_BLOGS:
            return{
                ...state,
                blogs: action.payload
            }
        
        case GET_BLOG_DETAIL:
            return{
                ...state,
                blogDetail: action.payload
            }
        
        case CLEAN_DETAIL:
            return{
                ...state,
                blogDetail: {}
            }

        default:
            return {...state}
    }

}

export default reducer;