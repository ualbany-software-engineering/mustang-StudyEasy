import React from "react";
import "./SideNav.css";
function Sidenav() {
    return (
        <div className="sidenav">
            <ol>
    <li ><a class="active navli">Overview</a></li>
  <li><a class="navli">Colleges</a></li>
  <li><a class="navli" >Requirements</a></li>
  <li><a class="navli" >Estimated Cost</a></li>
  <li><a class="navli">Visa</a></li>
            </ol>
        </div>
    )
}
export default Sidenav;