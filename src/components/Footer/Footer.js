import React from "react";


const Footer = () => {
    return (
        <footer>
            <div className="container   w-full grid grid-cols-1 gap-4 xl:gap-16 xl:grid-cols-4 px-10 xl:p-10 p-8 space-y-10 xl:space-y-0 space-x-4 mx-auto">
                <div className=" tems-center  justify-center text-center xl:text-left space-y-8">
                    <div className="flex  items-center space-x-2 mb-4 xl:mb-0">
                        <img src="/assets/logo.svg" alt="logo" className="w-8 h-8" />
                        <p className="text-black  text-2xl font-bold">LIVE STREAM</p>
                    </div>
                    <p className="mt-5">
                        Start live streaming and making money with Live Stream Start live
                        streaming and making money with Live Stream Start live streaming and
                        making money with Live Stream Start live streaming and making money
                    </p>
                    <div className="flex flex-row gap-2">
                        <div className="bg-gradient-to-r from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D] xl:p-3 p-2 rounded-full w-14 h-14 items-center justify-center">
                            <img src="/assets/instagram.svg" alt="instagram" />
                        </div>
                        <div className="bg-gradient-to-r from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D] xl:p-3 p-2 rounded-full w-14 h-14 items-center justify-center">
                            <img src="/assets/facebook.svg" alt="facebook" className="mx-auto" />
                        </div>
                        <div className="bg-gradient-to-r from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D] xl:p-3 p-2 rounded-full  w-14 h-14 items-center justify-center">
                            <img src="/assets/linkedin.svg" alt="linkedin" />
                        </div>
                        <div className="bg-gradient-to-r from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D] xl:p-3 p-3 rounded-full w-14 h-14 items-center justify-center">
                            <img src="/assets/twitter.svg" alt="twitter" />
                        </div>
                        <div className="bg-gradient-to-r from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D] xl:p-3 p-3 rounded-full w-14 h-14 items-center justify-center">
                            <img src="/assets/discord.svg" alt="twitter" />
                        </div>
                    </div>
                </div>

                <div className="  text-center xl:text-left space-y-4">
                    <h1 className="text-black font-bold">Quick Link</h1>
                    <ul className="space-y-4">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Features</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className=" items-center  justify-center text-center xl:text-left space-y-4">
                    <h1 className="text-black font-bold">About</h1>
                    <ul className="space-y-4">
                        <li>Term of user</li>
                        <li>FAQ</li>
                        <li>License</li>
                    </ul>
                </div>
                <div className=" items-center  w-full justify-center text-center xl:text-left space-y-4 ">
                    <h1 className="text-sm font-semibold  mb-2 border-none outline-none">
                        You can Subscribe now to livestream and get daily update
                    </h1>
                    <h1>Your email</h1>
                    <div className="flex flex-row  space-x-2">
                        <input
                            type="text"
                            placeholder="example@gmail.com"
                            className="border bg-[#E1E1E1] rounded px-2 py-1 flex-1"
                        />
                        <button className="xl:w-[8vw] h-10 bg-[#D7DF4D] text-white rounded hover:bg-[#A3A927] transition-colors duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
