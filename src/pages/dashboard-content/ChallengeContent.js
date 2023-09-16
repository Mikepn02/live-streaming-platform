import React from 'react'
import { Slide3 } from './slide'
import Userpost from '../../components/cards/Userpost';
import { useDispatch, useSelector } from 'react-redux';

const ChallengeContent = () => {
    const posts = useSelector((state) => state.auth.posts);
    return (
        <div className=" md:w-[768px] xl:w-full">
            <div className="xl:space  space-x-2 xl:mt-8   mt-8 h-[45vh] flex w-full  ">
                <Slide3 />
            </div>
            <h1 className='font-semibold text-xl mt-1'>User's post</h1>
            <div className='w-full'>

                <div className='flex flex-wrap gap-16 mt-5'>
                    <div className='bg-gradient-to-r from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D] mt-5 rounded-[20px]  xl:w-1/4 w-full h-60 flex flex-col items-center justify-center text-white'>
                        <img src='/assets/video-plus.svg' alt='video' width={100} height={100} />
                        <p>Create post</p>
                    </div>
                    {posts.map((post) => {
                        return (
                            <Userpost
                            {...post}
                            key={post.postId} 
                            className="w-1/4" 
                        />
                        )
                    })}
                </div>


            </div>

        </div>
    )
}

export default ChallengeContent
