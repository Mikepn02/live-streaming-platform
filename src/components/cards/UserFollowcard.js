import React from "react";

export const UserFollowcard = ({ name, image, about, followers, following }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="border-2 border-pink-500 rounded-[50%] p-2">
        <img src={image} alt="user" width={100} height={100} />
      </div>
      <p className="font-bold text-xl">{name}</p>
      <p className="font-semibold text-[#DCA792]">{about}</p>
      <div className="flex space-x-4">
        <p className="font-semibold">Followers</p>
        <p className="font-semibold">Followers</p>
      </div>
      <div className="flex space-x-4 text-center items-center justify-center">
        <p className="font-semibold">{followers}</p>
        <p className="font-semibold">{following}</p>
      </div>
      <div className="text-black flex space-x-4">
        <div className="border-2 border-[#DCA792] p-2">
            <img src="/assets/plus.svg" alt="follow" />
        </div>
        <p className="text-xl font-bold text-[#DCA792]">Follow</p>
      </div>
    </div>
  );
};

export const UserFollowcard2 =  ({ name, image, about, followers, following }) => {
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="border-2 rounded-[50%] p-2">
          <img src={image} alt="user" width={100} height={100} />
        </div>
        <p className="font-bold text-xl">{name}</p>
        <p className="font-semibold text-[#DCA792]">{about}</p>
        <div className="flex space-x-4">
          <p className="font-semibold">Followers</p>
          <p className="font-semibold">Followers</p>
        </div>
        <div className="flex space-x-4 text-center items-center justify-center">
          <p className="font-semibold">{followers}</p>
          <p className="font-semibold">{following}</p>
        </div>
        <div className="text-black flex space-x-4">
          <div className="border-2 border-[#DCA792] p-2">
              <img src="/assets/plus.svg" alt="follow" />
          </div>
          <p className="text-xl font-bold text-[#DCA792]">Follow</p>
        </div>
      </div>
    );
  };