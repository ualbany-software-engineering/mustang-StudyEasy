import React, { useEffect } from "react";
import { ConditionallyRender } from "react-util-kit";
import { Link } from 'react-router-dom';
//import GistContainer from "../../GistContainer/GistContainer";

import styles from "./Config.module.css";

const Config = ({ gist, setState }) => {
  useEffect(() => {
    setState((state) => ({ ...state, gist: "config" }));
  }, [setState]);

  const showActionProviderGist = gist === "config";

  return (
    <div>
      <Link to="/usavisa"
        //target="_blank"
        rel="noopener noreferrer"
        className={styles.configLink}
      >
        USA Visa Details
      </Link>
      <Link to="/indiavisa"
        //target="_blank"
        rel="noopener noreferrer"
        className={styles.configLink}
      >
        India Visa Details
      </Link>
      <Link to="/chinavisa"
        //target="_blank"
        rel="noopener noreferrer"
        className={styles.configLink}
      >
        China Visa Details
      </Link>
      <Link to="/canadavisa"
        //target="_blank"
        rel="noopener noreferrer"
        className={styles.configLink}
      >
        Canada Visa Details
      </Link>
      <Link to="/ukvisa"
        //target="_blank"
        rel="noopener noreferrer"
        className={styles.configLink}
      >
        UK Visa Details
      </Link>
      <Link to="/canadavisa"
        //target="_blank"
        rel="noopener noreferrer"
        className={styles.configLink}
      >
        Australia Visa Details
      </Link>
      <ConditionallyRender
        ifTrue={showActionProviderGist}
        //show={<GistContainer gistId="af04e2e30407671412af08fa3c429409" />}
      />
    </div>
  );
};

export default Config;
