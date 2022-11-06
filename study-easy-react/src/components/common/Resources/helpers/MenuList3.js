
import ets from "../images/ets.png";
import gregmat from "../images/gregmat.jpg";
import princeton from "../images/pr2.jpg";
// gregmat pr2 ets
export const MenuList = [
  {
    name: "ETS",
    image: ets,
    price: <button className='primary-btn' color="white"><a href="https://www.ets.org/" target="blank" >Click Here</a></button>
  },
  {
    name: "Gregmat",
    image: gregmat,
    price: <button className='primary-btn'><a href="https://www.gregmat.com/" target="blank">Click Here</a></button>
  },
  {
    name: "Princeton Review",
    image: princeton,
    price: <button className='primary-btn'><a href="https://www.princetonreview.com/" target="blank">Click Here</a></button>
  },
  
];