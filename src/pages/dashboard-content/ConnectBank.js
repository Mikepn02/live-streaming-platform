import React, { useState } from "react";

const ConnectBank = () => {
    const [checked , setChecked] = useState(false)
    const handleCheckboxChange = () => {
        setChecked(!checked)
    }
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-semibold mb-4">Connect Your bank account</h1>
      <div className="grid grid-cols-2 gap-4 p-5">
        <div>
          <label htmlFor="bank">Select your bank account</label>
          <div className="md:relative md:flex items-center w-[450px] h-[45px]">
            <select className="block appearance-none w-full py-2 pl-3 pr-10 border-2 border-[#eaeaea] rounded-[10px] bg-[#D7D7D7] text-gray-700 focus:outline-none">
              <option value="english">Cogebank</option>
              <option value="french">Bk</option>
            </select>
            <div className="absolute insert-y-0 right-0 flex items-center pr-3">
              <img src="/assets/dropdown.svg" alt="dropdown" />
            </div>
          </div>
        </div>
        <div className="w-[450px]">
          <label
            htmlFor="cvv"
            className="block text-sm font-medium text-gray-700"
          >
            CVV
          </label>
          <div className="bg-[#D7D7D7]  items-center mt-1">
            <input
              type="text"
              placeholder="XXXX"
              className="block w-full py-2 px-3 border-gray-300 rounded-lg bg-[#D7D7D7] tetx-gray-900 focus:ring focuse:ring-opacity-50 focus:outline-none"
            />
          </div>
        </div>
        <div className="w-[450px]">
          <label
            htmlFor="cvv"
            className="block text-sm font-medium text-gray-700"
          >
            Card number
          </label>
          <div className="bg-[#D7D7D7]  items-center mt-1">
            <input
              type="text"
              placeholder="Number"
              className="block w-full py-2 px-3 border-gray-300 rounded-lg bg-[#D7D7D7] tetx-gray-900 focus:ring focuse:ring-opacity-50 focus:outline-none"
            />
          </div>
        </div>
        <div className="w-[450px]">
          <label
            htmlFor="cvv"
            className="block text-sm font-medium text-gray-700"
          >
            Expiry Date
          </label>
          <div className="bg-[#D7D7D7]  items-center mt-1">
            <input
              type="date"
              placeholder="XXXX"
              className="block w-full py-2 px-3 border-gray-300 rounded-lg bg-[#D7D7D7] tetx-gray-900 focus:ring focuse:ring-opacity-50 focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="flex space-x-4 ml-8">
        <input type="checkbox"  checked={checked} onChange={handleCheckboxChange} 
        className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-500 focus:outline-none" 
        />
        <span className="text-sm text-gray-700">I agree to the terms and conditions</span>
      </div>
      <button
        className="w-[85%] px-3 py-3 rounded-full bg-gradient-to-r from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D] text-white font-bold mt-4"
        type="button"
      >
        submit
      </button>
    </div>
  );
};

export default ConnectBank;
