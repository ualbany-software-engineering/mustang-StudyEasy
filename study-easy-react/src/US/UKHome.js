import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'
const UKHome = (props) => {
  const navigate = useNavigate();

  return (
    <>
    <div class="bg-image">
      <h1>Welcome to UK</h1>
      <hr />

      {/* Button */}
      <p>
        <button onClick={() => navigate("/UC")}>University of Cambridge</button><br/>
        <button onClick={() => navigate("/UO")}>University of Oxford</button><br/>
      </p>
      <br/><br/><br/><br/><br/>
      <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
      
    </>
  );
};

export default UKHome;