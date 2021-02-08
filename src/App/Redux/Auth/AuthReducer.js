import { userLogin } from './AuthActions'
import {USER_LOGIN, USER_LOGOUT} from './AuthTypes'

const initialState={
    currentUser : null,
    isAuthenticated: false
}


const AuthReducer = (state= initialState, action) =>{
    switch(action.type){
        case USER_LOGIN:
            return{
                isAuthenticated : true,
                currentUser: action.payload,
              
            }
        case USER_LOGOUT:
            return{
                isAuthenticated : false,
                currentUser: null,
            } 
        default:
            return state
    }
}

export default AuthReducer;