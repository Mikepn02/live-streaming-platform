import React from "react";
import { Slide1, Slide2 } from "./slide";

const Content = () => {
  return (
    <section>
      <div className="md:my-20 my-5 md:ml-10 ml-2  justify-center md:mx-auto ">
        <img src="/assets/car.png" alt="car" className=' h-[40vh] rounded-xl w-full'/>
      </div>
      <div className="md:pl-10 pl-0 w-full py-10 space-y-10">
        <h1 className="font-semibold mt-10">Recommend For you</h1>
        <div className="md:space-x-8 flex w-full">
          <Slide1 />
        </div>
      </div>

      <div className="md:pl-10 pr-5 w-full py-10 space-y-10">
        <h1 className="font-semibold">Best streamers</h1>
        <div className="flex space-x-16">
          <Slide2 />
        </div>
      </div>
      <h1 className="font-bold pl-10">How to make money</h1>
      <div className="md:pl-10 pl-0 mt-36 justify-around">
        <div className="md:flex md:flex-row flex-col md:space-x-10 md:space-y-10">
          <div className="w-full text-bg md:h-32  md:w-1/2">
            <h1 className="font-bold text-3xl md:text-6xl">
              Start Making money now with <span className='text-[#D7DF4D]'>Live Stream</span>
            </h1>
            <p className="pt-4 md:pt-10">
              Live streaming has transformed the way content creators and their
              audiences interact, bringing a new level of engagement and
              connection. In this digital age, creators from various platforms
              engage with their viewers in real time, fostering a sense of
              community and shared experience. One intriguing aspect of live
              streams is the ability for viewers to express their appreciation
              through virtual gifts. These gifts can range
            </p>
          </div>
          <div className="container mx-auto mt-4 md:-mt-24 w-full md:w-1/2 md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 h-auto md:h-96">
            <div className="border-2 border-[#E179CB] w-full md:w-[22vw] rounded-md p-4 md:p-5">
              <img
                src="/assets/gift.png"
                alt="gift"
                className="w-16 h-16 text-[#E179CB]"
              />
              <h1 className="font-semibold pt-4 md:pt-5">
                Get gifts from your users
              </h1>
              <p className="pt-4 md:pt-5">
                Live streaming has transformed the way content creators and
                their audiences interact, bringing a new level of engagement and
                connection. In this digital age, creators from various platforms
                engage with their viewers in real time, fostering
              </p>
              <button className="text-black bg-[#E179CB] md:w-32 w-full h-10 md:h-[4vh] rounded-full mt-4 md:mt-5  md:mb-5">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="md:mt-10 mt-4 md:flex md:flex-row flex-col  md:space-x-64 space-y-10">
          <div className="md:w-1/2 w-full">
            <img src="/assets/graph.png" alt="graph" />
          </div>
          <div className="md:container md:mx-auto  md:w-1/2 w-full flex flex-col md:flex-row  space-y-4 md:space-x-4 md:h-auto  h-auto ">
            <div className="border-2 border-[#E179CB] md:w-[22vw] w-full rounded-md p-4 md:rounded-[10px] md:p-5 ">
              <img
                src="/assets/gift.png"
                alt="gift"
                className="w-16 h-16 text-[#E179CB] "
              />
              <h1 className="font-semibold pt-4 md:pt-5">
                Get gifts from your users``
              </h1>
              <p className="pt-3 md:pt-5">
                Live streaming has transformed the way content creators and
                their audiences interact, bringing a new level of engagement and
                connection. In this digital age, creators from various platforms
                engage with their viewers in real time, fostering
              </p>
              <button className="text-black bg-[#E179CB] md:w-32 w-full h-10 md:h-[4vh] rounded-full mt-4 md:mt-5  md:mb-5">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-row flex-col justify-center w-full md:w-auto  items-center mt-10">
          <div className="border-2 border-[#E179CB] md:w-1/3 rounded-[10px] p-5">
            <img
              src="/assets/account.png"
              alt="gift"
              className="w-16 h-16 text-[#E179CB]"
            />
            <h1 className="font-semibold md:pt-5 pt-4">Get paid for your followers</h1>
            <p className="md:pt-5 pt-4">
              Live streaming has transformed the way content creators and their
              audiences interact, bringing a new level of engagement and
              connection. In this digital age, creators from various platforms
              engage with their viewers in real time, fostering 
            </p>
            <button className="text-black bg-[#E179CB] md:w-32 w-full h-10 md:h-[4vh] rounded-full mt-4 md:mt-5  md:mb-5">
                Get Started
              </button>
          </div>
        </div>
        <div className="md:mt-20 mt-5 mb-32 md:w-[60vw] w-full  justify-center md:mx-auto md:my-5 my-3">
          <img
            src="/assets/strange2.png"
            alt="stranger"
            className="rounded-t-[40px] "
          />
        </div>
      </div>
    </section>
  );
};

export default Content;