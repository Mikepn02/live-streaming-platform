import React from 'react'
import { sidebarLinks } from '../../constants'
import { Link, useLocation } from 'react-router-dom'

const Bottombar = () => {
    const location = useLocation()
  return (
    <section className='bottombar'>
        <div className='bottombar_container'>
            {sidebarLinks.map((link) => {
                let isActive = (location.pathname.includes(link.navigate) && link.navigate.length < 1) || link.navigate === location.pathname;
                return (
                    <Link
                    key={link.label}
                    to={link.navigate}
                    className={`bottombar_link ${isActive && 'bg-red-500'}`}
                    >
                        <img 
                        src={link.imgUrl}
                        alt={link.label}
                        width={24}
                        height={24}
                        />

                    
                        <p className='text-subtle-medium text-white max-sm:hidden'>{link.label.split(/\s+/)[0]}</p>
                    </Link>
                )
            })}
        </div>

    </section>
  )
}

export default Bottombar
