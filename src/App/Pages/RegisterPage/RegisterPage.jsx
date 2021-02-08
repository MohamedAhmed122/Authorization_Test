import React from 'react'

import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import FormInput from '../../Components/FormInput/FormInput'
import CustomButton from '../../Components/CustomButton/CustomButton';
import SocialLogin from '../../Components/SocialLogin/SocialLogin'

import './StyleRegister.css'

const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().required().email(),
    password: Yup.string().required().min(6),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

  const initialValues ={name:'', email:'', password:'', confirmPassword:'' }

export default function RegisterPage() {
    return (
        <div className='flex_Col register' >
            <div className='register_text'>
                <h1>Registration</h1>
                <p>Register and get access to account analytics.</p>
            </div>
            <SocialLogin />
            <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={(values)=>{console.log(values)}}
            >
                {({ dirty,isSubmitting, isValid })=>( 
                    <Form className='flex_Col'>
                        <FormInput name='name' type='text' placeholder='Name' />
                        <FormInput name='email' type='text' placeholder='Email' />
                        <FormInput name='password' type='password' placeholder='Password' />
                        <FormInput name='confirmPassword' type='password' placeholder='Confirm Password' />
                        <CustomButton title='Login' type='submit'/>
                        <div> you already have account! <span className='link_span'> Login</span></div>
                    </Form>   
                )}

            </Formik>
        </div>
    )
}
