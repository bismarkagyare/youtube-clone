import './Tags.css';
import { NavigateNext } from '@mui/icons-material';

const tagNames: string[] = [
  'All',
  'Mixes',
  'Music',
  'Podcasts',
  'NBA',
  'Gaming',
  'Sports Leagues',
  'Javascript',
  'Sitcoms',
];

const Tags: React.FC = () => {
  return (
    <div className="tags">
      {tagNames.map((tagName, index) => (
        <div key={index} className="mini-tags">
          {tagName}
        </div>
      ))}
      <NavigateNext className="next" />
    </div>
  );
};

export default Tags;
