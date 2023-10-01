import './Tags.css';
import { NavigateNext } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import UniversityList from '../UniversityList/UniversityList';

const tagNames: string[] = [
  'All',
  'Mixes',
  'Music',
  'Podcasts',
  'NBA',
  'Gaming',
  'Sports',
  'NY',
  'Javascript',
  'Sitcoms',
];

const Tags: React.FC = () => {
  const [visibleTags, setVisibleTags] = useState<string[]>([]);

  useEffect(() => {
    // Function to update visible tags based on screen width
    const updateVisibleTags = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 480) {
        setVisibleTags(tagNames.slice(0, 5));
      } else if (screenWidth <= 768) {
        setVisibleTags(tagNames.slice(0, 8));
      } else {
        setVisibleTags(tagNames);
      }
    };

    updateVisibleTags();
    window.addEventListener('resize', updateVisibleTags);
    return () => {
      window.removeEventListener('resize', updateVisibleTags);
    };
  }, []);
  return (
    <div className="main">
      <div className="tags">
        {visibleTags.map((tagName, index) => (
          <div key={index} className="mini-tags">
            {tagName}
          </div>
        ))}
        <NavigateNext className="next" />
      </div>
      <UniversityList />
    </div>
  );
};

export default Tags;
