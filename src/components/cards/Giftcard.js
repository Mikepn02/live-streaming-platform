import React from 'react'

const Giftcard = ({image,gift}) => {
    return (
        <div>
            <div className='border-2 border-pink-500 w-52 p-4 h-36 rounded-[10px] flex flex-col items-center justify-center'>
                <img src={image} alt='flower'/>
                <h1 className='text-center font-bold'>{gift}</h1>
                <button className='text-white bg-pink-500 w-full rounded-[10px]'>Send gift</button>
                </div>
        </div>
    )
}

export default Giftcard
