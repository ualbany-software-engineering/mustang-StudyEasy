import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'
const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
    <div class="bg-image">
      <h1>Welcome to USA</h1>
      <hr />

      {/* Button */}
      <p>
        <button onClick={() => navigate("/Ualbany")}>University at Albany</button><br/>
        <button onClick={() => navigate("/Ulos")}>University of Los Angeles</button><br/>
        <button onClick={() => navigate("/Ubuffalo")}>SUNY Buffalo</button><br/>
        <button onClick={() => navigate("/Ustony")}>StonyBrook University</button>
      </p>

      </div>
      
    </>
  );
};

export default Home;