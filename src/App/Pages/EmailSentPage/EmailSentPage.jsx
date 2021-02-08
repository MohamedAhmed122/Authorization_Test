import React from 'react'
import CustomButton from '../../Components/CustomButton/CustomButton'

export default function EmailSentPage({history}) {
    return (
        <div className='add_email flex_Col'>
            <img src='/assets/email.svg'  alt='Lock'/>
            <h1>Email sent</h1>
            <p>An email was sent to your e-mail to change your password </p>
            <CustomButton title='Go Back to the main page' width={360} onClick={()=>history.push('/home')} />
        </div>
    )
}
