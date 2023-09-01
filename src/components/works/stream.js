import React from 'react'

const Stream = () => {
    return (
        <div className='w-full md:w-[80%]  h-auto md:h-[80vh] flex-start  md:px-6 px-6 flex flex-col md:flex-row justify-around mt-32 mx-auto'>
            <div className='max-w-lg flex-start'>
                <h1 className='text-2xl font-semibold pb-5'>Meet Live Stream</h1>
                <p>
                    Start live streaming and making money with Live Stream Start live streaming
                    and making money with Live Stream Start live streaming and
                    making money with Live Stream Start live streaming and making money with Live Stream Start
                </p>

                
                <div className='border-2 border-black mt-5 p-8'>
                    <h1 className='font-bold text-gradient-to-r from-pink-400 via-purple-500 to-green-400'>Live Stream</h1>

                    <p>You live stream and give interesting content to th world</p>
                </div>
                <div className='border-2 border-black mt-5 p-8'>
                    <h1 className='font-bold text-gradient-to-r from-pink-400 via-purple-500 to-green-400'>Live Stream</h1>

                    <p>You live stream and give interesting content to th world</p>
                </div>
                <div className='border-2 border-black mt-5 p-8'>
                    <h1 className='font-bold text-gradient-to-r from-pink-400 via-purple-500 to-green-400'>Live Stream</h1>

                    <p>You live stream and give interesting content to th world</p>
                </div>
            </div>
            <div className='flex flex-col items-center  mt-4 md:mt-0 md:flex-row'>
                <img src='/assets/round.png' alt='round' className='w-100 h-96' />
                <img src='/assets/i12.png' alt='iphone' className='z-10 -ml-[300px] w-64 h-auto' />
                <img src='/assets/frame2.png' alt='frame' className='-ml-[300px] z-10 w-96 h-auto' />
            </div>
        </div>
    )
}

export default Stream
