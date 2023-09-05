import React from 'react'

const Usercard = ({name , followers}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='border-2 border-pink-500 rounded-[50%] p-2'>

       <img src='/assets/user.png' alt='user' width={200} height={200}/>
      </div>
       <p>{name}</p>
       <p className='font-semibold'>Followers: {followers}</p>
    </div>
  )
}

export default Usercard
