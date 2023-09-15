import React, { useState } from 'react';
import './Header/Header.css';
import Tags from './Tags/Tags';
import './Sidebar/Sidebar.css';
import Sidebar from './Sidebar/Sidebar';
import MiniSidebar from './Sidebar/MiniSidebar';
import Header from './Header/Header';

const Layout: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="parent-header">
      <Header onSidebarToggle={toggleSidebar} />
      <div className="content-page">
        {showSidebar ? <Sidebar /> : <MiniSidebar />}
        <Tags />
      </div>
    </div>
  );
};

export default Layout;
