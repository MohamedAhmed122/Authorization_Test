import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CustomButton from '../../Components/CustomButton/CustomButton'

import './StyleConfirmEmailPage.css'

export default function ConfirmEmailPage() {

    const history = useHistory()
    const { currentUser, isAuthenticated } = useSelector(state => state.auth)

    useEffect(()=>{
        if(!isAuthenticated){
           history.push('/') 
        }
    },[isAuthenticated, history])

    return (
        <div className='flex_Col confirm_email_page'>
            <h1>Confirm Email</h1>
            <p className='long_text'> 
               <span className='user_name'>{currentUser?.displayName}, </span>  an email has been sent to your E-mail with a confirmation link. <br/>
                Follow it to activate your account and get 7 days of free access.
            </p>
            <CustomButton onClick={()=>history.push('/add-email')} title='Confirm email' width={300}  />
            <div onClick={()=>history.push('/receive-email')} className='confirm_email_small_text'> I didn't receive an email</div> 
        </div>
    )
}
