import React, { useState, useEffect } from "react";
import "../css/Universities.css"; // Import CSS file for styling
import UniversityDetail from "../functions/UniversityDetail"; // Import UniversityDetail component

const Universities = () => {
  // State variables

  // Universities is the state variable representing the list of universities. It is initialized with an empty array [].
  // setUniversities is the function used to update the universities state variable
  const [universities, setUniversities] = useState([]);

  // This line initializes state variable `searchQuery` representing the user's search query.
  // It's initialized with an empty string `""`.
  // `setSearchQuery` is the function used to update the `searchQuery` state variable.
  const [searchQuery, setSearchQuery] = useState("");

  // This line initializes the `loading` state variable, which indicates whether the data is being loaded from the API or not.
  // It's initialized with `true`, indicating that data is currently being loaded.
  // `setLoading` is the function used to update the `loading` state variable.
  const [loading, setLoading] = useState(true);

  // This line initializes the `selectedUniversity` state variable, which represents the currently selected university.
  // It's initialized with `null`, indicating that no university is currently selected.
  // `setSelectedUniversity` is the function used to update the `selectedUniversity` state variable.
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  // This line initializes the `searchByCountry` state variable, which indicates whether the user wants to search universities by country.
  // It's initialized with `false`, indicating that the search by country feature is disabled initially.
  // `setSearchByCountry` is the function used to update the `searchByCountry` state variable.
  const [searchByCountry, setSearchByCountry] = useState(false); // State to track search method

  // This line initializes the `countryToSearch` state variable, which holds the name of the country the user wants to search for.
  // It's initialized with an empty string `""`.
  // `setCountryToSearch` is the function used to update the `countryToSearch` state variable.
  const [countryToSearch, setCountryToSearch] = useState(""); // State to track the specific country to search

  // Fetch universities data from API
  // This useEffect hook is called once when the component mounts. It fetches data from an API endpoint
  // (http://universities.hipolabs.com/search), updates the universities state with the fetched data,
  // and sets loading to false once the data is fetched or if there's an error.
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
    // Country-based Filtering:
    // This line checks whether the user has enabled the search by country feature (`searchByCountry` is `true`)
    // and whether a specific country to search for has been provided (`countryToSearch` is not an empty string).
    // If both conditions are met, the filtering will be based on the country.
    // Otherwise, it will fall back to filtering based on the search query.
    if (searchByCountry && countryToSearch) {
      return university.country
        .toLowerCase()
        .includes(countryToSearch.toLowerCase());
    } else {
      // Query-based Filtering:
      // If the search by country feature is not enabled or a specific country to search for is not provided,
      // or if the provided country name doesn't match any universities, the filtering logic inside the `else` block is executed.
      // checks if the lowercase version of the university name (`university.name.toLowerCase()`)
      // contains the lowercase version of the search query (`searchQuery.toLowerCase()`).
      // If the name of a university contains the search query (ignoring case), the university is included in the filtered list.
      return university.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
  });

  // These functions handle various events such as selecting a university,
  // clearing the selected university, and initiating a search by country.

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
      {/* The `<input>` element allows users to type in a search query to filter the list of universities.
          Its value is controlled by the `searchQuery` state variable, and the `onChange` event handler updates
          the `searchQuery` state variable as the user types.
          The `<button>` element with the class name `search-button` triggers the `handleSearchByCountry`
          function when clicked, allowing users to search universities by country. */}
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
          {/* Displaying Universities:
            If `loading` is `false`, it checks whether a `selectedUniversity` is present. If `selectedUniversity` exists,
            it renders the `UniversityDetail` component,
            passing the selected university data and a function to clear the selection as props. */}
          {selectedUniversity ? (
            <UniversityDetail
              university={selectedUniversity}
              onClose={handleClearSelectedUniversity}
            />
          ) : (
            // If `selectedUniversity` does not exist, it renders a `<ul>` element with the class name`universities-list`.
            // Inside this `<ul>`, it maps over the `filteredUniversities` array and renders each university as an `<li>` element.
            // Each `<li>` element contains the university name and an `onClick` event handler to select the respective university.
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
