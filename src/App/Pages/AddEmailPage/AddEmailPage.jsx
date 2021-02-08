import React from 'react'
import CustomButton from '../../Components/CustomButton/CustomButton'
import CustomInput from '../../Components/CustomInput/CustomInput'

import './StyleAddEmailPage.css'

export default function AddEmailPage() {
    return (
        <div className='add_email flex_Col'>
            <img src='/assets/lock.png'  alt='Lock'/>
            <h1>Restore password</h1>
            <p>Enter the e-mail that you registered earlier </p>
            <CustomInput type='email' placeholder='email' width={400} />
            <CustomButton title='Send Message' width={400}/>
        </div>
    )
}
