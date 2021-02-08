import React from 'react'

import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import FormInput from '../../Components/FormInput/FormInput'
import CustomButton from '../../Components/CustomButton/CustomButton';
import SocialLogin from '../../Components/SocialLogin/SocialLogin'

import { useHistory } from 'react-router-dom';

const validationSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(6),
});

  const initialValues ={ email:'', password:'' }

export default function LoginPage() {

    const history = useHistory()

    return (
        <div className='flex_Col register' >
            <div className='register_text'>
                <h1>Login</h1>
                <p>Welcome, glad to see you again 👋.</p>
            </div>
            <SocialLogin />
            <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={(values)=>{console.log(values)}}
            >
                {({ dirty,isSubmitting, isValid })=>( 
                    <Form className='flex_Col'>
                        <FormInput name='email' type='text' placeholder='Email' />
                        <FormInput name='password' type='password' placeholder='Password' />
                        <CustomButton title='Login' type='submit'/>
                        <div> you don't have account! <span onClick={()=>history.push('/')} className='link_span'> Register</span></div>
                    </Form>   
                )}

            </Formik>
        </div>
    )
}