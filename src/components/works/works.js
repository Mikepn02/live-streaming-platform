import React from 'react';
import { Link } from 'react-router-dom';

const Describe = () => {
    return (
        <div className='w-full md:w-[80%] p-4 relative bg-[#ADBC8C]  md:px-6 px-6 flex flex-col-reverse md:flex-row items-center justify-center mx-auto mt-5'>
        <div className='text-white max-w-lg'>
            <h1 className='text-2xl font-semibold mb-4'>
                Start live streaming and making money with Live Stream
            </h1>
            <p className='mb-4'>
                Start live streaming and making money with Live Stream Start live streaming and making money with Live Stream Start live streaming and
                making money with Live Stream Start live streaming and making money with Live Stream Start live streaming and making money with Live Stream
            </p>
            <Link to='/dashboard' className='bg-white text-black font-semibold px-4 py-2  mb-5 rounded-[8px]'>Get Started</Link>
        </div>
        <img src='/assets/Frame 6.png' alt='frame' className='md:w-1/3 w-full h-[35vh]' />
        {/* <div className="hidden lg:flex absolute inset-x-0 bottom-0 h-20 bg-[#ADBC8C] transform skew-y-4 skew-y-6"></div>z */}
    </div>
    


    );
}

export default Describe;
