import React, { useEffect } from "react";
import { FadeIn } from "react-anim-kit";
import { ConditionallyRender } from "react-util-kit";
import { Link } from 'react-router-dom';

import styles from "./ActionProviderDocs.module.css";

const ActionProviderDocs = ({ gist, setState }) => {
  useEffect(() => {
    setState((state) => ({ ...state, gist: "config" }));
  }, [setState]);

  const showActionProviderGist = gist === "config";

  return (
    <div>
      <Link to="/Gre"
        //target="_blank"
        rel="noopener noreferrer"
        className={styles.configLink}
      >
        GRE
      </Link>
      <Link to="/Ielts"
        //target="_blank"
        rel="noopener noreferrer"
        className={styles.configLink}
      >
        IELTS
      </Link>
      <Link to="/Gmat"
        //target="_blank"
        rel="noopener noreferrer"
        className={styles.configLink}
      >
        GMAT
      </Link>
      <ConditionallyRender
        ifTrue={showActionProviderGist}
        //show={<GistContainer gistId="af04e2e30407671412af08fa3c429409" />}
      />
    </div>
  );
};


export default ActionProviderDocs;
