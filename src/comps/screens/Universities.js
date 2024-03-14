import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Universities.css"; // Import CSS file for styling
import UniversityDetail from "../functions/UniversityDetail"; // Import UniversityDetail component

const Universities = () => {
  // State variables
  const [universities, setUniversities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  // Fetch universities data from API
  useEffect(() => {
    fetch("http://universities.hipolabs.com/search")
      .then((response) => response.json())
      .then((data) => {
        setUniversities(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  // Filter universities based on search query
  const filteredUniversities = universities.filter((university) =>
    university.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to handle university selection
  const handleUniversitySelect = (university) => {
    setSelectedUniversity(university);
  };

  // Function to handle clearing selected university
  const handleClearSelectedUniversity = () => {
    setSelectedUniversity(null);
  };

  return (
    <div className="universities-container">
      <h1>Universities</h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search universities..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Display universities if data is loaded, otherwise show loading message */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {selectedUniversity ? (
            <UniversityDetail
              university={selectedUniversity}
              onClose={handleClearSelectedUniversity}
            />
          ) : (
            <ul className="universities-list">
              {filteredUniversities.map((university, index) => (
                <li
                  key={index}
                  onClick={() => handleUniversitySelect(university)}
                >
                  {university.name}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default Universities;
