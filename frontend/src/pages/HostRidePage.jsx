// src/pages/HostRidePage.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./HostRidePage.css";

const HostRidePage = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    time: "",
    seats: "",
    fare: "",
    carModel: "",
    plateNumber: "",
    phoneNumber: "",
    carColor: "",
  });

  // Handle input change for all fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      from,
      to,
      time,
      seats,
      fare,
      carModel,
      plateNumber,
      phoneNumber,
      carColor,
    } = formData;

    // Today's date in yyyy-MM-dd format
    const today = new Date().toISOString().split("T")[0];

    // Construct URL with query parameters
    const url = `http://localhost:8080/rides/host?driverId=1&source=${encodeURIComponent(
      from
    )}&destination=${encodeURIComponent(
      to
    )}&date=${today}&time=${time}&seats=${seats}&fare=${fare}&carModel=${encodeURIComponent(
      carModel
    )}&plateNumber=${encodeURIComponent(
      plateNumber
    )}&phoneNumber=${encodeURIComponent(
      phoneNumber
    )}&carColor=${encodeURIComponent(carColor)}`;

    try {
      const response = await fetch(url, {
        method: "POST",
      });

      if (response.ok) {
        const result = await response.json();
        alert(`✅ Ride hosted successfully! Ride ID: ${result.id}`);
      } else {
        const errMsg = await response.text();
        alert(`❌ Failed to post the ride! ${errMsg}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ An error occurred while posting the ride.");
    }
  };

  return (
    <>
      
      <div className="host-container">
        <div className="host-box">
          <h2>Host a Ride</h2>
          <form onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div className="form-row">
              <input
                type="text"
                name="from"
                placeholder="From Location"
                value={formData.from}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="to"
                placeholder="To Location"
                value={formData.to}
                onChange={handleChange}
                required
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>

            {/* Row 2 */}
            <div className="form-row">
              <input
                type="number"
                name="seats"
                placeholder="Available Seats"
                value={formData.seats}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="fare"
                placeholder="Fare"
                value={formData.fare}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="carModel"
                placeholder="Car Model"
                value={formData.carModel}
                onChange={handleChange}
                required
              />
            </div>

            {/* Row 3 */}
            <div className="form-row">
              <input
                type="text"
                name="plateNumber"
                placeholder="Plate Number"
                value={formData.plateNumber}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <input
                type="text"
                name="carColor"
                placeholder="Car Color"
                value={formData.carColor}
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <button type="submit">🚗 Post Ride</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default HostRidePage;
