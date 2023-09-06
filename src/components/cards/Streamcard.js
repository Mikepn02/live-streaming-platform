import { Box } from '@mui/material'
import React from 'react'

const Streamcard = ({title , host, user,image , topic , viewers}) => {
    return (
        <div className=''>
            <Box className='flex flex-col  bg-aliceblue h-[40vh] bg-[#F0F8FF] rounded-[40px]'>
                <div>
                <img src={image} alt='strange' className='h-[20vh] rounded-t-[40px] w-full'/>
                <img src='/assets/play.png' alt='play' className='-mt-32 ml-36 absolute'/>
                <button className='-mt-48  ml-72 absolute bg-[#D985BD] text-white font-bold w-20 h-8 rounded-[10px]'>{host}</button>
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
