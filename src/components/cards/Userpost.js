import React from 'react';
import { Box } from '@mui/material';

const Userpost = ({ profile, user, image, topic }) => {
  return (
    <div className='md:w-1/4 w-full'>
      <Box className='flex flex-col  border-2 rounded-[20px]  p-5 space-y-5 '>
        <div className="relative space-y-2 flex justify-between items-center">
          <div className='flex space-x-2 items-center'>
            <img src={profile} alt="strange" className="rounded-[20px]" width={32} height={32} />
            <p className='font-bold'>{user}</p>
          </div>
          <p className='text-[#707070] font-semibold'>1h ago</p>
        </div>

        <div>
        {image && (
          <div>
            <img src={image} alt='post' className='w-full max-h-[20vh] rounded-[20px]' />
          </div>
        )}
          
          <h1 className='mt-2'>{topic}</h1>
        </div>

        <div className='px-2 flex justify-between items-center'>
          <div className='flex space-x-2'>
            <div className='bg-gradient-to-r from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D] rounded-full p-2'><img src='/assets/up.svg' alt='like' /></div>
            <div className='bg-gradient-to-r from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D] rounded-full p-2'><img src='/assets/down.svg' alt='like' /></div>
            <img src='/assets/comment.svg' alt='comment' />
          </div>
          <button className='bg-[#9A9A9A] to-[#D7DF4D]  w-24 h-8 rounded-[20px] text-white font-semibold'>Challenge</button>
        </div>
      </Box>
    </div>
  );
}

export default Userpost;
