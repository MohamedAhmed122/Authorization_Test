import React from 'react'
import CustomButton from '../../Components/CustomButton/CustomButton'

import './StyleConfirmEmailPage.css'

export default function ConfirmEmailPage() {
    return (
        <div className='flex_Col confirm_email_page'>
            <h1>Confirm Email</h1>
            <p className='long_text'> 
                Igor, an email has been sent to your E-mail with a confirmation link. <br/>
                Follow it to activate your account and get 7 days of free access.
            </p>
            <CustomButton title='Confirm email' width={300} />
            <p className='confirm_email_small_text'> I didn't receive an email</p> 
        </div>
    )
}
