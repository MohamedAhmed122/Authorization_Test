import React from 'react'

import './StyleSocialLogin.css'

export default function SocialLogin() {

    return (
        <div className='flex btn_group'>
            <button className='social_btn flex_center'>
                <img src={facebookLogo} alt='Facebook Login' />
                Login with Facebook
            </button>
            <button className='social_btn flex_center google_btn'>
                <img src={googleLogo} alt='Google Login' />
                Login with Google
            </button>
        </div>
    )
}

const facebookLogo ='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png';

const googleLogo ='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png';