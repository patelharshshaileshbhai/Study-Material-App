import React, { useState, useEffect } from 'react';
import { Description as DescriptionIcon } from '@mui/icons-material';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Me1.css'; // Import the CSS file
import FolderIcon from '@mui/icons-material/Folder';
import { BASE_URL } from '../../../services/helper';

const Sem2 = () => {
  const [items, setItems] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch(`${BASE_URL}/api/meData`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      response = await response.json();
      console.log('Parsed Response:', response);
      setItems(response);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const sem1Data = items.find((item) => item.Sem === '2');

  const handleIconClick = (driveLink) => {
    window.open(driveLink, '_blank');
  };

  return (
    <div className="sem1-container">
      <h1 className='sem1-heading text-center py-5'>Semester-2 Material</h1>
      {sem1Data && (
        <div className="sem1-details">
          
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              {sem1Data.Subjects.map((subject, subjectIndex) => (
                Object.keys(subject).map((key) => (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>
                    <button onClick={() => handleIconClick(subject[key])} className="botao">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mysvg"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <g id="Interface / Download">
                              <path
                                id="Vector"
                                d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                                stroke="#f1f1f1"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </g>
                          </g>
                        </svg>
                        <span className="texto">Source</span>
                      </button>
                    </td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Sem2;
