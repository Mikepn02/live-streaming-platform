import React, { useState } from "react";
import { Slide1 } from "./slide";
import { Followercardinfo } from "../../constants";
import Followercard from "../../components/cards/Followercard";

const Streamcontent = () => {
  const itemsPerPage = 6;
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
    <div>
      <h1 className="font-semibold text-xl md:mt-8 mt-2">🔥Trending now</h1>
      <div className="md:space-x-2 md:mt-3 flex w-full">
        <Slide1 />
      </div>
      <h1 className="font-bold mt-4 text-xl">From people you follow</h1>
      <div className="md:mt-3 w-full">
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
    </div>
  );
};

export default Streamcontent;
