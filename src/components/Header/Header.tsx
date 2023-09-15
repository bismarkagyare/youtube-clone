import React, { useState } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MicIcon from '@mui/icons-material/Mic';
import { Avatar } from '@mui/material';
import './Header.css';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import {
  History,
  OndemandVideo,
  WatchLaterOutlined,
  ThumbUpAltOutlined,
  ExpandMoreOutlined,
  SettingsOutlined,
  FlagOutlined,
  HelpOutlineOutlined,
  FeedbackOutlined,
} from '@mui/icons-material';
import SidebarRow from '../Sidebar/SidebarRow';
import SubscriptionRow from '../Sidebar/SubscriptionRow';
import Tags from '../Tags/Tags';
import '../../Sidebar.css';

const Header: React.FC = () => {
  const [showSidebar, setshowSidebar] = useState(true);
  const toggleSidebar = () => {
    setshowSidebar(!showSidebar);
  };

  return (
    <div className="parent-header">
      <div className="header">
        <div className="header-left">
          <div onClick={toggleSidebar} className="menu-icon">
            <MenuOutlinedIcon style={{ color: 'white', fontSize: 35 }} />
          </div>
          <img
            className="header-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/YouTube_light_logo_%282017%29.svg/2560px-YouTube_light_logo_%282017%29.svg.png"
          ></img>
        </div>
        <div className="header-input">
          <div className="header-middle">
            <input className="searchInput" placeholder="Search" type="text" />
            <SearchIcon
              className="header-searchBtn"
              style={{ color: 'white', fontSize: 30 }}
            />
          </div>
          <MicIcon className="header-icons" style={{ fontSize: 35 }} />
        </div>
        <div className="header-right">
          <VideoCallOutlinedIcon
            className="header-icons"
            style={{ fontSize: 35 }}
          />
          <NotificationsNoneOutlinedIcon
            className="header-icons"
            style={{ fontSize: 35 }}
          />
          <Avatar>B</Avatar>
        </div>
      </div>
      <div className="content-page">
        {showSidebar ? (
          <div className="sidebar">
            <SidebarRow icon={React.createElement(HomeIcon)} title="Home" />
            <SidebarRow
              icon={React.createElement(ExploreOutlinedIcon)}
              title="Explore"
            />
            <SidebarRow
              icon={React.createElement(SubscriptionsOutlinedIcon)}
              title="Subscriptions"
            />
            <hr></hr>
            <SidebarRow
              icon={React.createElement(VideoLibraryOutlinedIcon)}
              title="Library"
            />
            <SidebarRow icon={React.createElement(History)} title="History" />
            <SidebarRow
              icon={React.createElement(OndemandVideo)}
              title="Your videos"
            />
            <SidebarRow
              icon={React.createElement(WatchLaterOutlined)}
              title="Watch later"
            />
            <SidebarRow
              icon={React.createElement(ThumbUpAltOutlined)}
              title="Liked videos"
            />
            <SidebarRow
              icon={React.createElement(ExpandMoreOutlined)}
              title="Show more"
            />
            <hr></hr>
            <h4 className="sidebar-heading">Subscriptions</h4>
            <SubscriptionRow
              img="https://yt3.ggpht.com/UlKrbeZ4Xz79DUbEbF3FvC0FQ4A_cvpIIzhJQ_wigP8CL_Xf_WF-ryYrrtGpqpD9WzAplsUz=s88-c-k-c0x00ffffff-no-rj"
              name="Hyperplexed"
            />
            <SubscriptionRow
              img="https://yt3.ggpht.com/BWW7dv17Ls1Voen8QWO3rE37bFRnjt-lnX3P0MhLfY2Ea5SRMzfowPHhReNoU_GYNoT1Zbc_Ow=s88-c-k-c0x00ffffff-no-rj"
              name="Undisputed"
            />
            <SubscriptionRow
              img="https://yt3.ggpht.com/70r5TkYTLC0cpKLAiQEvcWLeIHB8yxoiog0nQIK9MmnZHqkICy0YA-jAaqfT2ChOBwehskjf5g=s88-c-k-c0x00ffffff-no-rj"
              name="TEDx"
            />
            <SubscriptionRow
              img="https://yt3.ggpht.com/ytc/AOPolaQ6GOG-h4l3S1N5fGuJJ5FLdZvSQhs_HIKlb3TSPQ=s88-c-k-c0x00ffffff-no-rj"
              name="REACT"
            />
            <SubscriptionRow
              img="https://yt3.ggpht.com/ytc/AOPolaTO-q353uQfU-doXj7jgstXm3RbyrTqWmOAKNH34Q=s88-c-k-c0x00ffffff-no-rj"
              name="Be Inspired"
            />
            <SidebarRow
              icon={React.createElement(ExpandMoreOutlined)}
              title="Show more"
            />
            <hr></hr>
            <h4 className="sidebar-heading">More from Youtube</h4>
            <SidebarRow
              icon="https://www.svgrepo.com/show/343535/youtube-music-song-multimedia-audio.svg"
              title="YouTube Studio"
              style={{ width: '30px', height: '30px', fill: 'red' }}
            />
            <SidebarRow
              icon="https://www.svgrepo.com/show/452138/youtube.svg"
              title="YouTube Kids"
              style={{ width: '30px', height: '30px', fill: 'red' }}
            />
            <hr></hr>
            <SidebarRow
              icon={React.createElement(SettingsOutlined)}
              title="Settings"
            />
            <SidebarRow
              icon={React.createElement(FlagOutlined)}
              title="Report History"
            />
            <SidebarRow
              icon={React.createElement(HelpOutlineOutlined)}
              title="Help"
            />
            <SidebarRow
              icon={React.createElement(FeedbackOutlined)}
              title="Send Feedback"
            />
            <hr></hr>
            <div className="footer">
              <p>About &nbsp; Press &nbsp; Copyright</p>
              <p>Contact us &nbsp; Creators</p>
              <p>Advertise &nbsp; Developers</p>
              <br />
              <p>Terms &nbsp; Privacy &nbsp; Policy & Safety</p>
              <p>How YouTube works</p>
              <p>Test new features</p>
              <br />
              <p className="llc">&#169; 2023 Google LLC</p>
            </div>
          </div>
        ) : (
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
        )}
        <Tags />
      </div>
    </div>
  );
};

export default Header;
