import React from 'react'
import { Box } from '@mui/material'

const Followercard = ({title , host, user,image , viewers}) => {
  return (

            <div>
                <Box className='flex flex-col b w-[30vw] bg-aliceblue h-[40vh]  rounded-[40px]'>
                    <div>
                    <img src={image} alt='strange' className='h-[25vh] w-fit   rounded-t-[40px]'/>
                    <img src='/assets/play.png' alt='play' className='-mt-40 ml-52 absolute'/>
                    <button className='-mt-52  ml-96 absolute bg-[#D985BD] text-white font-bold w-20 h-8 rounded-[10px]'>{host}</button>
                    </div>
                    <div className='flex justify-between p-5'>
                        <p className='font-semibold '>{title}</p>
                        <img src='/assets/dots.png' alt='more' />
                    </div>
                    <p className='px-5 text-[#7F7F7F]'>{user}</p>
                    <div className='px-5 flex justify-between'>
                        <p className='font-semibold text-[#7F7F7F]'>{viewers} viewers</p>
                        <div className='space-x-5'>
                          <button className='bg-[#DE9D9F] text-black w-32 h-10 rounded-[20px]'>Watch Now</button>
                          
                        </div>
                    </div>
    
                </Box>
                
            </div>
        )
    }


export default Followercard
