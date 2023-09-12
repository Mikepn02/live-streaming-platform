import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { Box } from '@mui/material'

const Followercard = ({ title, host, user, image, viewers, action }) => {

    return (

        <div>
            <Box className='flex flex-col  md:w-[30vw] space-y-1 w-full bg-aliceblue md:h-[40vh] h-[60vh]'>
                <div className="relative space-y-2">
                    <img src={image} alt="strange" className="h-[25vh] rounded-[20px] w-auto rounded-t-[40px]" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img src="/assets/play.png" alt="play" className="inline-block" />
                    </div>
                    <button className="absolute top-0 left-[70%]  bg-gradient-to-r from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D] text-white font-bold w-20 h-8 rounded-[10px]">
                        {host}
                    </button>
                </div>

                <div className='flex justify-between p-5'>
                    <p className='font-semibold '>{title}</p>
                    <img src='/assets/dots.svg' alt='more' />
                </div>
                {action === 'challenge' ? (

                    <div className='flex justify-between pl-4 font-semibold pr-4 space-x-4'>
                        <p className='px-5 text-[#7F7F7F]'>{user}</p>
                        <p>Posted by {user}</p>
                    </div>
                ) : (
                    <p className='px-5 text-[#7F7F7F]'>{user}</p>
                )}
                <div className='px-5 flex justify-between'>
                    <p className='font-semibold text-[#7F7F7F]'>{viewers} viewers</p>
                    {action === 'challenge' ? (

                        <Link 
                        to='/challenge'
                        className='space-x-5'>
                            <button className='bg-gradient-to-r from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D] text-black w-32 h-10 rounded-[20px]'>Challenge</button>

                        </Link>
                    ) : (
                        <Link 
                        to='/livestream'
                        className='space-x-5'>
                            <button className='bg-gradient-to-r from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D] text-black w-32 h-10 rounded-[20px]'>Watch Now</button>

                        </Link>

                    )
                    }
                </div>

            </Box>

        </div>
    )
}


export default Followercard
