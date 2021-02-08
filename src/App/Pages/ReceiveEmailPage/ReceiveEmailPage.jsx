import React from 'react'

import { Form, Formik } from 'formik'
import * as Yup from 'yup'


import FormInput from '../../Components/FormInput/FormInput'
import CustomButton from '../../Components/CustomButton/CustomButton'


export default function ReceiveEmailPage({history}) {

    const validationSchema = Yup.object({
        code: Yup.string().required()
    });
   
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
        <Formik
            validationSchema={validationSchema}
            initialValues={{code:''}}
            onSubmit={(values)=>{
                console.log(values)
                history.push('/sent-email')
            }}
        >
            {({ dirty,isSubmitting, isValid })=>( 
                <Form className='flex_Col'>
                    <FormInput placeholder='Code' width={360}  name='code' />
                    <CustomButton title='Send Again' width={360}  disabled={!isValid || isSubmitting || !dirty}/>
                </Form>
            )}
        </Formik>
        <div style={{cursor: 'pointer'}} onClick={()=>history.goBack()}>Cancel</div> 
    </div>
    )
}
