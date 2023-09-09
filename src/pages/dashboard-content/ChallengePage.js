import React from 'react';
import { Link } from 'react-router-dom';


const ChallengePage = () => {
    return (
        <div className='h-screen w-full'>
            <div className='h-[50%] lg:h-[50%] stream-bg'>
                <div className='flex flex-col h-full lg:justify-between'>
                    <div className='flex  justify-between'>
                        <Link 
                        to='/dashboard'
                        className='relative ml-12 space-x-2 rounded-[50px] lg:w-[9vw] w-[50%] h-16 items-center justify-center mt-5 hidden lg:flex'>
                            <div className='bg-white w-full h-full rounded-[50px] opacity-5 absolute inset-0'></div>
                            <img src='/assets/play.svg' alt='play' width={24} />
                            <h1 className='text-white font-bold'>LIVE STREAM</h1>
                        </Link>
                        <div className='flex flex-row lg:flex-row lg:pr-8 pr-2  lg:items-center space-x-20 lg:justify-center mt-10 lg:mt-0'>
                            <div className='flex flex-col justify-start p-2 space-y-3 items-start  lg:hidden'>
                                <div className='flex items-center justify-center space-x-4'>
                                    <div className='rounded-full bg-white w-16 h-16'></div>
                                    <p className='text-white'>iShowSpeed</p>
                                </div>
                                <p className='text-white'>432,222 Followers</p>
                            </div>
                            <div className='flex flex-col lg:flex-row gap-4 justify-end items-end'>
                                <button className='relative flex ml-0  bg-1 w-full space-x-2 rounded-[50px] lg:w-[9vw]  h-10 items-center justify-center'>
                                    <h1 className='text-white font-bold'>32,234 viewers</h1>
                                </button>
                                <Link
                                    to='/coins'
                                    className='text-white bg-gradient-to-r from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D] rounded-full w-32 h-10 flex items-center justify-center'
                                >
                                    Give coins
                                </Link>
                                <Link to='/gift' className='rounded-[50%]'>
                                    <img src='/assets/gift.png' alt='gift' width={40} height={40} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='hidden lg:block p-5 space-y-2 bg-1 mt-5 w-full lg:w-[30%] lg:rounded-[10px] ml-8 mb-4'>
                        <h1 className='text-3xl text-white mt-aut'>Live:Cyberpunk vs Nemiga</h1>
                        <div className='flex space-x-4 items-center'>
                            <div className='rounded-full bg-white w-16 h-16'></div>
                            <p className='text-white text-xl'>iShowSpeed</p>
                        </div>
                        <p className='text-white'>
                            IShowSpeed · bald · Videos · Subscribe to my 2nd channel on YT · Popular videos · Shorts · I might
                            die bye · I Met Neymar · Eu Prado No Bailo With Neymar .
                        </p>
                    </div>
                </div>
            </div>
            <div className='h-1/2 lg:h-[50%] challenge-bg flex flex-col lg:flex-row justify-between'>
                <div className='flex flex-col w-full lg:w-[50%] h-full'>
                    <div className='hidden lg:block p-5 space-y-2 bg-2 mt-auto w-full lg:w-[60%] lg:rounded-[10px] ml-8 mb-4'>
                        <h1 className='text-3xl text-white mt-aut'>Live:Cyberpunk vs Nemiga</h1>
                        <div className='flex space-x-4 items-center'>
                            <div className='rounded-full bg-white w-16 h-16'></div>
                            <p className='text-white text-xl'>iShowSpeed</p>
                        </div>
                        <p className='text-white'>
                            IShowSpeed · bald · Videos · Subscribe to my 2nd channel on YT · Popular videos · Shorts · I might
                            die bye · I Met Neymar · Eu Prado No Bailo With Neymar .
                        </p>
                    </div>
                </div>
                <div className='flex flex-row  lg:flex-col-reverse space-x-20 lg:justify-between justify-between p-8'>
                    <div>
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
                        <div className='hidden lg:flex items-end mt-5'>
                            <input
                                type='email'
                                placeholder='Type a message'
                                className='flex-1 h-[80px] w-full sm:w-[80%] lg:w-[20vw] bg-white opacity-[9%] rounded-[10px] outline-none px-4 text-lg text-[#797979]'
                            />
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-8 items-end  space-x-3 pr-8 '>
                        <button className='relative flex ml-0  bg-4 w-full space-x-2 rounded-[50px] lg:w-[9vw]  h-10 items-center justify-center'>
                            <h1 className='text-white font-bold'>32,234 viewers</h1>
                        </button>
                        <Link
                            to='/coins'
                            className='text-white bg-[#D7DF4D] rounded-full w-32 h-10 flex items-center justify-center'
                        >
                            Give coins
                        </Link>
                        <Link to='/gift' className='rounded-[50%]'>
                            <img src='/assets/gift.png' alt='gift' width={40} height={40} />
                        </Link>
                    </div>

                </div>

                <div className='m-auto items-center mb-10 lg:hidden'>
                    <div className='flex w-full m-auto items-center  h-[60px] border-2 bg-white  border-[#eaeaea] rounded-[6px]'>
                        <input type='text' placeholder='Type a message' className='h-[50px] w-[80%] indent-8 bg-transparent border-none outline-none color-[#797979] text-lg' />
                        <img src='/assets/paperplane.svg' alt='password' className='my-0 mx-[30px]' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChallengePage;
