import React from 'react';

const Livestream = () => {
  return (
    <div className='stream-bg flex flex-col md:flex-row w-full'>
      <div className='md:w-1/2 h-auto md:h-screen'>
        <button className='relative flex ml-2 md:ml-12 space-x-2 rounded-[50px] w-[9vw] md:w-40 h-16 md:h-auto items-center justify-center mt-5'>
          <div className='bg-white w-full h-full rounded-[50px] opacity-5 absolute inset-0'></div>
          <img src='/assets/play.svg' alt='play' width={24} />
          <h1 className='text-white font-bold'>LIVE STREAM</h1>
        </button>
        <div className='p-5 md:p-10 space-y-5'>
          <h1 className='text-2xl md:text-3xl text-white mt-auto'>Live:Cyberpunk vs Nemiga</h1>
          <div className='flex space-x-4 items-center'>
            <div className='rounded-full bg-white w-12 h-12'></div>
            <p className='text-white text-lg md:text-xl'>iShowSpeed</p>
          </div>
          <p className='text-white md:w-2/4'>IShowSpeed · bald · Videos · Subsrube to my 2nd channel on YT · Popular videos · Shorts · i might die bye · I Met Neymar · Eu Prado No Bailo With Neymar .</p>
          <p className='text-white'>45,334 Followers</p>
        </div>
      </div>
      <div className='md:w-1/2 justify-between items-end p-5 md:p-8 '>
        <div className=''>
          <button className='relative flex ml-0 space-x-2 rounded-[50px] w-[9vw] md:w-40 h-10 md:h-auto items-center justify-center mt-5'>
            <div className='bg-white w-full h-full opacity-[17%] rounded-[50px] absolute inset-0'></div>
            <h1 className='text-white font-bold'>32,234 viewers</h1>
          </button>
        </div>
        <div className='p-5 gap-5'>
          <div className='flex flex-col gap-5 justify-end items-end'>
            <div className='flex space-x-4 items-center'>
              <p className='text-white text-lg md:text-xl'>iShowSpeed</p>
              <div className='rounded-full bg-white w-12 h-12'></div>
            </div>
            <div>🔥🔥🔥🔥🔥</div>
            <div className='flex space-x-4 items-center'>
              <p className='text-white text-lg md:text-xl'>iShowSpeed</p>
              <div className='rounded-full bg-white w-12 h-12'></div>
            </div>
            <div className='text-white'>Nice streaming🔥🔥</div>
          </div>
          <div className='flex items-end mt-5'>
            <input
              type='email'
              placeholder='Type a message'
              className='flex-1 h-[50px] md:w-[70vw] lg:w-[35vw] bg-white opacity-[9%] rounded-[10px] outline-none px-4 text-lg text-[#797979]'
            />
          </div>
          <div className='flex justify-end items-center mt-4 space-x-8'>
            <div className='relative'>
              <div className='bg-white opacity-[17%] absolute inset-0 rounded-full p-2 w-12 h-12'></div>
              <img src='/assets/heart.svg' alt='heart' className='relative mt-4 ml-4' />
            </div>
            <div className='relative'>
              <div className='bg-white opacity-[17%] absolute inset-0 rounded-full p-2 w-12 h-12'></div>
              <img src='/assets/gift.svg' alt='gift' className='relative mt-4 ml-4' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Livestream;
