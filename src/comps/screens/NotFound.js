import React from "react";
import { Link } from "react-router-dom";
import "../css/NotFound.css"; // Import CSS file for styling

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-text">404 - Not Found</h1>
      <img src={"https://media.istockphoto.com/id/1308685498/photo/concept-of-error-in-program-code.jpg?s=612x612&w=0&k=20&c=9MZ7_thY6SxfpuDs1AgBuLzRlN5fzV2WX-vdk-7TZ1w="} alt="Error" className="error-image" />
      <p>The page you're looking for doesn't exist.</p>
      {/* Create link to Home page */}
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default NotFound;
