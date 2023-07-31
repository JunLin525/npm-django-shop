import React, { useContext } from 'react'

import Header from '../components/Header';
import Footer from '../components/Footer';
import Authcontext from '../context/AuthContext.js'

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
            <Footer />
        </div>
    )
}

export default Login