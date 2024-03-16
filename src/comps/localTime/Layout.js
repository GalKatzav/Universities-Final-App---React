import React, { useState, useEffect } from "react";

// State Management with `useState`:
// Inside the `Layout` component, there's a state variable `currentTime`, initialized using the `useState` hook.
// It holds the current local time string.
// `setCurrentTime` is the function used to update the `currentTime` state variable.
const Layout = ({ children }) => {
  const [currentTime, setCurrentTime] = useState("");

  // The `useEffect` hook is used to perform side effects in functional components.
  // In this case, it's used to update the local time every second.
  // Inside `useEffect`, an interval is set up using `setInterval` function.
  // It updates the local time string (`currentTime`) every second.
  // The interval is set to run every 1000 milliseconds (1 second).
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
