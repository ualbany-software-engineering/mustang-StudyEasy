import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
import "./navbar.css"
export const Navbar = () => {
  return (
    <div className='container innernav'>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">List of Universities</a>
      <a class="nav-item nav-link" href="#">Visa Data of the country</a>
    </div>
    </div>
    <form class="form-inline right">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    </form>
    </nav>
    </div>
  )
}
