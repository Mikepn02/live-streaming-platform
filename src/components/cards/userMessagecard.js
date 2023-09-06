import React, { useState } from 'react'

const UserMessagecard = ({ image, name, message, time, delivered }) => {
  const [messageRead, setMessageRead] = useState(false);
  const handleMarkAsRead = () => {
    setMessageRead(true);
  };
  return (
    <div className='border-b-2 flex justify-between p-3'>
      <div className=" flex space-x-4 ">
        <div className='rounded-full border-2 border-pink-500 p-1'>
          <img src={image} alt="user" width={50} height={50} />
        </div>
        <div>
          <h1 className='font-semibold'>{name}</h1>
          <p className='text-[#979797]'>{message}</p>
        </div>
      </div>
      <div className=''>
        <h1 className='text-end font-semibold'>{time}</h1>
        {name === 'Mad Boy' ? (
          messageRead ? (
            <p>{delivered}</p>
          ) : (
            <button onClick={handleMarkAsRead} className='bg-gradient-to-r from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D] text-white rounded-full w-6 h-6'>1</button>
          )
        ) : (
          <p>{delivered}</p>
        )}
      </div>
    </div>

  )
}

export default UserMessagecard
