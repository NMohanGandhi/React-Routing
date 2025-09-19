import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';

function HomePage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  function goToUserPage() {
    navigate(`/user/${name}`);
  }

  return (
    <div className="form-container">
      <h1>This is Home Page</h1>

      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        value={name}
        className="form"
      />

      <div>
        <button className="proceed-button" onClick={goToUserPage}>
          Proceed
        </button>
      </div>
    </div>
  );
}

export default HomePage;
