import { userLogin } from './AuthActions'
import {USER_LOGIN, USER_LOGOUT} from './AuthTypes'

const initialState={
    currentUser : null,
    isAuthenticated: false
}


const AuthReducer = (state= initialState, {type, payload}) =>{
    switch(type){
        case USER_LOGIN:
            return{
                isAuthenticated : true,
                currentUser: payload,
                ...state
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