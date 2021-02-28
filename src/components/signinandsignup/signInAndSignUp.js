import React from 'react'
import SignIn from "../sign-in/signin";
import SignUp from "../sign-up/signup";

import './signInAndSignUp.scss'


const SignInAndSignUp = () => (
    <div className='sign-in-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
)
export default SignInAndSignUp;