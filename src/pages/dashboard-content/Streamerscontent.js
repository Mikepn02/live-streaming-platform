import React from 'react'
import { Slide3 } from '../global/slide'
import { userFollowercardinfo2 } from '../../constants'
import { UserFollowcard2 } from '../../components/cards/UserFollowcard'


const Streamerscontent = () => {
  return (
    <div>
      <h1 className='mt-5 justify-start flex font-bold'>🔥Popular Streamers</h1>
      <div className='flex mt-4'>
       <Slide3 />
      </div>

      <h1 className='mt-28 font-bold'>People you may know</h1> 
      <div className='grid grid-cols-4 gap-5 mt-5'>
         {userFollowercardinfo2.map((user) => (
            <UserFollowcard2 
             name={user.name}
             image={user.image}
             about={user.about}
             followers={user.followers}
             following={user.following}
            />
         ))}
      </div>
    </div>
  )
}

export default Streamerscontent
