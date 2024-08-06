import { 
    FETCH_DATA_ERROR,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_REQUEST, 
    FETCH_LOGIN_REQUEST, 
    FETCH_SIGNUP_REQUEST,
    FETCH_LOGIN_SUCCESS, 
    FETCH_SIGNUP_SUCCESS,
    FETCH_LOGIN_ERROR,
    FETCH_SIGNUP_ERROR
    } from "./action"


const intialState={
    loading:false,
    data:[],
    token:null,
    user:null,
    message:null,
    error:''
}

const reducerData=(state=intialState,action)=>{
    switch (action.type) {
        case FETCH_SIGNUP_REQUEST:
        case FETCH_LOGIN_REQUEST:
        case FETCH_DATA_REQUEST:return {
            ...state,
            loading:true,
            error:null
        }
        case FETCH_DATA_SUCCESS:return{
            loading:false,
            data:action.payload,
            
        } 
        case FETCH_LOGIN_SUCCESS:return{
            ...state,
            loading:false,
            token:action.payload,
            message:action.payload
        }
        case FETCH_SIGNUP_SUCCESS:return{
            ...state,
            loading:false,
            user:action.payload
        } 
        case FETCH_LOGIN_ERROR:return{
            ...state,
            loading:false,
            error:action.payload
        }
        case FETCH_SIGNUP_ERROR:return{
            ...state,
            loading:false,
            error:action.payload
        }  
         case FETCH_DATA_ERROR:return{
            loading:false,
            data:[],
            error:action.payload
         }  
    
        default:
         return  state
    }
}
export default reducerData