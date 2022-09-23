import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'
const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
    <div class="bg-image">
      <h1>Welcome<br/> Choose Your Country</h1>
      <hr />

      {/* Button */}
      <p>
        <button onClick={() => navigate("/USHome")}>United States</button><br/>
        <button onClick={() => navigate("/INDHome")}>India</button><br/>
        <button onClick={() => navigate("/CHIHome")}>China</button><br/>\
      </p>

      </div>
      
    </>
  );
};

export default Home;