import React from 'react';
import SidebarRow from './SidebarRow';
import SubscriptionRow from './SubscriptionRow';
import HomeIcon from '@mui/icons-material/Home';
import {
  ExploreOutlined,
  SubscriptionsOutlined,
  VideoLibraryOutlined,
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

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <SidebarRow icon={React.createElement(HomeIcon)} title="Home" />
      <SidebarRow icon={React.createElement(ExploreOutlined)} title="Explore" />
      <SidebarRow
        icon={React.createElement(SubscriptionsOutlined)}
        title="Subscriptions"
      />
      <hr></hr>
      <SidebarRow
        icon={React.createElement(VideoLibraryOutlined)}
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
  );
};

export default Sidebar;
