import React, { useState } from 'react'


import CustomButton from '../../Components/CustomButton/CustomButton'
import CustomInput from '../../Components/CustomInput/CustomInput'

export default function ReceiveEmailPage() {
    const [input, setInput ] = useState('')
    return (
        <div className='flex_Col confirm_email_page'>
        <h1>I didn't receive an email</h1>
        <p className='long_text'> 
            The letter may arrive with a delay of 5-10 minutes. 
            Also check <br />the different mailbox folders (relevant for gmail.com) and the "Spam" 
            folder. If the letter still did not come, try again <br/>
            or write about it to support@livedune.ru and we will activate your account.
        </p>
        <div  style={{marginTop: 50}}/>
        <CustomInput placeholder='Code' width={420} value={input} onChange={(e) => setInput(e.target.value)} />
        <CustomButton title='Confirm email' width={400} onClick={()=>setInput('')} />
        <p style={{cursor: 'pointer'}}>Cancel</p> 
    </div>
    )
}
