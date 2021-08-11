import React, {useState} from "react";
import Navbar from "../../components/Navbar";
import FilterItems from "../FilterItems";
import "./Men.css";
import MenFilList from "./MenFilList";
function Men() {
    const [isFilterVisible, setFilterVisibility] = useState(false);
  const FilterSlide = isFilterVisible ? "showfilter" : "hidefilter";
  const slidearrow = isFilterVisible ? "fas fa-chevron-circle-left" : "fas fa-chevron-circle-right" ;
  let para = new URLSearchParams(window.location.search);
  let cattype=para.get("cat");
  var MenCat="";
  if (cattype==="clothing"){
    MenCat = "Men Clothing";
  }
  if (cattype==="accessories") {
    MenCat = "Men Accessories";
  }
  if (cattype==="footwear") {
    MenCat = "Men Footwear";
  } 
    return(
       <div className="mencontent">
        
        <div style={{backgroundColor:"#6184c6",height:"8vh",width:"100%",position:"fixed",zIndex:"2"}}>
        <Navbar />
        </div>
        <div className="home">
        <div className="filter">
          <FilterItems />
          <MenFilList />
        </div>
        <div className={FilterSlide}>
          <FilterItems />
          <MenFilList />
        </div>
        <span className="farrow" onClick={() => setFilterVisibility((visible) => !visible)} >
            <i className={slidearrow}></i>
          </span>
          <div className="mcontent">

              <h1>{MenCat}</h1>
          </div>
          </div>
        </div>
    )
}
export default Men;