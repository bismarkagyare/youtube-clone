import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';

const MiniSidebar: React.FC = () => {
  return (
    <div className="mini-sidebar">
      <div className="mini-div">
        <HomeIcon style={{ fontSize: 35 }} />
        <p>Home</p>
      </div>
      <div className="mini-div">
        <ExploreOutlinedIcon style={{ fontSize: 35 }} />
        <p>Explore</p>
      </div>
      <div className="mini-div">
        <SubscriptionsOutlinedIcon style={{ fontSize: 35 }} />
        <p>Subscription</p>
      </div>
      <div className="mini-div">
        <VideoLibraryOutlinedIcon style={{ fontSize: 35 }} />
        <p>Library</p>
      </div>
    </div>
  );
};

export default MiniSidebar;
