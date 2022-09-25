import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'
const CANHome = (props) => {
  const navigate = useNavigate();

  return (
    <>
    <div class="bg-image">
      <h1>Welcome to China</h1>
      <hr />

      {/* Button */}
      <p>
        <button onClick={() => navigate("/UT")}>University of Toronto</button><br/>
        <button onClick={() => navigate("/McG")}>McGill University</button><br/>
      </p>
      <br/><br/><br/><br/><br/>
      <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
      
    </>
  );
};

export default CANHome;