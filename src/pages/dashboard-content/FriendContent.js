import React , { useState } from 'react'
import { UserFollowcard2 } from '../../components/cards/UserFollowcard'
import { userFollowercardinfo2 } from '../../constants'
import Followercard from '../../components/cards/Followercard'
import { Followercardinfo } from '../../constants'

const FriendContent = () => {
    const itemsPerPage = 2;
    const [currentPage, setCurrentPage] = useState(1);
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Followercardinfo.slice(0, indexOfLastItem);
  
    const loadMore = () => {
      if (indexOfLastItem < Followercardinfo.length) {
        setCurrentPage(currentPage + 1);
      }
    };
  return (
    <div className=''>
      <h1 className=' font-bold md:mt-10 text-xl'>Your friends</h1>
      <div className='grid md:grid-cols-4 gap-2 mt-5 md:mx-0 mx-auto md:grid grid-cols-1 md:space-x-2 md:mt-3 w-full'>
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
      <h1 className='md:mt-20 mt-3 font-bold text-xl'>Your friends are streaming</h1>
      <div className="md:mt-10 w-full">
        <div className="md:mt-3 mt-2 md:mb-0 mb-8 w-full">
          <div className="md:grid md:grid-cols-2 md:gap-3 ">
            {currentItems.map((follower, i) => (
              <div key={i}>
                <Followercard
                  title={follower.title}
                  host={follower.host}
                  user={follower.user}
                  image={follower.img}
                  viewers={follower.viewers}
                />
              </div>
            ))}
          </div>
        </div>

        {indexOfLastItem < Followercardinfo.length && (
          <div className="mt-4">
              <p
              onClick={loadMore}
              className="font-bold tetx-2xl text-center text-pink-500 "
              >Show more</p>
          </div>
        )}
      </div>

      <h1 className='font-bold md:mt-10 text-xl'>People you may know</h1>
      <div className='grid md:grid-cols-4 gap-2 mt-5 md:mx-0 mx-auto md:grid grid-cols-1 md:space-x-2 md:mt-3 w-full'>
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

export default FriendContent
