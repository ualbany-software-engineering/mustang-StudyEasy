import React from "react";
import {MenuList2} from '../helpers/MenuList2';
import MenuItem from "../helpers/MenuItem";

import pic from "../materials/GmatinBrief.pdf";
import pic1 from "../materials/GmatStudyGuide.pdf";
import pic2 from "../materials/KaplanGmatPrep.pdf";
import './style.css';
function Gmat() {
  return (
    <div className='menu'>
        <h1 className="menuTitle">GMAT Prep Sources</h1>
        <div className="menuList">
            {
                MenuList2.map((menuItem,key) => {
                    return (
                    <MenuItem 
                    key={key}
                    image={menuItem.image} 
                    name={menuItem.name} 
                    price={menuItem.price}
                    />
                
                ) 
            })
            }

        </div>
            <div className="container">
                <h1 className="menuTitle" >Downloadable Materials</h1>
                <ul className="list-container">
                    <li><a href={pic} download>About GMAT</a></li>
                    <li><a href={pic1} download>GMAT Study Guide</a></li>
                    <li><a href={pic2} download>Kaplan Prep</a></li>
                </ul>
            </div>
    </div>
  )
}

export default Gmat