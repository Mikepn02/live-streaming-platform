import React from 'react'
import { sidebarLinks } from '../../constants'
import { useLocation, Link } from 'react-router-dom'
import { Button } from '@mui/material';

const Sidebar = () => {
    const location = useLocation()
    return (
        <div className='custom-scrollbar leftsidebar'>
            <div className='flex justify-center pt-5  space-x-4 items-center font-bold'>
                <img src='/assets/logo.svg' alt='logo' />
                <p>Videbucks</p>
            </div>
            <div>
                <button className='flex mx-auto px-5 justify-center items-center space-x-2 my-10 text-white bg-gradient-to-r from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D]  w-42 h-10 rounded-lg hover:bg-[#D760B4] focus:outline-none focus:ring-2 focus:ring-[#E179CB]'>
                    <img src='/assets/hotspot.png' alt='hotspot' width={24} height={24} />
                    <p className='text-sm-1 flex font-semibold'>Stream now</p>
                </button>

            </div>
            <div className='flex -w-full flex-1 flex-col gap-3 px-6'>
                {sidebarLinks.map((link) => {
                    let isActive = (location.pathname.includes(link.navigate) && link.navigate.length < 1) || link.navigate === location.pathname;
                   let isStreamers = link.navigate;
                 

                    return (
                        <Link
                            to={link.navigate}
                            key={link.label}
                            className={`leftsidebar_link ${isActive && "bg-[#d1cece]"} ${isStreamers === '/dashboard/hhh' ? 'text-pink-500' : ''}`}
                        >
                            <img
                                src={link.imgUrl}
                                alt={link.label}
                                width={24}
                                height={24}

                            />

                            <p className=' max-lg:hidden'>{link.label}</p>
                        </Link>
                    )
                })}
            </div>

            <div className='mt-28 flex flex-col px-5 p-10'>
                <div className='space-y-8'>
                    <div className='flex font-bold space-x-2 justify-center items-center'>
                        <img src='/assets/download.svg' alt='download' />
                        <p>Mobile App</p>
                    </div>
                    <div className='flex font-bold text-pink-400 space-x-2 bg-[#d8df4d42] w-full h-12 items-center justify-center'>
                        <img src='/assets/crown.svg' alt='download' />
                        <p>Get Premium</p>
                    </div>
                    <div className='flex font-bold text-white bg-gradient-to-r from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D] space-x-2 w-42 h-12 justify-center items-center rounded-lg'>
                        <img src='/assets/addp.svg' alt='download' width={24} height={24} />
                        <p className=''>invite friend</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sidebar
