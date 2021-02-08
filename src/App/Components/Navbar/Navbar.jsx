import React  from 'react'

import firebase from '../../firebase/Firebase.config'

import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import './StyleNavbar.css'
import { userLogout } from '../../Redux/Auth/AuthActions'

export default function Navbar() {

    const { isAuthenticated } = useSelector(state =>state.auth)
    const history = useHistory()
    const dispatch = useDispatch()

    const auth = firebase.auth()

    const signOutUser = () =>{
        auth.signOut();
        history.push('/');
        dispatch(userLogout())
    } 

    return (
        <div className='navbar'>
            <div onClick={()=>history.push('/')} className='logo'>LiveDune</div>
            {!isAuthenticated ?
                (<div className='links flex'>
                    <Link to='/' className='link_register link'>you don't have account?</Link>
                    <button onClick={()=>history.push('/login')} className='link_login link'>Login</button>
                </div> )
                :
                ( <div className='Logout_link' onClick={()=>signOutUser()}> Logout</div>)
            }
           
        </div>
    )
}
