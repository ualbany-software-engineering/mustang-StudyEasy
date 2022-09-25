import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'
const AUSHome = (props) => {
  const navigate = useNavigate();

  return (
    <>
    <div class="bg-image">
      <h1>Welcome to Australia</h1>
      <hr />

      {/* Button */}
      <p>
        <button onClick={() => navigate("/UM")}>University of Melbourne</button><br/>
        <button onClick={() => navigate("/USyd")}>University of Sydney</button><br/>
      </p>
      <br/><br/><br/><br/><br/>
      <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
      
    </>
  );
};

export default AUSHome;