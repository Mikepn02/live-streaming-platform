import { tab } from '@testing-library/user-event/dist/tab';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MessageArray, userMessageinfo } from '../../constants';
import UserMessagecard from '../../components/cards/userMessagecard';
import Messagebar from '../../components/cards/Messagebar';
import Messages from '../../components/cards/Messages';

const Chatcontent = () => {
  const [activeTab, setActiveTab] = useState("Friends");
  const tabNames = ['Groups', 'Friends', 'Requests'];
  const messagePerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * messagePerPage;
  const endIndex = currentPage * messagePerPage

  const messageToDisplay = MessageArray.slice(0, endIndex)

  const totalPage = Math.ceil(MessageArray.length / messagePerPage);

  const handlePageChange = (newPage) => {
    if (endIndex < MessageArray.length) {
      setCurrentPage(currentPage + 1);
    }
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }
  return (
    <div className='w-full md:w-[80%]   mr-20 h-[85vh]  flex rounded-xl mt-8 border-8 border-pink-400'>
      <div className='border-14 border-[10px] rounded-[1px] w-2/4 border-pink-400 '>
        <div className='flex flex-col items-center justify-center p-8 space-y-4'>
          <div className='flex  space-x-8 text-[#979797] font-semibold opac'>
            {tabNames.map((tab) => (
              <Link
                key={tab}
                // to={`/${tab}`}
                onClick={() => handleTabClick(tab)}
                className={activeTab === tab ? 'text-pink-300 border-b-2 border-pink-300' : ''}
              >
                {tab}
              </Link>
            ))}
          </div>
          <div className='border-[1px] border-black h-0 opacity-[0.2]  w-[75%]'></div>
          <div className='flex w-[80%] m-auto items-center  h-[50px] border-2 bg-[#FAFAFA] rounded-[50px]'>
            <input type='email' placeholder='Type a message' className='h-[50px] w-[400px] indent-4 bg-transparent border-none outline-none color-[#797979] text-lg' />
            <img src='/assets/search.svg' alt='search' className='my-0 mx-[30px]' />
          </div>
        </div>
        <div>
          {userMessageinfo.map((message) => (
            <UserMessagecard
              image={message.image}
              name={message.name}
              message={message.message}
              time={message.time}
              delivered={message.delivered}
            />
          ))}
        </div>

      </div>
      <div className='border-[10px] w-3/4 rounded-[2px] border-pink-400'>
        <div><Messagebar /></div>
        <div>
  <div class="space-x-4 text-center font-semibold text-pink-500">
    {endIndex < MessageArray.length && (
      <p onClick={handlePageChange} class="previous-messages">Previous Messages</p>
    )}

    <div class="flex-1 min-h-[60vh] overflow-x-auto max-h-[60vh]">
      {messageToDisplay.map((item, index) => (
        <Messages
          key={index}
          message={item.message}
          reply={Array.isArray(item.reply) ? item.reply.join('\n') : item.reply}
        />
      ))}
    </div>
  </div>

  <div class="flex w-[80%] mx-auto items-center mt-4">
    <input
      type="email"
      placeholder="Type a message"
      class="flex-1 h-[50px] w-[400px] px-4 bg-transparent border border-gray-300 rounded-l-[50px] outline-none text-lg"
    />
    <button class="h-[50px] bg-gray-200 rounded-r-[50px] px-4">
      <img src="/assets/email.png" alt="search" class="my-0" />
    </button>
  </div>
</div>
      </div>
    </div>

  )
}

export default Chatcontent
