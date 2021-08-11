import React, {useState} from "react";
import Navbar from "../../components/Navbar";
import FilterItems from "../FilterItems";
import "./Kids.css";
import KidsFilList from "./KidsFilList";
function Kids() {
    const [isFilterVisible, setFilterVisibility] = useState(false);
  const FilterSlide = isFilterVisible ? "showfilter" : "hidefilter";
  const slidearrow = isFilterVisible ? "fas fa-chevron-circle-left" : "fas fa-chevron-circle-right" ;
  let para = new URLSearchParams(window.location.search);
  let cattype=para.get("cat");
  var KidsCat="";
  if (cattype==="clothing"){
    KidsCat = "Kids Clothing";
  }
  if (cattype==="accessories") {
    KidsCat = "Kids Accessories";
  }
  if (cattype==="footwear") {
    KidsCat = "Kids Footwear";
  } 
    return(
       <div className="kidscontent">
        
        <div style={{backgroundColor:"#fcd752",height:"8vh",width:"100%",position:"fixed",zIndex:"2"}}>
        <Navbar />
        </div>
        <div className="home">
        <div className="filter">
          <FilterItems />
          <KidsFilList />
        </div>
        <div className={FilterSlide}>
          <FilterItems />
          <KidsFilList />
        </div>
        <span className="farrow" onClick={() => setFilterVisibility((visible) => !visible)} >
            <i className={slidearrow}></i>
          </span>
          <div className="kcontent">
              <h1>{KidsCat}</h1>
          </div>
          </div>
        </div>
    )
}
export default Kids;