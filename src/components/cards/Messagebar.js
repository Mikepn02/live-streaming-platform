import React from 'react'

const Messagebar = () => {
  return (
    <div className='flex justify-between p-3 border-b-2'>
          <div className='flex space-x-2'>
            <div className='rounded-full border-2 border-pink-500 p-1'>
              <img src='/assets/follower.png' alt="user" width={50} height={50} />
            </div>
            <div className='flex flex-col items-center justify-center '>
              <h1 className='font-semibold'>Jenna Ortega</h1>
              <p className='text-[#979797]'></p>
            </div>
          </div>
          <div className='flex space-x-3'>
            <img src='/assets/call.svg' alt='call'/>
            <img src='/assets/video.svg' alt='call'/>
            <img src='/assets/dots.svg' alt='call'/>
          </div>
    </div>
  )
}

export default Messagebar
