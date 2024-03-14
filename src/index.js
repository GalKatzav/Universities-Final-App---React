import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/comps/screens/Home.js";
import About from "../src/comps/screens/About.js";
import Universities from "../src/comps/screens/Universities.js";
import Footer from "../src/comps/footer/Footer"; // Import the Footer component
import MyRouter from "../src/comps/navbar/MyRouter"; // Assuming MyRouter contains your navbar and footer components

ReactDOM.render(
  <BrowserRouter>
    <div>
      {/* Include the navbar and footer components outside the Routes */}
      <MyRouter />
      <Footer />
      <Routes>
        <Route path="/" element={<App />} />
        {<Route path="/home" element={<Home />} />}
        <Route path="/about" element={<About />} />
        <Route path="/Universities" element={<Universities />} />
      </Routes>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
