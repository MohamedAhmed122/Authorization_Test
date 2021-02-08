import React from 'react'
import './StyleNavbar.css'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo'>LiveDune</div>
            <div className='links flex'>
                <div className='link_register link'>you don't have account?</div>
                <button className='link_login link'>Login</button>
            </div>
        </div>
    )
}
