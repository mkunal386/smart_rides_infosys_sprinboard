import React, { useState } from "react";
import "./JoinRidePage.css";   // ⬅️ Add this line

const JoinRidePage = () => {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [time, setTime] = useState("");

  const handleSearch = () => {
    if (pickup && drop && time) {
      alert(`Searching rides from ${pickup} to ${drop} at ${time}`);
    } else if (pickup && drop) {
      alert(`Searching rides NOW from ${pickup} to ${drop}`);
    } else {
      alert("Please enter Pickup and Drop locations");
    }
  };

  return (
    <div className="page-container">
      <h2 className="page-title">Join a Ride</h2>
      <div className="form-container">
        <input
          type="text"
          placeholder="Pickup Location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Drop Location"
          value={drop}
          onChange={(e) => setDrop(e.target.value)}
          className="form-input"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="form-input"
        />
        <p className="hint-text">
          ⏰ Leave time empty to search rides available <b>right now</b>.
        </p>
        <button onClick={handleSearch} className="form-button">
          Search Rides
        </button>
      </div>
    </div>
  );
};

export default JoinRidePage;
