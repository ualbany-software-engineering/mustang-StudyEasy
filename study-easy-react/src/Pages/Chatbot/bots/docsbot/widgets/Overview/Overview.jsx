import React from "react";
import { FadeIn } from "react-anim-kit";

import { ReactComponent as OverviewSVG } from "../../../../images/img/bot-overview.svg";

import styles from "./Overview.module.css";
import GeneralOptions from "../options/GeneralOptions/GeneralOptions";

const Overview = (props) => {
  return (
    <div className={styles.overview}>
      <GeneralOptions actionProvider={props.actionProvider} />
    </div>
  );
};

export default Overview;
