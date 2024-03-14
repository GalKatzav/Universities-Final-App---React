import React from "react";
import "../css/Universities.css"; // Import CSS file for styling

const UniversityDetail = ({ university, onClose }) => {
    return (
      <div className="form-container">
        <h2>{university.name}</h2>
        <p>Country: {university.country}</p>
        <p>
          Website:{" "}
          {university.web_pages.map((url, index) => (
            <a key={index} href={url}>
              {url}
            </a>
          ))}
        </p>
        <div>
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };
  
  export default UniversityDetail;