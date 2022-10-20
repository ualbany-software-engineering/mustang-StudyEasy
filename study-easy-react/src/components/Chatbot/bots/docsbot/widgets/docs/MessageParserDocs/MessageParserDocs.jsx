import React, { useEffect } from "react";
import { ConditionallyRender } from "react-util-kit";

//import GistContainer from "../../GistContainer/GistContainer";

import styles from "./MessageParserDocs.module.css";
import { Link } from 'react-router-dom';
const MessageParserDocs = ({ gist, setState }) => {
  useEffect(() => {
    setState((state) => ({ ...state, gist: "config" }));
  }, [setState]);

  const showActionProviderGist = gist === "config";

  return (
    <div>
      <Link to= "/Univ/USA"
        //target="_blank"
        rel="noopener noreferrer"
        className={styles.configLink}>
        USA
      </Link>
      <Link to="/Univ/IND"
        //target="_blank"
        rel="noopener noreferrer"
        className={styles.configLink}
      >
        India
      </Link>
      <Link to="/Univ/CHI"
        //target="_blank"
        rel="noopener noreferrer"
        className={styles.configLink}
      >
        China
        </Link>
      <Link to="/Univ/CAN"
        //target="_blank"
        rel="noopener noreferrer"
        className={styles.configLink}
      >
        Canada
        </Link>
      <Link to="/Univ/UK"
        //target="_blank"
        rel="noopener noreferrer"
        className={styles.configLink}
      >
        UK
        </Link>
      <Link to="/Univ/AUS"
        //target="_blank"
        rel="noopener noreferrer"
        className={styles.configLink}
      >
        Australia
        </Link>
      <ConditionallyRender
        ifTrue={showActionProviderGist}
        //show={<GistContainer gistId="af04e2e30407671412af08fa3c429409" />}
      />
    </div>
  );
};

export default MessageParserDocs;