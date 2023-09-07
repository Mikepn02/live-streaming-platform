import React, { useState } from 'react';
import { MessageArray } from '../../constants/index'

const Messages = ({ message, reply }) => {


    return (
        <div>
            <div className='max-w-xl mx-auto my-4 space-y-10 p-5'>
                <div className='flex'>
                    <div className="w-fit p-4  bg-[#D5D5D5] rounded-tl-lg  rounded-tr-lg">{message}</div>
                </div>
                <div className='flex justify-end mb-4'>
                    <div className=" w-fit p-4 bg-gradient-to-r from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D] rounded-bl-lg rounded-br-lg text-white">{reply}</div>
                </div>
            </div>

        </div>
    );
};

export default Messages;
