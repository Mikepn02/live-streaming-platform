import React, { useState } from 'react'
import Giftcard from '../../components/cards/Giftcard'
import { Gifts } from '../../constants'
import { Link , useNavigate } from 'react-router-dom'

const SendGift = () => {
    const [isVisible , setIsVisible] = useState(true)
    const navigate = useNavigate()
    const handleCloseClick = () => {
        setIsVisible(false)
        navigate('/challenge')
    }
    return (
        <div className='stream-bg h-screen flex justify-center items-center'>
            <div className={`bg-white w-[50vw] h-[45vh] rounded-[20px]  overflow-x-auto ${isVisible ? '' : 'hidden'}`}>
                <div className='flex justify-end pr-8 pt-8  items-center'>
                <Link 
                to='/challenge'
                onClick={handleCloseClick}
                className='bg-black text-white flex items-center w-8 h-8 fixed rounded-full justify-center'>
                    X
                </Link>
                </div>
                <h1 className='text-center text-xl font-bold mt-16'>Send Gift</h1>
                <div className='flex w-[30%] m-auto items-center  h-[50px] border-2 bg-[#FAFAFA] rounded-[50px]'>
                    <input type='email' placeholder='Send a gift' className='h-[50px] w-[400px] indent-4 bg-transparent border-none outline-none color-[#797979] text-lg' />
                    <img src='/assets/search.svg' alt='search' className='my-0 mx-[30px]' />
                </div>
                <div className='grid grid-cols-4 p-5 justify-center gap-4  mt-4'>
                  {Gifts.map((gift) => (
                     <Giftcard 
                     image={gift.image}
                     gift={gift.gift}
                     />
                  ))}
                </div>
            </div>
        </div>

    )
}

export default SendGift
