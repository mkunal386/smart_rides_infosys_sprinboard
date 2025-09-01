import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; // ✅ Navbar only for dashboard
import "./DashboardPage.css";

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="dashboard-container">
        <h2 className="dashboard-title">Welcome to Smart Rides</h2>
        <p className="dashboard-subtitle">Choose what you want to do today</p>
        <div className="dashboard-buttons">
          <button
            className="dashboard-btn host-btn"
            onClick={() => navigate("/host-ride")}
          >
            🚗 Host a Ride
          </button>
          <button
            className="dashboard-btn join-btn"
            onClick={() => navigate("/join-ride")}
          >
            🚌 Join a Ride
          </button>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
