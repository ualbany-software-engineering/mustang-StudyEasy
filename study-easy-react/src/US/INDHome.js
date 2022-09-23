import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'
const INDHome = (props) => {
  const navigate = useNavigate();

  return (
    <>
    <div class="bg-image">
      <h1>Welcome to India</h1>
      <hr />

      {/* Button */}
      <p>
        <button onClick={() => navigate("/IIS")}>Indian Institute of Sciences</button><br/>
        <button onClick={() => navigate("/IIT")}>Indian Institute of Technology</button><br/>
        <button onClick={() => navigate("/NIT")}>National Institute of Technology</button><br/>
      </p>
      <br/><br/><br/><br/><br/>
      <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
      
    </>
  );
};

export default INDHome;