import React, { useState, useEffect } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MicIcon from '@mui/icons-material/Mic';
import { Avatar } from '@mui/material';
import './Header.css';

interface HeaderProps {
  onSidebarToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSidebarToggle }) => {
  const [iconSize, setIconSize] = useState(35);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 480) {
        setIconSize(19);
      } else if (screenWidth <= 768) {
        setIconSize(25);
      } else {
        setIconSize(35);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="header">
      <div className="header-left">
        <div onClick={onSidebarToggle} className="menu-icon">
          <MenuOutlinedIcon style={{ color: 'white', fontSize: iconSize }} />
        </div>
        <img
          className="header-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/YouTube_light_logo_%282017%29.svg/2560px-YouTube_light_logo_%282017%29.svg.png"
          alt="YouTube Logo"
        />
      </div>
      <div className="header-input">
        <div className="header-middle">
          <input className="searchInput" placeholder="Search" type="text" />
          <SearchIcon
            className="header-searchBtn"
            style={{ color: 'white', fontSize: iconSize }}
          />
        </div>
        <MicIcon className="header-icons" style={{ fontSize: iconSize }} />
      </div>
      <div className="header-right">
        <VideoCallOutlinedIcon
          className="header-icons"
          style={{ fontSize: iconSize }}
        />
        <NotificationsNoneOutlinedIcon
          className="header-icons"
          style={{ fontSize: iconSize }}
        />
        <Avatar
          className="header-icons"
          style={{
            width: iconSize + 'px',
            height: iconSize + 'px',
            fontSize: 15,
          }}
        >
          B
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
