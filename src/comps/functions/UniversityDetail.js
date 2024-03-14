import React from "react";

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
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UniversityDetail;
