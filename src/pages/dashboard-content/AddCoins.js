import React from 'react'
import { useState } from 'react'

const AddCoins = () => {
    const [isVisible , setIsVisible] = useState(true)
    const handleCloseClick = () => {
        setIsVisible(false)
    }
    return (
        <div className='stream-bg h-screen flex justify-center items-center'>
            <div className={`bg-white w-[50vw] h-[45vh] rounded-[20px]  overflow-x-auto ${isVisible ? '' : 'hidden'}`}>
            <div className='flex justify-end pr-8 pt-8  items-center'>
                <button 
                onClick={handleCloseClick}
                className='bg-black text-white flex items-center w-8 h-8 fixed rounded-full justify-center'>
                    X
                </button>
                </div>
                <h1 className='text-center text-xl font-bold mt-16'>You don't have enought coins</h1>
                <p className='text-center mt-4'>Purchase your coin now</p>
                <div className='flex justify-center gap-4  mt-4'>
                    <div className='border-2 border-pink-500 w-52 p-4  h-52 rounded-[10px]'>
                        <h1 className='text-center font-bold'>100 Coins</h1>
                        <h1 className='text-center font-bold text-4xl'>13$</h1>
                        <p className='w-full'>100 coins allowing you to get ability to send send friend requestes and give a gifts.</p>
                        <button className='text-white bg-pink-500 w-full rounded-[10px]'>Purchase</button>

                    </div>
                    <div className='border-2 border-pink-500 w-52 p-4  h-52 rounded-[10px]'>
                        <h1 className='text-center font-bold'>300 Coins</h1>
                        <h1 className='text-center font-bold text-4xl'>$34</h1>
                        <p className='w-full'>300 coins allowing you to get ability to send send friend requestes and give a gifts.</p>
                        <button className='text-white bg-pink-500 w-full rounded-[10px]'>Purchase</button>

                    </div>
                    <div className='border-2 border-pink-500 w-52 p-4  h-52 rounded-[10px]'>
                        <h1 className='text-center font-bold'>500 Coins</h1>
                        <h1 className='text-center font-bold text-4xl'>$49</h1>
                        <p className='w-full'>500 coins allowing you to get ability to send send friend requestes and give a gifts.</p>
                        <button className='text-white bg-pink-500 w-full rounded-[10px]'>Purchase</button>

                    </div>
                    <div className='border-2 border-pink-500 w-52 p-4  h-52 rounded-[10px]'>
                        <h1 className='text-center font-bold'>1000 Coins</h1>
                        <h1 className='text-center font-bold text-4xl'>$89</h1>
                        <p className='w-full'>1000 coins allowing you to get ability to send send friend requestes and give a gifts.</p>
                        <button className='text-white bg-pink-500 w-full rounded-[10px]'>Purchase</button>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddCoins
