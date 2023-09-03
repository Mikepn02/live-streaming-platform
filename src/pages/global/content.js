import React from "react";

import Streamcard from "../../components/cards/Streamcard";
import { Streamcardinfo, userInfo } from "../../constants";
import Usercard from "../../components/cards/Usercard";

const Content = () => {
  return (
    <section>
      <div className="my-20 ml-10 justify-center mx-auto">
        <img src="/assets/car.png" alt="car" height={100} />
      </div>
      <div className="pl-10 py-10 space-y-10">
        <h1 className="font-semibold mt-10">Recommend For you</h1>
        <div className="space-x-8 flex">
          {Streamcardinfo.map((info) => (
            <Streamcard
              title={info.title}
              host={info.host}
              user={info.user}
              topic={info.topic}
              viewers={info.viewers}

            />
          ))}
        </div>
      </div>

      <div className="pl-10 py-10 space-y-10">
        <h1 className="font-semibold">Best streamers</h1>
        <div className="flex space-x-16">
          {userInfo.map((user) => (
            <Usercard
              name={user.name}
              followers={user.Followers}
            />
          ))}
        </div>
      </div>
      <h1 className="font-bold pl-10">How to make money</h1>
      <div className="pl-10 mt-36 justify-around">

        <div className="flex  justify-around space-x-10">
          <div className="w-1/2 h-[20vh]">
            <h1 className="font-bold text-7xl">Start making money now with Live Stream</h1>
            <p className="text-bg pt-10">
              Live streaming has transformed the way content creators and their audiences interact,
              bringing a new level of engagement and connection. In this digital age, creators from various platforms engage with their viewers in real time,
              fostering a sense of community and shared experience. One intriguing aspect of live streams is the ability for viewers to express their appreciation through virtual gifts.
              These gifts can range
            </p>
          </div>
          <div className='container mx-auto -mt-24 w-1/2 flex flex-col md:flex-row space-x-5 h-96 '>
            <div className='border-2 border-[#E179CB] w-[22vw] rounded-[10px] p-5 '>
              <img src='/assets/gift.png' alt='gift' className='w-16 h-16 text-[#E179CB] ' />
              <h1 className='font-semibold pt-5'>Get gifts from your users</h1>
              <p className='pt-5'>
                Live streaming has transformed the way content creators and
                their audiences interact, bringing a new level of engagement and connection.
                In this digital age, creators from various platforms engage with their viewers in real time, fostering a
              </p>
              <button className='text-black bg-[#E179CB] w-[7vw] h-[4vh] rounded-full mt-5 ml-[50px] mb-5'>Get Started</button>
            </div>
          </div>

        </div>
        <div className="mt-10 flex space-x-64">
          <div className="w-1/2">
            <img src='/assets/graph.png' alt="graph" />
          </div>
          <div className='container mx-auto  w-1/2 flex flex-col md:flex-row space-x-5 h-96 '>
            <div className='border-2 border-[#E179CB] w-[22vw] rounded-[10px] p-5 '>
              <img src='/assets/gift.png' alt='gift' className='w-16 h-16 text-[#E179CB] ' />
              <h1 className='font-semibold pt-5'>Get gifts from your users</h1>
              <p className='pt-5'>
                Live streaming has transformed the way content creators and
                their audiences interact, bringing a new level of engagement and connection.
                In this digital age, creators from various platforms engage with their viewers in real time, fostering a
              </p>
              <button className='text-black bg-[#E179CB] w-[7vw] h-[4vh] rounded-full mt-5 ml-[50px] mb-5'>Get Started</button>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center mt-10">
        <div className='border-2 border-[#E179CB] w-1/3 rounded-[10px] p-5'>
          <img src='/assets/account.png' alt='gift' className='w-16 h-16 text-[#E179CB]' />
          <h1 className='font-semibold pt-5'>Get paid for your followers</h1>
          <p className='pt-5'>
            Live streaming has transformed the way content creators and
            their audiences interact, bringing a new level of engagement and connection.
            In this digital age, creators from various platforms engage with their viewers in real time, fostering a
          </p>
          <button className='text-black bg-[#E179CB] w-[7vw] h-[4vh] rounded-full mt-5 mx-[50px]'>Get Started</button>
        </div>
        </div>
        <div className="mt-20 w-[60vw] mt justify-center mx-auto my-5 mt">
          <img src="/assets/strange2.png" alt="stranger" className="rounded-t-[40px] "/>
        </div>
      </div>
    </section>
  );
};

export default Content;
