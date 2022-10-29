import React, { useEffect } from "react";
import { FadeIn } from "react-anim-kit";
import { ConditionallyRender } from "react-util-kit";
import { Link } from 'react-router-dom';

import styles from "./TrendingDocs.module.css";

const TrendingDocs = ({ gist, setState }) => {
  useEffect(() => {
    setState((state) => ({ ...state, gist: "config" }));
  }, [setState]);

  const showLoginGist = gist === "config";

  return (
    <div>
      <Link to="/Trending"
        //target="_blank"
        rel="noopener noreferrer"
        className={styles.configLink}
      >
        Trending Colleges
      </Link>
    </div>
  );
};


export default TrendingDocs