import React, { useState } from 'react';
import Header from './Header/Header';
import Tags from './Tags/Tags';
import Sidebar from './Sidebar/Sidebar';
import MiniSidebar from './Sidebar/MiniSidebar';
import './Header/Header.css';
import './Sidebar/Sidebar.css';

const Layout: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="parent-container">
      <Header onSidebarToggle={toggleSidebar} />
      <div className="content-page">
        {showSidebar ? <Sidebar /> : <MiniSidebar />}
        <Tags />
      </div>
    </div>
  );
};

export default Layout;
