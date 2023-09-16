import React, { useEffect, useState } from 'react';
import LeftSidebar from '../global/Sidebar';
import Topbar from '../global/Topbar';
import Bottombar from '../global/Bottombar';

const Dashboard = ({ onLogin, contentComponent: ContentComponent }) => {
  const [isSidebarVisible, setSidebarVisibility] = useState(true);
  const [isBottombarVisible, setBottombarVisibility] = useState(window.outerWidth <= 768);

  const checkScreenSize = () => {
    setSidebarVisibility(window.outerWidth > 768);
    setBottombarVisibility(window.outerWidth <= 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <section className='flex flex-row w-full'>
      {isSidebarVisible && (
        <div className='w-full md:w-[20%]'>
          <LeftSidebar />
        </div>
      )}
      <div className='flex flex-col w-full md:w-[80%] md:p-0 p-4'>
        <Topbar />
        <ContentComponent />
      </div>
      {isBottombarVisible && (
        <Bottombar />
      )}
    </section>
  );
};

export default Dashboard;
