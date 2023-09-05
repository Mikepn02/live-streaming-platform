import React from 'react'

const ChallengeContent = () => {
    return (
        <div className='md:mr-32 mr-5'>
            <h1 className='font-bold text-5xl mt-16  text-center'>Get to <span className='text-[#DCAA8E]'>premium</span></h1>
            <div className='flex md:flex-row flex-col gap-14 md:mt-36 mt-4 justify-center items-center'>
                    <div className='flex-col md:h-[50vh] md:w-[350px] w-full h-auto border-2 border-[#DBDBDB] p-4'>
                        <div className='flex flex-row items-center justify-center space-x-2'>
                            <img src='/assets/silver.svg' alt='silver' width={24} height={24} />
                            <p className='text-xl font-bold'>Silver</p>
                        </div>
                        <p className='font-bold text-6xl text-center mt-4'>$14</p>
                        <p className='text-xl text-center mt-4'>per user, per month</p>
                        <div className='border-[3px] rounded-md border-[#DCAD8B] mt-10 mx-auto w-60 h-16 flex items-center justify-center text-center'>
                            <p>Start My 7-day Trial</p>
                        </div>
                        <div className='border-2 mt-4 w-36 justify-center mx-auto'></div>
                        <div className='mt-2'>
                            <p className='text-center pt-2'>2 live video per day</p>
                            <p className='text-center pt-2'>Get 10 % money every month from your total followers</p>
                            <p className='text-center pt-2'>200 coins per month</p>
                            <p className='text-center pt-2'>send friend request up to 10 users</p>
                            <p className='text-center pt-2'>24/7 Support</p>
                        </div>
                    </div>

                <div className='flex-col md:h-[50vh] md:w-[350px] w-full text-white h-auto bg-gradient-to-r from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D]  '>
                    <div className='flex flex-row items-center justify-center space-x-2'>
                        <img src='/assets/gold.svg' alt='silver' width={24} height={24} />
                        <p className='text-xl font-bold'>Gold</p>
                    </div>
                    <p className='font-bold text-6xl text-center mt-4'>$49</p>
                    <p className='text-xl text-center mt-4'>per user, per month</p>
                    <div className='border-[3px] rounded-md border-white] mt-10 mx-auto w-60 h-16 flex items-center justify-center text-center'>
                        <p>Start My 15-day Trial</p>
                    </div>
                    <div className='border-2 mt-4 w-36 justify-center mx-auto'></div>
                    <div className='mt-2'>
                        <p className='text-center pt-2'>6 live video per day</p>
                        <p className='text-center pt-2'>Get 5 % money every month from your total followers</p>
                        <p className='text-center pt-2'>800 coins per month</p>
                        <p className='text-center pt-2'>send friend request up to 30 users</p>
                        <p className='text-center pt-2'>24/7 Support</p>
                    </div>

                </div>
                <div className='flex-col md:h-[50vh] md:w-[350px] w-full h-auto border-2 '>
                    <div className='flex flex-row items-center justify-center space-x-2'>
                        <img src='/assets/bronze.svg' alt='silver' width={24} height={24} />
                        <p className='text-xl font-bold'>Unlimited</p>
                    </div>
                    <p className='font-bold text-6xl text-center mt-4'>$139</p>
                    <p className='text-xl text-center mt-4'>per user, per month</p>
                    <div className='border-[3px] rounded-md border-[#DCAD8B] mt-10 mx-auto w-60 h-16 flex items-center justify-center text-center'>
                        <p>Start My 15-day Trial</p>
                    </div>
                    <div className='border-2 mt-4 w-36 justify-center mx-auto'></div>
                    <div className='mt-2'>
                        <p className='text-center pt-2'>unlimited video per day</p>
                        <p className='text-center pt-2'>Get 10 % money every month from your total followers</p>
                        <p className='text-center pt-2'>2000 coins per month</p>
                        <p className='text-center pt-2'>send friend request up to 10 users</p>
                        <p className='text-center pt-2'>24/7 Support</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ChallengeContent
