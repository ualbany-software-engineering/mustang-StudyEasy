/* Delete */
import React from 'react'
import {Link } from "react-router-dom";
function Error() {
  return (
    <div>
        <h1>Ohh! U Lost  404 Page not found </h1>
        <Link to = "/Country">Go back to Country page</Link>
    </div>
  )
}

export default Error