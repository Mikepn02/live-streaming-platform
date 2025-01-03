import { IconButton } from "@mui/material";
import NotificationOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Link } from "react-router-dom";
const Topbar = () => {
  return (
    <section className="w-full md:w-3/4 md:mr-40 mr-0">
      <div className="md:pt-5 pt-4 flex md:justify-evenly ">
        <div className="flex md:space-x-20 space-x-4 ">
          <Link 
          to='/'
          className="md:pt-0 md:hidden pt-2 space-x-4 items-center font-bold justify-center">
            <img src="/assets/logo.svg" alt="logo" />
          </Link>
          <div className="hidden space-x-2 md:flex">
            <button className="flex bg-gradient-to-r from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D]  rounded-[50px] w-20 h-10 items-center justify-center">
              <img src="/assets/gift.png" alt="gift" width={24} height={24} />
              <p className="font-bold text-white">500</p>
            </button>
            <button className="flex bg-gradient-to-r from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D]  rounded-[50px] w-20 h-10 items-center justify-center">
              <img src="/assets/gift.png" alt="gift" width={24} height={24} />
              <p className="font-bold text-white">500</p>
            </button>
            <button className="flex bg-gradient-to-r from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D]  rounded-[50px] w-20 h-10 items-center justify-center">
              <img src="/assets/trophy.svg" alt="gift" width={24} height={24} />
              <p className="font-bold text-white">500</p>
            </button>
          </div>
          <div className="flex md:w-[350px] w-full justify-center items-center h-[45px] border-2 border-[#eaeaea] rounded-[50px] mt-2 md:mt-0">
            <input
              type="search"
              placeholder="Search"
              className="h-[50px] md:w-full bg-transparent border-none outline-none color-[#797979] text-lg indent-10"
            />
            <img
              src="/assets/home.svg"
              alt="password"
              className="my-0 mx-[10px] md:mx-[30px]"
              width={24}
              height={24}
            />
          </div>

          <div className="hidden md:relative md:flex items-center w-[150px] h-[45px]">
            <select className="block appearance-none w-full py-2 pl-3 pr-10 border-2 border-[#eaeaea] rounded-[10px] bg-white text-gray-700 leading-tight focus:outline-none ">
              <option value="english">English</option>
              <option value="french">French</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>

          <div className="hidden md:flex">
            <IconButton>
              <Link><NotificationOutlinedIcon /></Link>
            </IconButton>
            <IconButton>
              <Link to='/dashboard/setting'> <SettingsOutlinedIcon /></Link>
            </IconButton>
            <IconButton>
              <Link to='/dashboard/profile'>
                <div className='rounded-full border-2 border-pink-500 p-1'>
                  <img src='/assets/follower.png' alt="user" width={40} height={40} />
                </div>

              </Link>
            </IconButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
