import { useState, useEffect } from 'react';
import axios from 'axios';
import './UniversityList.css';

interface University {
  name: string;
}

const UniversityList: React.FC = () => {
  const [universities, setUniversities] = useState<University[]>([]);

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await axios.get(
          'http://universities.hipolabs.com/search?country=ghana'
        );
        setUniversities(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchUniversities();
  }, []);

  return (
    <div>
      <h2 className="uni">University List will go here.</h2>
      <ul>
        {universities.map((university) => (
          <li className="uni" key={university.name}>
            {university.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UniversityList;
