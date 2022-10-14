
import ets from "../assets/ets.png";
import gregmat from "../assets/gregmat.jpg";
import princeton from "../assets/pr2.jpg";

export const MenuList = [
  {
    name: "ETS",
    image: ets,
    price: <button className='knowMore-button'><a href="https://www.ets.org/" target="blank">Click Here</a></button>
  },
  {
    name: "Gregmat",
    image: gregmat,
    price: <button className='knowMore-button'><a href="https://www.gregmat.com/" target="blank">Click Here</a></button>
  },
  {
    name: "Princeton Review",
    image: princeton,
    price: <button className='knowMore-button'><a href="https://www.princetonreview.com/" target="blank">Click Here</a></button>
  },
  
];