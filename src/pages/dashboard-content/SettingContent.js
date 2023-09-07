import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


const SettingContent = () => {
    return (
        <div className='mt-5 space-y-2'>
            <h1 className='text-[#F3A5E3] text-3xl font-bold'>Setting</h1>
            <h1 className='mt-4 text-2xl font-bold'>Your account</h1>
            <div className='flex flex-col gap-10 md:flex-row'>
                <div className='flex space-x-4 items-center justify-between shadow-xl text-black w-[30vw] p-4 rounded-[10px] bg-blue-500'>
                    <div className="flex space-x-4 items-center">
                        <img src='/assets/account.svg' alt='account' />
                        <div>
                            <h1>Account information</h1>
                            <p>See your account information like your phone number and email.</p>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faAngleRight} size="lg" />
                </div>

                <div className='flex space-x-4 items-center justify-between shadow-xl text-black w-[30vw] p-4 rounded-[10px] bg-blue-500'>
                    <div className="flex space-x-4 items-center">
                        <img src='/assets/key.svg' alt='account' />
                        <div>
                            <h1>Change your password</h1>
                            <p>Change your password at any time.</p>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faAngleRight} size="lg" />
                </div>

            </div>
            <h1 className='mt-4 text-2xl font-bold'>Security and account access</h1>
            <div className='flex flex-col gap-10 md:flex-row'>
                <div className='flex space-x-4 items-center justify-between shadow-xl text-black w-[30vw] p-4 rounded-[10px] bg-blue-500'>
                    <div className='flex space-x-4 items-center'>
                        <img src='/assets/lock.svg' alt='account' />
                        <div >
                            <h1>Security manage</h1>
                            <p>Manage your account’s security.</p>
                        </div>

                    </div>
                        <FontAwesomeIcon icon={faAngleRight} size="lg" />
                </div>
                <div className='flex space-x-4 items-center justify-between shadow-xl text-black w-[30vw] p-4 rounded-[10px] bg-blue-500'>
                    <div className='flex flex-col gap-10 md:flex-row'>
                        <img src='/assets/paper.svg' alt='account' />
                        <div>
                            <h1>Connected accounts</h1>
                            <p>Manage Google accounts connected to logo to log in.</p>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faAngleRight} size="lg" />
                </div>
            </div>
            <h1 className='mt-4 text-2xl font-bold'>Your account</h1>
            <div className='flex flex-col gap-10 md:flex-row'>
                <div className='flex space-x-4 items-center justify-between shadow-xl text-black w-[30vw] p-4  rounded-[10px] bg-blue-500'>
                    <img src='/assets/community.svg' alt='account' />
                    <div>
                        <h1>Privacy and safety</h1>
                        <p>Manage what information you allow other people on logo to see.</p>
                    </div>
                    <FontAwesomeIcon icon={faAngleRight} size="lg" />

                </div>
                <div className='flex space-x-4 items-center justify-between shadow-xl text-black w-[30vw] p-4 rounded-[10px] bg-blue-500'>
                    <img src='/assets/mute.svg' alt='account' />
                    <div>
                        <h1>Mute and block</h1>
                        <p>the accounts, words, and notifications that you’ve muted or blocked..</p>
                    </div>
                    <FontAwesomeIcon icon={faAngleRight} size="lg" />

                </div>
            </div>
            <h1 className='mt-4 text-2xl font-bold'>Notifications</h1>
            <div className='flex flex-col gap-10 md:flex-row'>
                <div className='flex space-x-4 items-center justify-between shadow-xl text-black w-[30vw] p-4  rounded-[10px] bg-blue-500'>
                    <img src='/assets/filter.svg' alt='account' />
                    <div>
                        <h1>Filters</h1>
                        <p>Choose the notifications you’d like to see — and those you don’t.</p>
                    </div>
                    <FontAwesomeIcon icon={faAngleRight} size="lg" />

                </div>
            </div>
            <h1 className='mt-4 text-2xl font-bold'>Accessibility, display, and languages</h1>
            <div className='flex flex-col gap-10 md:flex-row'>
                <div className='flex space-x-4 items-center justify-between shadow-xl text-black w-[30vw] p-4  rounded-[10px] bg-blue-500'>
                    <img src='/assets/eye.svg' alt='account' />
                    <div>
                        <h1>Accessibility</h1>
                        <p>Manage aspects of your Logo experience color contrast and motion.</p>
                    </div>
                    <FontAwesomeIcon icon={faAngleRight} size="lg" />

                </div>
                <div className='flex space-x-4 items-center justify-between shadow-xl text-black w-[30vw] p-4 rounded-[10px] bg-blue-500'>
                    <img src='/assets/internet.svg' alt='account' />
                    <div>
                        <h1>Languages</h1>
                        <p>which languages are used to personalize your Twitter experience.</p>
                    </div>
                    <FontAwesomeIcon icon={faAngleRight} size="lg" />

                </div>
            </div>
            <button className='bg-gradient-to-r from-[#E179CB] via-[#DCAB8D] to-[#D7DF4D] w-48  h-14 rounded-[10px] text-white font-semibold'>Reset all settings</button>
        </div>
    )
}

export default SettingContent
