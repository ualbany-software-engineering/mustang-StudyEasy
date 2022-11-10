import React from "react";
// import { Link } from "react-router-dom";
import "./SideNav.css";
import {HashLink as Link} from "react-router-hash-link";
import AnchorLink from "react-anchor-link-smooth-scroll";
function Sidenav() {
    return (
        <div className="sidenav">
            <ol>
    <li ><AnchorLink class="active navli" href="#overview">Overview</AnchorLink></li>
  <li><AnchorLink class="navli" href="#colleges">Colleges</AnchorLink></li>
  <li><AnchorLink class="navli" href="#requirements">Requirements</AnchorLink></li>
  <li><AnchorLink class="navli" href="#estimatedcost">Estimated Cost</AnchorLink></li>
  <li><AnchorLink class="navli" href="#visa">Visa</AnchorLink></li>
 
  {/* <>  <Link to="#overview" smooth>Overview </Link>
  <Link to="#colleges" smooth>Colleges </Link>
  </> */}

            </ol>
        </div>
    )
}
export default Sidenav;