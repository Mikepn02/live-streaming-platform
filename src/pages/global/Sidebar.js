import React from 'react'
import { sidebarLinks } from '../../constants'
import { useLocation, Link } from 'react-router-dom'
import { Button } from '@mui/material';

const Sidebar = () => {
    const location = useLocation()
    return (
        <div className='custom-scrollbar leftsidebar'>
            <div className='flex justify-center pt-5  space-x-4 items-center font-bold'>
                <img src='/assets/vector.png' alt='logo' />
                <p>Videbucks</p>
            </div>
            <div>
                <button className='flex mx-auto px-5 justify-center items-center space-x-2 my-10 text-white bg-[#E179CB] w-42 h-10 rounded-lg hover:bg-[#D760B4] focus:outline-none focus:ring-2 focus:ring-[#E179CB]'>
                    <img src='/assets/hotspot.png' alt='hotspot' width={24} height={24} />
                    <p className='text-sm-1 flex font-semibold'>Stream now</p>
                </button>

            </div>
            <div className='flex -w-full flex-1 flex-col gap-6 px-6'>
                {sidebarLinks.map((link) => {
                    const isActive = (location.pathname.includes(link.navigate) && link.navigate.length > 1) || link.navigate === location.pathname;

                    return (
                        <Link
                            to={link.navigate}
                            key={link.label}
                            className={`leftsidebar_link ${isActive && "bg-red-500"}`}
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
        </div>

    )
}

export default Sidebar
