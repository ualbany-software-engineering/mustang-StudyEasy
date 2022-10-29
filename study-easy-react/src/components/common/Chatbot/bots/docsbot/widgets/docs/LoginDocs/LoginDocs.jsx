import React, { useEffect } from "react";
import { FadeIn } from "react-anim-kit";
import { ConditionallyRender } from "react-util-kit";
import { Link } from 'react-router-dom';

import styles from "./LoginDocs.module.css";

const LoginDocs = ({ gist, setState }) => {
  useEffect(() => {
    setState((state) => ({ ...state, gist: "config" }));
  }, [setState]);

  const showLoginGist = gist === "config";

  return (
    <div>
      <Link to="/Login"
        //target="_blank"
        rel="noopener noreferrer"
        className={styles.configLink}
      >
        Login/Signup
      </Link>
    </div>
  );
};


export default LoginDocs