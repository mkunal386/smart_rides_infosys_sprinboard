// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import HostRidePage from "./pages/HostRidePage";
import JoinRidePage from "./pages/JoinRidePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root (/) to /signup */}
        <Route path="/" element={<Navigate to="/signup" />} />

        {/* Pages WITHOUT Navbar */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Pages WITH Navbar */}
        <Route
          path="/dashboard"
          element={
            <>
              <Navbar />
              <DashboardPage />
            </>
          }
        />
        <Route
          path="/host-ride"
          element={
            <>
              <Navbar />
              <HostRidePage />
            </>
          }
        />
        <Route
          path="/join-ride"
          element={
            <>
              <Navbar />
              <JoinRidePage />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
