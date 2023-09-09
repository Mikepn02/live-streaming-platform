import React from 'react'
import { Slide3 } from './slide'
import { Userpostinfo } from '../../constants/index';
import Userpost from '../../components/cards/Userpost';

const ChallengeContent = () => {
    return (
        <div className="">
            <div className="md:space-x-2 md:mt-8 mt-8 h-[45vh] flex w-full">
                <Slide3 />
            </div>
            <h1 className='font-semibold text-xl mt-1'>User's post</h1>
            <div className='w-full'>

                <div className='flex flex-wrap gap-16 mt-5'>
                    <div className='bg-gradient-to-r from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D] mt-5 rounded-[20px] md:w-1/4 w-full h-60 flex flex-col items-center justify-center text-white'>
                        <img src='/assets/video-plus.svg' alt='video' width={100} height={100} />
                        <p>Create post</p>
                    </div>
                    {Userpostinfo.map((post, item) => (
                        <Userpost
                            key={item} // Make sure to provide a unique key when mapping
                            profile={post.profile}
                            user={post.user}
                            image={post.img}
                            topic={post.topic}
                            className="w-1/4" // Set the width of each item to 25% (four items in a row)
                        />
                    ))}
                </div>


            </div>

        </div>
    )
}

export default ChallengeContent
