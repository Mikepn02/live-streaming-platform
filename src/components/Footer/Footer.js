import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="flex flex-col md:flex-row justify-around p-10">
                <div className="footer-section  items-center  justify-center">
                    <div className="flex  items-center space-x-2 mb-4 md:mb-0">
                        <img src="/assets/vector.png" alt="logo" className="w-8 h-8" />
                        <p className="text-black font-semibold text-2xl">Live Stream</p>
                    </div>
                    <p className="mt-5">
                        Start live streaming and making money with Live Stream Start live
                        streaming and making money with Live Stream Start live streaming and
                        making money with Live Stream Start live streaming and making mo
                    </p>
                </div>

                <div className="footer-section mx-auto px-32">
                    <h1>Quick Link</h1>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Features</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className="footer-section  items-center justify-center">
                    <h1>About</h1>
                    <ul>
                        <li>Term of user</li>
                        <li>FAQ</li>
                        <li>License</li>
                    </ul>
                </div>
                <div className="footer-section items-center  justify-center ">
                    <h1 className="text-lg font-semibold mb-2">
                        You can Subscribe now to livestream and get daily update
                    </h1>
                    <div className="flex flex-row  space-x-2">
                        <input
                            type="text"
                            placeholder="example@gmail.com"
                            className="border border-gray-400 rounded px-2 py-1 flex-1"
                        />
                        <button className="w-[8vw] h-10 bg-[#D7DF4D] text-white rounded hover:bg-[#A3A927] transition-colors duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;