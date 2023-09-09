import { Box } from '@mui/material'
import React from 'react'

const Streamcard = ({title , host, user,image , topic , viewers}) => {
    return (
        <div className=''>
            <Box className='flex flex-col  bg-aliceblue h-[40vh] bg-[#F0F8FF] rounded-[40px]'>
                <div>
                <img src={image} alt='strange' className='h-[20vh] rounded-t-[40px] w-full'/>
                <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <img src="/assets/play.png" alt="play" className="inline-block" />
                </div>
                <button className="absolute top-0 left-[70%] top-2  bg-gradient-to-r from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D] text-white font-bold w-20 h-8 rounded-[10px]">
                        {host}
                </button>
                </div>
                <div className='flex justify-between p-5'>
                    <p className='font-semibold '>{title}</p>
                    <img src='/assets/dots.png' alt='more' />
                </div>
                <p className='px-5 text-[#7F7F7F]'>{user}</p>
                <h1 className='px-5 text-black font-semibold'>{topic}</h1>
                <div className='px-5 flex justify-between'>
                    <p className='font-semibold text-[#7F7F7F]'>{viewers} viewers</p>
                    <div className='space-x-5'>
                      <button className='bg-[#b3afaf] text-black w-20 rounded-[20px]'>RPG</button>
                      <button className='bg-[#b3afaf] text-black w-20 rounded-[20px]'>Strategy</button>
                    </div>
                </div>

            </Box>
        </div>
    )
}

export default Streamcard
