import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "./material.css"

const Material = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);

  const handleBranchChange = (event) => {
    setSelectedBranch(event.target.value);
  };

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  const getSemesterLink = () => {
    if (selectedBranch === 'Information Technology') {
      switch (selectedSemester) {
        case '1':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/sem1`;
        case '2':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/sem2`;
        // Add cases for other semesters as needed
        case '3':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/sem3`;
        // Add cases for other semesters as needed
        case '4':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/sem4`;
        // Add cases for other semesters as needed
        case '5':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/sem5`;
        // Add cases for other semesters as needed
        case '6':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/sem6`;
        // Add cases for other semesters as needed
        case '7':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/sem7`;
        // Add cases for other semesters as needed
        case '8':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/sem8`;
        // Add cases for other semesters as needed


        default:
          return '/';
      }
    } else if (selectedBranch === 'Computer Science') {
      switch (selectedSemester) {
        case '1':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/SEM1`;
        // Add cases for other semesters as needed
        case '2':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/SEM2`;
        case '3':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/SEM3`;
        case '4':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/SEM4`;
        case '5':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/SEM5`;
        case '6':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/SEM6`;
        case '7':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/SEM7`;
        case '8':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/SEM8`;
        default:
          return '/';
      }
    }
    else if (selectedBranch === 'Mechanical Engineering') {
      switch (selectedSemester) {
        case '1':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/Sem1`;
        // Add cases for other semesters as needed
        case '2':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/Sem2`;
        case '3':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/Sem3`;
        case '4':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/Sem4`;
        case '5':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/Sem5`;
        case '6':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/Sem6`;
        case '7':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/Sem7`;
        case '8':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/Sem8`;
        default:
          return '/';
      }
    }
    else {
      switch (selectedSemester) {
        case '1':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/cl1`;
        // Add cases for other semesters as needed
        case '2':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/cl2`;
        case '3':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/cl3`;
        case '4':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/cl4`;
        case '5':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/cl5`;
        case '6':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/cl6`;
        case '7':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/cl7`;
        case '8':
          return `/branch/${encodeURIComponent(selectedBranch)}/semester/${encodeURIComponent(`Semester ${selectedSemester}`)}/cl8`;
        default:
          return '/';
      }
    }
    return '/';
  };

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="mt-3 mx-auto py-3 text-center w-75 mt-5 rounded-3">
        <h1 className="main-heading font-weight-bold text-black">Choose Your Branch</h1>
      </div>

      <div className="mt-3 mx-auto w-75 py-3 text-center">
        <select
          className="options form-select w-100 py-4 px-5 fw-bolder text-capitalize"
          aria-label="Default select example"
          onChange={handleBranchChange}
          value={selectedBranch}
        >
          <option value="" disabled selected>
            Choose your branch
          </option>
          <option value="Information Technology">👉 Information Technology</option>
          <option value="Computer Science">👉 Computer Science</option>
          <option value="Mechanical Engineering">👉 Mechanical Engineering</option>
          <option value="Civil Engineering">👉 Civil Engineering</option>
        </select>
      </div>

      {selectedBranch && (
        <div className="mx-auto w-75 mt-5">
          <h1 className="selected-semester text-center text-white">Select Semester</h1>
          <div className="mx-auto w-50">
            <select
              className="form-select w-100"
              aria-label="Default select example"
              onChange={handleSemesterChange}
              value={selectedSemester}
            >
              <option value="" disabled selected>
                Choose semester
              </option>
              {[...Array(8).keys()].map((semester) => (
                <option key={semester + 1} value={semester + 1}>
                  Semester {semester + 1}
                </option>
              ))}
            </select>
          </div>
          {selectedSemester && (
            <div className="text-center mt-5">
              <Link to={getSemesterLink()} className="link-button btn btn-primary p-4 fw-bolder">
                Get your Material SEM-{selectedSemester} for {selectedBranch}
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default Material;