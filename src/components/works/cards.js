import React from 'react'

const Cards = () => {
  return (
    <div className='container mx-auto mt-10 w-[60%] flex flex-col md:flex-row space-x-5 h-96 '>
      <div className='border-2 border-[#E179CB] w-1/3 rounded-[10px] p-5 '>
        <img src='/assets/gift.png' alt='gift' className='w-16 h-16 text-[#E179CB] '/>
        <h1 className='font-semibold pt-5'>Get gifts from your users</h1>
        <p className='pt-5'>
        Live streaming has transformed the way content creators and 
        their audiences interact, bringing a new level of engagement and connection.
         In this digital age, creators from various platforms engage with their viewers in real time, fostering a 
        </p>
        <button className='text-black bg-[#E179CB] w-[7vw] h-[4vh] rounded-full mt-5'>Get Started</button>
      </div>
      <div className='border-2 border-[#E179CB] w-1/3 rounded-[10px] p-5'>
        <img src='/assets/account.png' alt='gift' className='w-16 h-16 text-[#E179CB]'/>
        <h1 className='font-semibold pt-5'>Get paid for your followers</h1>
        <p className='pt-5'>
        Live streaming has transformed the way content creators and 
        their audiences interact, bringing a new level of engagement and connection.
         In this digital age, creators from various platforms engage with their viewers in real time, fostering a 
        </p>
        <button className='text-black bg-[#E179CB] w-[7vw] h-[4vh] rounded-full mt-5'>Get Started</button>
      </div>
      <div className='border-2 border-[#E179CB] w-1/3 rounded-[10px] p-5'>
        <img src='/assets/account.png' alt='gift' className='w-16 h-16 text-[#E179CB]'/>
        <h1 className='font-semibold pt-5'>Invite 20 user to get 100$</h1>
        <p className='pt-5'>
        Live streaming has transformed the way content creators and 
        their audiences interact, bringing a new level of engagement and connection.
         In this digital age, creators from various platforms engage with their viewers in real time, fostering a 
        </p>
        <button className='text-black bg-[#E179CB] w-[7vw] h-[4vh] rounded-full mt-5'>Get Started</button>
      </div>
    </div>
  )
}

export default Cards
