import "./menu.css"
import ets from "../images/ets.png";
import gregmat from "../images/gregmat.jpg";
import princeton from "../images/pr2.jpg";
// idp1 gregmat i3
export const MenuList1 = [
  {
    name: "IDP",
    image: ets,
    price: <button className='primary-btn'><a class="a1" href="https://www.ets.org/" target="blank">Click Here</a></button>
  },
  {
    name: "Gregmat",
    image: gregmat,
    price: <button className='primary-btn'><a class="a1" href="https://www.gregmat.com/" target="blank">Click Here</a></button>
  },
  {
    name: "IELTSONLINE",
    image: princeton,
    price: <button className='primary-btn'><a class="a1" href="https://ieltsonline.com/" target="blank">Click Here</a></button>
  },
  
];