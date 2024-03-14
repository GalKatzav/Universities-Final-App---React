import React, { useState, useEffect } from "react";

const Layout = ({ children }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const timeString = date.toLocaleTimeString();
      setCurrentTime(timeString);
    }, 1000); // Update time every second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <div className="local-time">Local Time: {currentTime}</div>
      {children}
    </div>
  );
};

export default Layout;
