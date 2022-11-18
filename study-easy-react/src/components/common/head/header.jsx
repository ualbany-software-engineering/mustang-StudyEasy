import React, { useState } from "react";
import { Head } from "./head";
import { Link } from "react-router-dom";
import "./head.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// import { auth } from "../../../firebase/firebaseconfig";

//Abid Imports
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import { Button } from "@mui/material";
//end of Abid imports

//<Button onClick={() => console.log()}> SignOut</Button> onAuthStateChanged

const Header = () => {
  const [click, setclick] = useState(false);
  const [isUserlogin, setIsUserlogin] = useState(false);

  //Abid code
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/Login`;
    navigate(path);
  };
  const auth = getAuth();
  const SignOut = () => {
    // const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert("Successfully signed out");
        setIsUserlogin(false);
        routeChange();
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };

  // end of Abid code

  const currentUser = auth.currentUser;

  if (currentUser !== null) {
    if (!isUserlogin) setIsUserlogin(true);
  }

  return (
    <div>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB"}
            onClick={() => setclick(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Search ">Search</Link>
            </li>
            <li>
              <Link to="/Trending">Trending</Link>
            </li>
            <li>
              <Link to="/Team">Team</Link>
            </li>
            <li>
              <Link to="/Comment">Reviews</Link>
            </li>
            <li>
              <Link to="/Resources">Resources</Link>
            </li>
            {isUserlogin ? (
              <li>
                <Link onClick={() => this.signOut()}>
                  Sign out {currentUser.displayName}
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/Login">Login</Link>
              </li>
            )}
            {isUserlogin && (
              <li>
                <Link to="/profile">profile</Link>
              </li>
            )}
          </ul>
          <div className="start">
            <div className="button">
              <Link to="/Aboutus" className="aboutus">ABOUT US</Link></div>
          </div>
          <button className="toggle" onClick={() => setclick(!click)}>
            {click ? (
              <i className="bi bi-x"></i>
            ) : (
              <i className="bi bi-list"></i>
            )}
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Header;