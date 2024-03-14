import React, { useState, useEffect } from "react";
import "../css/Universities.css"; // Import CSS file for styling
import UniversityDetail from "../functions/UniversityDetail"; // Import UniversityDetail component

const Universities = () => {
  // State variables
  const [universities, setUniversities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [searchByCountry, setSearchByCountry] = useState(false); // State to track search method
  const [countryToSearch, setCountryToSearch] = useState(""); // State to track the specific country to search

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

  // Filter universities based on search query and country if enabled
  const filteredUniversities = universities.filter((university) => {
    if (searchByCountry && countryToSearch) {
      return university.country
        .toLowerCase()
        .includes(countryToSearch.toLowerCase());
    } else {
      return university.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
  });

  // Function to handle university selection
  const handleUniversitySelect = (university) => {
    setSelectedUniversity(university);
  };

  // Function to handle clearing selected university
  const handleClearSelectedUniversity = () => {
    setSelectedUniversity(null);
  };

  // Function to handle search by country
  const handleSearchByCountry = () => {
    setSearchByCountry(true);
    // Implement your logic to get the country from the user
    const country = prompt("Enter the country to search:");
    if (country) {
      setCountryToSearch(country);
    }
  };

  return (
    <div className="universities-container">
      <h1>Universities</h1>

      {/* Search input */}
      <div>
        <input
          type="text"
          placeholder="Search universities..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button" onClick={handleSearchByCountry}>
          Search by Country
        </button>
      </div>

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
