import React from 'react';

const Messages = ({ message, reply }) => {
  return (
    <div className="max-w-xl mx-auto my-4 p-5 space-y-10">
      <div className="flex">
        <div className="w-2/3 p-4 bg-gray-300 rounded-tl-lg rounded-tr-lg">
          {message}
        </div>
      </div>
      <div className="flex justify-end mb-4">
        <div className="w-2/3 p-4 bg-gradient-to-r from-purple-500 to-yellow-400 rounded-bl-lg rounded-br-lg text-white">
          {reply}
        </div>
      </div>
    </div>
  );
};

export default Messages;
