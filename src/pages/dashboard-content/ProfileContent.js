import React from 'react'
import { Link } from 'react-router-dom'
import { Slide3 } from './slide'

const ProfileContent = () => {
    return (
        <div className=''>
            <div className='flex flex-col md:flex-row md:space-x-28 md:space-y-0 space-y-4  w-full  items-center border-b-2 mt-8'>
                <div className='border-2  border-pink-400 rounded-full p-4'>
                    <img src='/assets/ishow.png' alt="strange" className="rounded-[20px] w-auto h-60" />
                </div>
                <div className='md:w-1/2 w-full justify-center items-center'>
                    <div className='flex md:justify-between justify-center items-center'>
                        <p className='font-bold text-3xl md:text-5xl'>iShowSpeed</p>
                        <button className='bg-gradient-to-r from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D] w-24 h-12 rounded-full justify-center items-center flex text-white'>
                            <img src='/assets/edit.svg' alt='edit' />
                            <p>Edit</p>
                        </button>
                    </div>
                    <p className='text-pink-500'>Gaming</p>
                    <p>IShowSpeed · bald · Videos · Subsrube to my 2nd channel on YT · Popular videos · Shorts · i might die bye · I Met Neymar · Eu Prado No Bailo With Neymar .</p>
                    <div className="flex space-x-4">
                        <p className="font-semibold">Followers</p>
                        <p className="font-semibold">Following</p>
                    </div>
                    <div className="flex space-x-4">
                        <p>12222</p>
                        <p>1222</p>
                    </div>
                    <Link to='/dashboard/bank '>
                        <button className='border-2 border-orange-200 text-orange-500 rounded-full w-auto h-10 p-2'>Connect to bank</button>
                    </Link>
                </div>

            </div>
            <h1 className='mt-5 font-semibold text-2xl md:text-3xl'>Recent Streams</h1>
            <div className='flex mt-4'>
                <Slide3 />
            </div>
        </div>
    )
}

export default ProfileContent
