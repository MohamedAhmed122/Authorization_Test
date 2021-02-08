import React from 'react'

import { Form, Formik } from 'formik'
import * as Yup from 'yup'


import FormInput from '../../Components/FormInput/FormInput'

import CustomButton from '../../Components/CustomButton/CustomButton'

import './StyleAddEmailPage.css'

const validationSchema = Yup.object({
    email: Yup.string().required().email()
});

export default function AddEmailPage({history}) {
    
    return (
        <div className='add_email flex_Col'>
            <img src='/assets/lock.png'  alt='Lock'/>
            <h1>Restore password</h1>
            <p>Enter the e-mail that you registered earlier </p>
            <Formik
                validationSchema={validationSchema}
                initialValues={{ email:''}}
                onSubmit={(values)=>{
                    console.log(values)
                    history.push('/sent-email')
                }}
            >
                {({ dirty,isSubmitting, isValid })=>( 
                <Form className='flex_Col'>
                    <FormInput type='email' placeholder='email' width={360} name='email' />
                    <CustomButton title='Send Message' width={360} disabled={!isValid || isSubmitting || !dirty}/>
                </Form>
                )}
            </Formik>
            
        </div>
    )
}
