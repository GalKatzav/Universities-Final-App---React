import React from "react";
import { Link } from "react-router-dom";
import "../css/NotFound.css"; // Import CSS file for styling

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-text">404 - Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/home">Go to Home Page</Link>
    </div>
  );
};

export default NotFound;
