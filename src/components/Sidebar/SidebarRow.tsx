import React from 'react';
import './SidebarRow.css';
import { SvgIconProps } from '@mui/material/SvgIcon';

// Define an interface for the props
interface SidebarRowProps {
  icon?: React.ReactElement<SvgIconProps> | string;
  title: string;
  style?: React.CSSProperties;
}

// Use the interface to type your props
const SidebarRow: React.FC<SidebarRowProps> = ({ icon, title, style }) => {
  return (
    <div className="sidebar-row">
      <div className="sidebarRow-icon">
        {typeof icon === 'string' ? <img src={icon} style={style} /> : icon}
      </div>
      <h2 className="sidebarRow-title">{title}</h2>
    </div>
  );
};

export default SidebarRow;
