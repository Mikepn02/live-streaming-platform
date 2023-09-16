import React , { useEffect, useState } from 'react';
import LeftSidebar from '../global/Sidebar';
import Topbar from '../global/Topbar';
import Bottombar from '../global/Bottombar';

const Dashboard = ({onLogin, contentComponent: ContentComponent}) => {
  const [isSidebarVisible , setSidebarVisibility] = useState(true);
  const checkScreenSize = () => {
    if(window.innerWidth <= 768) {
       setSidebarVisibility(false)
    }else{
      setSidebarVisibility(true)
    }
  }
  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize)
    }
  })
  return (
    <section className='flex flex-row w-full'>
      {isSidebarVisible && (

      <div className='w-full md:w-1/4'>
        <LeftSidebar />
      </div>
      )}
      <div className='flex flex-col w-full md:w-3/4 md:p-0 p-4'>
        <Topbar />
        <ContentComponent />
      </div>
      {window.innerWidth <= 768 && (
         <Bottombar />
      )}
    </section>
  );
}

export default Dashboard;
