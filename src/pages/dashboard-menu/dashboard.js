import React from 'react'
import LeftSidebar from '../global/Sidebar'
import Topbar from '../global/Topbar'
import Content from '../global/content'

const Dashboard = () => {
  return (
    <section className='flex flex-row w-full'>
      <div className='w-1/4'>
      <LeftSidebar />
      </div>
      <div className='flex flex-col w-3/4'>
        <Topbar />
        <Content/>
      </div>
    </section>
  )
}

export default Dashboard
