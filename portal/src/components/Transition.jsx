import React from "react";
import { useEffect, useState } from "react";
import Dashboard from "./Dashboard/Dashboard";

const Transition = ({ onFinish }) => {
  const [moveLogo, setMoveLogo] = useState(false);
  const [showDashboard, setShowDashBoard] = useState(false);
  const [hideLogo, setHideLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMoveLogo(true);
      setShowDashBoard(true);
    }, 2000);

    const finishTimer = setTimeout(() => {
      setHideLogo(true);
      onFinish();
    }, 5500);

    return () => {
      clearTimeout(timer);
      clearTimeout(finishTimer);
    };
  }, []);

  return (
    <main className="transition">
      <img
        src="/bookharvest-logo.png"
        className={`transition-logo ${moveLogo ? "move-logo" : ""} ${
          hideLogo ? "hide-logo" : ""
        }`}
        alt="Book Harvest"
      />
      <div className={`transition-content ${moveLogo ? "fade-out" : ""}`}>
        <h1> You response has been recorded!</h1>
        <p>Thank you for providing your service agreement information.</p>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
        <p className="loading-text">Loading your dashboard...</p>
      </div>
      
    </main>
  );
};

export default Transition;
