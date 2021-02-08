import React from 'react'

import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import firebase from '../../firebase/Firebase.config'

import FormInput from '../../Components/FormInput/FormInput'
import CustomButton from '../../Components/CustomButton/CustomButton';
import SocialLogin from '../../Components/SocialLogin/SocialLogin'

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {userLogin} from '../../Redux/Auth/AuthActions'

const validationSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(6),
});

  const initialValues ={ email:'', password:'' }

export default function LoginPage() {

    const auth = firebase.auth()

    const { isAuthenticated } = useSelector(state =>state.auth)
    const dispatch = useDispatch()
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
                onSubmit={async(values)=>{
                    try {
                       const result = await  auth.signInWithEmailAndPassword(values.email, values.password)
                       dispatch(userLogin(result.user))
                       console.log(result.user)
                       if (isAuthenticated){
                           history.push('/confirm-email')
                       }
                    } catch (error) {
                        console.log(error)
                    }
                }}
            >
                {({ dirty,isSubmitting, isValid })=>( 
                    <Form className='flex_Col'>
                        <FormInput name='email' type='text' placeholder='Email' />
                        <FormInput name='password' type='password' placeholder='Password' />
                        <CustomButton title='Login' type='submit'   disabled={!isValid || isSubmitting || !dirty}/>
                        <div> you don't have account! <span onClick={()=>history.push('/')} className='link_span'> Register</span></div>
                    </Form>   
                )}

            </Formik>
        </div>
    )
}
