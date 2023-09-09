import React from 'react'
import Bottombar from '../global/Bottombar'
import { Link } from 'react-router-dom'

const Livestream = () => {
    return (
        <div className='stream-bg flex flex-col lg:flex-row justify-between w-full min-h-screen lg:h-screen'>
            <div className='flex flex-col lg:w-1/2 justify-between'>
                <div className='flex justify-between'>
                <Link 
                        to='/dashboard'
                        className='relative ml-12 space-x-2 rounded-[50px] lg:w-[9vw] w-[50%] h-16 items-center justify-center mt-5 hidden lg:flex'>
                            <div className='bg-white w-full h-full rounded-[50px] opacity-5 absolute inset-0'></div>
                            <img src='/assets/play.svg' alt='play' width={24} />
                            <h1 className='text-white font-bold'>LIVE STREAM</h1>
                        </Link>
                    <button className='relative flex ml-4 lg:ml-0 space-x-2 rounded-full lg:rounded-[50px] bg-3 w-[40vw] lg:w-[9vw] h-16 lg:h-10 items-center justify-center mt-5 lg:hidden'>
                        <h1 className='text-white font-bold'>32,234 viewers</h1>
                    </button>
                </div>
                <div className='p-5 lg:p-10 space-y-3 lg:space-y-5 mt-96 lg:mt-0'>
                    <h1 className='text-2xl lg:text-3xl  text-white hidden lg:flex'>Live:Cyberpunk vs Nemiga</h1>
                    <div className='space-x-2 lg:space-x-4 items-center hidden lg:flex'>
                        <div className='rounded-full bg-white w-10 lg:w-16 h-10 lg:h-16 '></div>
                        <p className='text-white text-xl'>iShowSpeed</p>
                    </div>
                    <p className=' text-white lg:w-1/2 text-sm lg:text-lg'>IShowSpeed · bald · Videos · Subsrube to my 2nd channel on YT · Popular videos · Shorts · i might die bye · I Met Neymar · Eu Prado No Bailo With Neymar .</p>
                    <p className='text-white'>45,334 Followers</p>
                </div>
            </div>
            <div className='flex flex-col lg:w-1/2  justify-between items-start lg:items-end p-4'>
                <div className='hidden lg:flex'>
                    <button className='relative flex ml-4 lg:ml-0 space-x-2 rounded-full lg:rounded-[50px] bg-4 w-[40vw] lg:w-[9vw] h-16 lg:h-10 items-center justify-center mt-5'>
                        <h1 className='text-white font-bold'>32,234 viewers</h1>
                    </button>
                </div>

                <div className='chats p-2 lg:p-5'>
                    <div className='flex flex-col gap-2 lg:gap-5 lg:justify-end justify-start lg:items-end items-start '>
                        <div className='flex space-x-2 lg:space-x-4 items-center'>
                            <div className='rounded-full bg-white w-10 lg:w-16 h-10 lg:h-16 hidden lg:flex'></div>
                            <p className='text-white text-xl'>iShowSpeed</p>
                        </div>

                        <div>🔥🔥🔥🔥🔥</div>
                        <div className='flex space-x-2 lg:space-x-4 items-center'>
                            <div className='rounded-full bg-white w-10 lg:w-16 h-10 lg:h-16 hidden lg:flex'></div>
                            <p className='text-white text-xl'>iShowSpeed</p>
                        </div>

                        <div className='text-white p-2'>Nice🔥🔥🔥</div>
                    </div>
                    <div className='flex lg:flex-col flex-row'>
                        <div className='flex items-end mt-3 lg:mt-5'>
                            <input
                                type='email'
                                placeholder='Type a message'
                                className='flex-1 h-10 lg:h-12 w-full lg:w-[35vw] bg-white opacity-[9%] rounded-full lg:rounded-[10px] outline-none px-4 text-base lg:text-lg text-[#797979]'
                            />
                        </div>
                        <div className='flex lg:flex-row flex-col justify-end items-center mt-3 lg:mt-4 space-x-5 lg:space-x-8'>
                            <div className='relative hidden lg:flex bg-3 rounded-[50px] p-4'>
                                <img src='/assets/heart.svg' alt='heart' className='relative' />
                            </div>
                            <div className='relative hidden lg:flex bg-3 rounded-[50px] p-4'>
                                <img src='/assets/gift.svg' alt='gift' className='relative' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <Bottombar/> */}

        </div>
    )
}

export default Livestream
