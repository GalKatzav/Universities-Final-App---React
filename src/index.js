import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/comps/screens/Home.js";
import About from "../src/comps/screens/About.js";
import Universities from "../src/comps/screens/Universities.js";
import NotFound from "../src/comps/screens/NotFound.js"; // Import the NotFound component
import Footer from "../src/comps/footer/Footer"; // Import the Footer component
import MyRouter from "../src/comps/navbar/MyRouter"; // Import the Navbar component
import Layout from "./comps/localTime/Layout.js";
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Layout />
      {/* Include the navbar component outside the Routes */}
      <MyRouter />
      <Footer />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="*" element={<NotFound />} />{" "}
        {/* Route for handling 404 errors */}
      </Routes>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
