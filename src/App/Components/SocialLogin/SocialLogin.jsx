import React from 'react'

import firebase from '../../firebase/Firebase.config';
import { useDispatch } from 'react-redux';
import {userLogin} from '../../Redux/Auth/AuthActions'

import './StyleSocialLogin.css'

export default function SocialLogin() {

    const dispatch = useDispatch();
    const socialLogin = async (selectedProvider) => {
        let provider;

        const auth = firebase.auth();
        if (selectedProvider === "facebook") {
            provider = new firebase.auth.FacebookAuthProvider();
        }
        if (selectedProvider === "google") {
            provider = new firebase.auth.GoogleAuthProvider();
        }
        try {
            const result = await auth.signInWithPopup(provider);
            console.log(result.user);
            dispatch(userLogin(result.user));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='flex btn_group'>
            <button onClick={()=>socialLogin('facebook')}  className='social_btn flex_center'>
                <img src={facebookLogo} alt='Facebook Login' />
                Login with Facebook
            </button>
            <button onClick={()=>socialLogin('google')} className='social_btn flex_center google_btn'>
                <img src={googleLogo} alt='Google Login' />
                Login with Google
            </button>
        </div>
    )
}

const facebookLogo ='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png';

const googleLogo ='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png';