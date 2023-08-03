import React, { useContext } from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthContext from '../context/AuthContext.js';
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    UserButton,
    useUser,
    RedirectToSignIn,
} from "@clerk/clerk-react";



const clerkPubKey = "pk_test_bXV0dWFsLXRvcnRvaXNlLTM0LmNsZXJrLmFjY291bnRzLmRldiQ";
let buttonCtrl = false

const handleControl = () => {
    buttonCtrl = !buttonCtrl
}

if (!clerkPubKey) {
    throw new Error("Missing Publishable Key")
}

const Login = () => {
    let { loginUser } = useContext(AuthContext)


    return (
        <div className='landisng-background'>

            <Header />

            <div>
                <br />
                <br />
                <h3>請在這裡登入</h3>
                <form onSubmit={loginUser}>
                    <input type="text" name="username" placeholder="Enter Username" />
                    <br />
                    <input type="password" name="password" placeholder="Enter Password" />
                    <input type="submit" />
                </form>
                <div className='landing-back' />

            </div>
            <br />
            <br />
            <button className='title' onClick={handleControl} >第三方登入使用</button>

            {buttonCtrl && (
                <ClerkProvider publishableKey={clerkPubKey}>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <RedirectToSignIn />
                    </SignedOut>
                </ClerkProvider>
            )}

            <Footer />
        </div>
    )
}

export default Login