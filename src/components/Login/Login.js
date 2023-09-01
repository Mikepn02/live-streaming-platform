import React from 'react'

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='flex flex-col items-center bg-[#F0F8FF] w-[760px] h-[600px]'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type="email"
                        id='email'
                        name='email'
                        placeholder='Enter your Email'
                        required
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input 
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Enter you password'
                    required
                    />
                </div>
            </form>

            <button className='bg-[#4285F4] text-white w-48 h-12'>
                Login with Google
            </button>
        </div>
    )
}

export default Login
