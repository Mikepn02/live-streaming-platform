import React from 'react'

const Livestream = () => {
    return (
        <div className='stream-bg flex flex-row justify-between w-full h-[100vh]'>
            <div className='flex flex-col justify-between'>
                <button className='relative flex ml-12 space-x-2 rounded-[50px] w-[9vw] h-16 items-center justify-center mt-5'>
                    <div className='bg-white w-full h-full rounded-[50px] opacity-5 absolute inset-0'></div>
                    <img src='/assets/play.svg' alt='play' width={24} />
                    <h1 className='text-white font-bold'>LIVE STREAM</h1>
                </button>
                <div className='w-1/3 p-10 space-y-5'>
                    <h1 className='text-3xl  text-white mt-auto'>Live:Cyberpunk vs Nemiga</h1>
                    <div className='flex space-x-4 items-center'>
                        <div className='rounded-full bg-white w-16 h-16'></div>
                        <p className='text-white text-xl'>iShowSpeed</p>
                    </div>
                    <p className=' text-white'>IShowSpeed · bald · Videos · Subsrube to my 2nd channel on YT · Popular videos · Shorts · i might die bye · I Met Neymar · Eu Prado No Bailo With Neymar .</p>
                    <p className='text-white'>45,334 Followers</p>
                </div>
            </div>
            <div className='flex flex-col justify-between'>
                <div className=''>
                    <button className='relative flex ml-0 space-x-2 rounded-[50px] w-[9vw] h-10 items-center justify-start mt-5'>
                        <div className='bg-white w-full h-full opacity-[17%] rounded-[50px] absolute inset-0'></div>
                        <h1 className='text-white font-bold'>32,234 viewers</h1>
                    </button>
                </div>

                <div className='p-5'>
                    <div className='flex flex-col gap-5'>
                        <div className='flex space-x-4 items-center'>
                            <p className='text-white text-xl'>iShowSpeed</p>
                            <div className='rounded-full bg-white w-16 h-16'></div>
                        </div>
                        <div>🔥🔥🔥🔥🔥</div>
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
                            className='flex-1 h-[50px]  max-w-[80%] bg-white opacity-[9%] rounded-[50px] outline-none px-4 text-lg text-[#797979]'
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Livestream
