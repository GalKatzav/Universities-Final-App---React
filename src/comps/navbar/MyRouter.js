import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS file for styling

export default function MyRouter() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-cream">
        {" "}
        {/* Change bg-secondary to bg-cream */}
        <ul className="navbar-nav mx-auto">
          {" "}
          {/* Change me-auto to mx-auto for center alignment */}
          <li className="nav-item">
            <Link to="/" className="nav-link active">
              {/*  */}
              <img
                src={
                  "https://i.pinimg.com/originals/f1/be/c8/f1bec81e20d80cd36c82379af920a4e9.gif"
                }
                alt="About"
                className="about-icon"
                style={{ width: "125px", height: "75px" }}
              />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link active">
              <img
                src={
                  "https://www.clipartbest.com/cliparts/RiG/RXR/RiGRXRyxT.gif"
                }
                alt="About"
                className="about-icon"
                style={{ width: "75px", height: "75px" }}
              />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/universities" className="nav-link active">
              {/*  */}
              <img
                src={
                  "https://www.clipartbest.com/cliparts/jix/LAj/jixLAjEdT.gif"
                }
                alt="About"
                className="about-icon"
                style={{ width: "75px", height: "75px" }}
              />
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
