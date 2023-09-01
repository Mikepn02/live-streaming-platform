import React from 'react'

const Signup = () => {
    return (
        <div>
            <div className='container'>
                <div className='Header'>
                    <div className='text'>Signup</div>
                    <div className='underline'></div>
                </div>
                <div className='inputs'>
                    <div className='input'>
                        <img src='/assets/email.png' alt='email' />
                        <input type='email' />
                    </div>
                    <div className='input'>
                        <img src='/assets/password.png' alt='password' />
                        <input type='password' />
                    </div>
                </div>
                <div className='forgot-password'>Lost Password?<span>click here</span></div>
                <div className='submit-container'>
                    <div className='submit'>Sign Up</div>
                    <div className='submit'>Login Up</div>
                </div>

            </div>

        </div>
    )
}

export default Signup
