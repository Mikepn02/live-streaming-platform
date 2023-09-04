import React from 'react'
import LeftSidebar from '../global/Sidebar'
import Topbar from '../global/Topbar'
import Content from '../global/content'
import Bottombar from '../global/Bottombar'

const Dashboard = () => {
  return (
    <section className='flex flex-row w-full'>
      <div className='w-full md:w-1/4'>
      <LeftSidebar />
      </div>
      <div className='flex flex-col w-full md:w-3/4 md:p-0 p-4'>
        <Topbar />
        <Content/>
      </div>
      <Bottombar />
    </section>
  )
}

export default Dashboard
