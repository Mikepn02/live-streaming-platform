import React from 'react'

const ChallengePage = () => {
    return (
        <div className='h-screen w-full'>
            <div className='h-1/2 stream-bg'>
                <div className='flex flex-col  h-full justify-between'>
                    <div className='flex justify-between'>
                        <button className='relative flex ml-12 space-x-2 rounded-[50px] w-[9vw] h-16 items-center justify-center mt-5'>
                            <div className='bg-white w-full h-full rounded-[50px] opacity-5 absolute inset-0'></div>
                            <img src='/assets/play.svg' alt='play' width={24} />
                            <h1 className='text-white font-bold'>LIVE STREAM</h1>
                        </button>
                        <div className='flex space-x-3 pr-8 items-center justify-center'>
                            <button className='relative flex ml-0 space-x-2 rounded-[50px] w-[9vw] h-10 items-center justify-center'>
                                <div className='bg-white w-full h-full opacity-[17%] rounded-[50px] absolute inset-0'></div>
                                <h1 className='text-white font-bold'>32,234 viewers</h1>
                            </button>
                            <button className='text-white bg-pink-500 rounded-full w-32 h-10'>Give coins</button>
                            <button className='rounded-[50%]'>
                                <img src='/assets/gift.png' alt='gift' width={40} height={40} />
                            </button>
                        </div>

                    </div>
                    <div className='p-5 space-y-2 bg-1 mt-5 w-[30%] rounded-[10px] ml-8 mb-4'>
                        <h1 className='text-3xl  text-white mt-aut'>Live:Cyberpunk vs Nemiga</h1>
                        <div className='flex space-x-4 items-center'>
                            <div className='rounded-full bg-white w-16 h-16'></div>
                            <p className='text-white text-xl'>iShowSpeed</p>
                        </div>
                        <p className=' text-white'>IShowSpeed · bald · Videos · Subsrube to my 2nd channel on YT · Popular videos · Shorts · i might die bye · I Met Neymar · Eu Prado No Bailo With Neymar .</p>
                    </div>
                </div>
            </div>
            <div className='h-1/2 challenge-bg flex justify-between'>
                <div className='flex flex-col w-1/2 h-full'>
                    <div className='p-5 space-y-2 bg-2 mt-auto w-[60%] rounded-[10px] ml-8 mb-4'>
                        <h1 className='text-3xl  text-white mt-aut'>Live:Cyberpunk vs Nemiga</h1>
                        <div className='flex space-x-4 items-center'>
                            <div className='rounded-full bg-white w-16 h-16'></div>
                            <p className='text-white text-xl'>iShowSpeed</p>
                        </div>
                        <p className=' text-white'>IShowSpeed · bald · Videos · Subsrube to my 2nd channel on YT · Popular videos · Shorts · i might die bye · I Met Neymar · Eu Prado No Bailo With Neymar .</p>
                    </div>
                </div>
                <div className='flex flex-col justify-between p-8'>
                    <div className='flex space-x-3 pr-8 items-center justify-center'>
                        <button className='relative flex ml-0 space-x-2 rounded-[50px] w-[9vw] h-10 items-center justify-center'>
                            <div className='bg-[#D7DF4D] w-full h-full opacity-[17%] rounded-[50px] absolute inset-0'></div>
                            <h1 className='text-[#D7DF4D] font-bold'>32,234 viewers</h1>
                        </button>
                        <button className='text-black bg-[#D7DF4D] rounded-full w-32 h-10'>Give coins</button>
                        <button className='rounded-[50%]'>
                            <img src='/assets/gift.png' alt='gift' width={40} height={40} />
                        </button>
                    </div>
                    <div>
                        <div className='flex flex-col gap-5 justify-end items-end'>
                            <div className='flex space-x-4 items-center'>
                                <p className='text-white text-xl'>iShowSpeed</p>
                                <div className='rounded-full bg-white w-16 h-16'></div>
                            </div>
                            <div>😅😅😅😅</div>
                            <div className='flex space-x-4 items-center'>
                                <p className='text-white text-xl'>iShowSpeed</p>
                                <div className='rounded-full bg-white w-16 h-16'></div>
                            </div>
                            <div className='text-white'>Nice streaming🔥🔥</div>
                        </div>
                        <div className='flex items-end mt-5'>
                            <input
                                type='email'
                                placeholder='Type a message'
                                className='flex-1 h-[80px]  w-[20vw] bg-white opacity-[9%] rounded-[10px] outline-none px-4 text-lg text-[#797979]'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChallengePage
