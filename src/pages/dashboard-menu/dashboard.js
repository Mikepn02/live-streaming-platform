import React from 'react';
import LeftSidebar from '../global/Sidebar';
import Topbar from '../global/Topbar';
import Bottombar from '../global/Bottombar';

const Dashboard = ({onLogin, contentComponent: ContentComponent}) => {
  return (
    <section className='flex flex-row w-full'>
      <div className='w-full md:w-1/4'>
        <LeftSidebar />
      </div>
      <div className='flex flex-col w-full md:w-3/4 md:p-0 p-4'>
        <Topbar />
        <ContentComponent />
      </div>
      <Bottombar />
    </section>
  );
}

export default Dashboard;
