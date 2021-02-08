import {USER_LOGIN, USER_LOGOUT} from './AuthTypes'

export const userLogin = user =>({
    type: USER_LOGIN,
    payload: user
}) 


export const userLogout = () =>({
    type: USER_LOGOUT
}) 