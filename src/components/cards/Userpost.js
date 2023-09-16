import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { decrementLike, decrementUnlike, likePost, unlikePost } from '../../state';
import { Link } from 'react-router-dom';

const Userpost = ({ profile, user, image, topic, likes, unlikes, isLiked, postId }) => {
  const dispatch = useDispatch();
  const handleLike = () => {
    dispatch(likePost({ postId }))
    dispatch(decrementUnlike({ postId }))
  }
  const handleUnlike = () => {
    dispatch(unlikePost({ postId }))
    dispatch(decrementLike({ postId }))
  }
  return (
    <div className='xl:w-1/4 lg:w-1/4 w-full'>
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
            <div
              onClick={handleLike}
              className='bg-gradient-to-r from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D] rounded-full p-2 flex space-x-2'>
              <img src='/assets/up.svg' alt='like' />
              <h1 className='text-white font-bold'>{likes}</h1>
            </div>
            <div
              onClick={handleUnlike}
              className='bg-gradient-to-r from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D] rounded-full p-2 flex'>
              <img src='/assets/down.svg' alt='unlike' />
              <h1 className='text-white font-bold'>{unlikes}</h1>
            </div>
            <img src='/assets/comment.svg' alt='comment' />
          </div>
          <Link
            to='/challenge'
          >
            <button className='bg-[#9A9A9A] to-[#D7DF4D]  w-24 h-8 rounded-[20px] text-white font-semibold'>Challenge</button>
          </Link>
        </div>
      </Box>
    </div>
  );
}

export default Userpost;
