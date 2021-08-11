import React, {useState} from "react";
import Navbar from "../../components/Navbar";
import FilterItems from "../FilterItems";
import "./Women.css";
import WomenFilList from "./WomenFilList";
function Women() {
    const [isFilterVisible, setFilterVisibility] = useState(false);
  const FilterSlide = isFilterVisible ? "showfilter" : "hidefilter";
  const slidearrow = isFilterVisible ? "fas fa-chevron-circle-left" : "fas fa-chevron-circle-right" ;
  let para = new URLSearchParams(window.location.search);
  let cattype=para.get("cat");
  var WomenCat="";
  if (cattype==="clothing"){
    WomenCat = "Women Clothing";
  }
  if (cattype==="accessories") {
    WomenCat = "Women Accessories";
  }
  if (cattype==="footwear") {
    WomenCat = "Women Footwear";
  } 
    return(
       <div className="womencontent">
        
        <div style={{backgroundColor:"#fca3b9",height:"8vh",width:"100%",position:"fixed",zIndex:"2"}}>
        <Navbar />
        </div>
        <div className="home">
        <div className="filter">
          <FilterItems />
          <WomenFilList />
        </div>
        <div className={FilterSlide}>
          <FilterItems />
          <WomenFilList />
        </div>
        <span className="farrow" onClick={() => setFilterVisibility((visible) => !visible)} >
            <i className={slidearrow}></i>
          </span>
          <div className="wcontent">
              <h1>{WomenCat}</h1>
          </div>
          </div>
        </div>
    )
}
export default Women;