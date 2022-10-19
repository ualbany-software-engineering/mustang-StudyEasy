import React from "react";
import {MenuList1} from '../helpers/MenuList1';
import MenuItem from "../components/MenuItem";
import pic from "../assets/IELTSGuide.pdf";
import pic1 from "../assets/UKGuide.pdf";
import pic2 from "../assets/USGuide.pdf";
import '../styling/Menu.css';
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
            })}

        </div>
            <div className="container">
                <h1 className="menuTitle" >Downloadable Materials</h1>
                <ul className="list-container">
                    <li className="list-val"><a className="resourcelink" href={pic} download>Study Guide</a></li>
                    <li className="list-val"><a className="resourcelink" href={pic1} download>UK Guide</a></li>
                    <li className="list-val"><a className="resourcelink" href={pic2} download>US Guide</a></li>
                </ul>
            </div>
    </div>
  )
}

export default Ielts