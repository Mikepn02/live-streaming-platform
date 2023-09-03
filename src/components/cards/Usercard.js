import React from 'react'

const Usercard = ({name , followers}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
       <img src='/assets/user.png' alt='user' width={200} height={200}/>
       <p>{name}</p>
       <p className='font-semibold'>Followers: {followers}</p>
    </div>
  )
}

export default Usercard
