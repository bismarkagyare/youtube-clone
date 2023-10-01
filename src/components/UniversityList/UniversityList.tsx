import { useEffect, useState } from 'react';
import axios from 'axios';
interface University {
  name: string;
}

const UniversityList: React.FC = () => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const universitiesPerPage = 5;

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await axios.get(
          'http://universities.hipolabs.com/search?country=ghana'
        );
        setUniversities(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
        setError('An error occurred while fetching data');
      }
    };

    fetchUniversities();
  }, []);

  // Logic for pagination
  const indexOfLastUniversity = currentPage * universitiesPerPage;
  const indexOfFirstUniversity = indexOfLastUniversity - universitiesPerPage;
  const currentUniversities = universities.slice(
    indexOfFirstUniversity,
    indexOfLastUniversity
  );

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2 className="uni">University List</h2>
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <>
          <ul>
            {currentUniversities.map((university) => (
              <li key={university.name}>{university.name}</li>
            ))}
          </ul>
          <div>
            {Array.from({
              length: Math.ceil(universities.length / universitiesPerPage),
            }).map((_, index) => (
              <button key={index + 1} onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default UniversityList;
