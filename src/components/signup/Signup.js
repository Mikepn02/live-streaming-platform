import React, { useState } from 'react'


const Signup = () => {
    const [action, setAction] = useState("Login")
    return (
        <form>
            <div>
                <div className='container flex flex-col m-auto mt-[100px] w-[600px]  bg-[#F0F8FF]  rounded-[30px]'>
                    {action === 'Login' ? 

                    <div className='flex flex-col  pl-14 gap-2 w-full mt-[30px]'>
                    <div className='text-black'>
                        <h1 className='font-bold text-4xl'>Sign In</h1>
                        <p>Sign in into your account</p>
                    </div>
                    </div> : 
                    <div className='flex flex-col  pl-14 gap-2 w-full mt-[30px]'>
                    <div className='text-black'>
                        <h1 className='font-bold text-4xl'>Create Account</h1>
                        <p>Sign up with your email for registration</p>
                    </div>

                </div>
                    }
                    <div className='mt-[20px] flex flex-col gap-[25px]'>
                        {action === "Login" ? <div></div> : <div className='m-auto items-center'>
                            <label htmlFor='email' className='font-semibold'>Full name: </label>
                            <div className='flex w-[480px] m-auto items-center  h-[60px] border-2 border-[#eaeaea] rounded-[6px]'>
                                <img src='/assets/person.png' alt='password' className='my-0 mx-[30px]' />
                                <input type='text' placeholder='user' className='h-[50px] w-[400px] bg-transparent border-none outline-none color-[#797979] text-lg' />
                            </div>
                        </div>}
                        <div className='m-auto items-center'>
                            <label htmlFor='email' className='font-semibold'>Email: </label>
                            <div className='flex w-[480px] m-auto items-center  h-[60px] border-2 border-[#eaeaea] rounded-[6px]'>
                                <img src='/assets/email.png' alt='email' className='my-0 mx-[30px]' />
                                <input type='email' placeholder='Email' className='h-[50px] w-[400px] bg-transparent border-none outline-none color-[#797979] text-lg' />
                            </div>
                        </div>
                        <div className='m-auto items-center'>
                            <label htmlFor='email' className='font-semibold'>Password: </label>
                            <div className='flex w-[480px] m-auto items-center  h-[60px] border-2 border-[#eaeaea] rounded-[6px]'>
                                <img src='/assets/password.png' alt='password' className='my-0 mx-[30px]' />
                                <input type='password' placeholder='Passsword' className='h-[50px] w-[400px] bg-transparent border-none outline-none color-[#797979] text-lg' />
                            </div>
                        </div>
                        {action === "Login" ? <div></div> : <div className='m-auto items-center'>
                            <label htmlFor='confirm-password' className='font-semibold'>Confirm Password: </label>
                            <div className='flex w-[480px] m-auto items-center  h-[60px] border-2 border-[#eaeaea] rounded-[6px]'>
                                <img src='/assets/password.png' alt='password' className='my-0 mx-[30px]' />
                                <input type='password' placeholder='Confirm Passsword' className='h-[50px] w-[400px] bg-transparent border-none outline-none color-[#797979] text-lg' />
                            </div>
                        </div>
                        }
                    </div>
                    <div className='flex flex-col gap-[5px] my-[60px] mx-auto'>
                        <div className='flex w-[480px] m-auto items-center justify-center h-[60px] bg-[#E179CB] rounded-[50px]'>Sign Up</div>
                        <h1 className='text-center font-bold'>Or</h1>
                        <div className='flex w-[480px] m-auto items-center justify-center h-[60px] border-2 border-[#346987] rounded-[50px]'>
                            <img src='/assets/google.png' alt='google' />
                            <p className='text-black font-bold'>Continue with Google</p>
                        </div>
                        <div>
                           {action === 'Login' ? <h1 className='text-center font-semibold'>Don't have an account?
                           <span onClick={() => setAction("Signin")} className='text-[#D7DF4D]'>Signup</span>
                           </h1> : 
                            <h1 className='text-center font-semibold'>Already have an account? 
                            <span onClick={() => setAction("Login")} className='text-[#D7DF4D]'>Signin</span>
                            </h1>}
                        </div>
                    </div>


                </div>

            </div>
        </form>
    )
}

export default Signup
