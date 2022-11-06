import React from "react";
import {MenuList1} from '../helpers/MenuList1';
import MenuItem from "../helpers/MenuItem";
import pic from "../materials/IELTSGuide.pdf";
import pic1 from "../materials/UKGuide.pdf";
import pic2 from "../materials/USGuide.pdf";
import './style.css';
function Ielts() {
  return (
    <div className='menu'>
        <h1 className="menuTitle">Ielts Prep Sources</h1>
        <div className="menuList">
            {
                MenuList1.map((menuItem,key) => {
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
                    <li><a href={pic} download>Study Guide</a></li>
                    <li><a href={pic1} download>UK Guide</a></li>
                    <li><a href={pic2} download>US Guide</a></li>
                </ul>
            </div>
    </div>
  )
}

export default Ielts