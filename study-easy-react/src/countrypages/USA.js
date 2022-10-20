import React from "react";
import College from "./College";
import College2 from "./College2";
// import { Majors } from "../components/Majors";
// import {useState} from "react";
import "../styling/Country.css";
import Nav from "../designpages/Nav";

export const USA = () => {
  return (
    <div>
      <Nav given="country" link="/usavisa" link1="/Univ/USA" />
      <h1 className="h1">Welcome to USA</h1>
      <div className="Country">
        <div className="Country">
          <College
            collegeName="UAblany"
            Logo="https://www.uniquevenues.com/sites/uniquevenues.com/files/imagecache/venue_flexslider_2018/venues/slideshow/CC-8-X2.jpg"
            name="/ualbany"
            zipCode={12345}
            url="https://albany.edu/"
            number={1}
          />
          <College2
            collegeName="Stonybrook University"
            Logo="https://news.stonybrook.edu/wp-content/uploads/2018/09/featured-campus.jpg"
            name="/sbu"
            number={2}
          />
        </div>
      </div>
    </div>
  );
};
