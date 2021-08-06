import React from 'react';
import Slider from 'infinite-react-carousel';
import "./Carousel.css";
import c1 from "../../imgs/c1.png";
import c2 from "../../imgs/c2.png";
import c3 from "../../imgs/c3.png";
import c4 from "../../imgs/c4.png";
const Carousel = () => (
  <div className="scroll" style={{textAlign:"center"}}>
  <Slider dots infiniteLoop autoplay>
    <div>
    <img src={c1} className="carimg" alt="offers"/>
    </div>
    <div>
    <img src={c2} className="carimg" alt="offers"/>
    </div>
    <div>
    <img src={c3} className="carimg" alt="offers"/>
    </div>
    <div>
    <img src={c4} className="carimg" alt="offers"/>
    </div>
  </Slider>
  </div>
);
export default Carousel;