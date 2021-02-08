import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import './StyleNavbar.css'

export default function Navbar() {

    const history = useHistory()

    return (
        <div className='navbar'>
            <div onClick={()=>history.push('/')} className='logo'>LiveDune</div>
            <div className='links flex'>
                <Link to='/' className='link_register link'>you don't have account?</Link>
                <button onClick={()=>history.push('/login')} className='link_login link'>Login</button>
            </div>
        </div>
    )
}
