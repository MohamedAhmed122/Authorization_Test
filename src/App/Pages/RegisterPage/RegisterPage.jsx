import React from 'react'

import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import firebase from '../../firebase/Firebase.config'

import FormInput from '../../Components/FormInput/FormInput'
import CustomButton from '../../Components/CustomButton/CustomButton';
import SocialLogin from '../../Components/SocialLogin/SocialLogin'

import './StyleRegister.css'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { userLogin } from '../../Redux/Auth/AuthActions'

const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().required().email(),
    password: Yup.string().required().min(6),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const initialValues ={name:'', email:'', password:'', confirmPassword:'' }

export default function RegisterPage() {

    const history = useHistory()
    const auth = firebase.auth()
    const dispatch = useDispatch()

     const RegisterInFirebase = async cred =>{
        try {
            const response = await auth.createUserWithEmailAndPassword(cred.email, cred.password);
            await response.user.updateProfile({
                displayName: cred.name
            })
            dispatch(userLogin(response.user))
            history.push('/confirm-email')
            
        }catch (error) {
            console.log(error)
        }
    }
  

    return (
        <div className='flex_Col register' >
            <div className='register_form'>
                <div className='register_text'>
                    <h1>Registration</h1>
                    <p>Register and get access to account analytics.</p>
                </div>
                <SocialLogin />
                <Formik
                    validationSchema={validationSchema}
                    initialValues={initialValues}
                    onSubmit={(values)=> {
                        RegisterInFirebase(values)
                        
                    }}
                >
                    {({ dirty,isSubmitting, isValid })=>( 
                        <Form className='flex_Col'>
                            <FormInput name='name' type='text' placeholder='Name' />
                            <FormInput name='email' type='text' placeholder='Email' />
                            <FormInput name='password' type='password' placeholder='Password' />
                            <FormInput name='confirmPassword' type='password' placeholder='Confirm Password' />
                            <CustomButton title='Login' type='submit' disabled={!isValid || isSubmitting || !dirty}/>
                            <div> you already have account! <span onClick={()=>history.push('/login')} className='link_span'> Login</span></div>
                        </Form>   
                    )}

                </Formik>
            </div>
        </div>
    )
}
