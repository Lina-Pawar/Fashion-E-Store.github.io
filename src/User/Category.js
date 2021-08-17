import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products/Products";
import FilterItems from "../User/FilterItems";
import Footer from "../User/Home/Footer";
import "./Category.css";

function Category(){
    let para = new URLSearchParams(window.location.search);
    let category=para.get("category");
    let type=para.get("type");
    const [isFilterVisible, setFilterVisibility] = useState(false);
    const FilterSlide = isFilterVisible ? "showfilter" : "hidefilter";
    const slidearrow = isFilterVisible ? "fas fa-chevron-circle-left" : "fas fa-chevron-circle-right" ;
    let theme="";
    if(category==="men"){
        theme="#6184c6";
    }
    else if(category==="women"){
        theme="#fca3b9";
    }
    else{
        theme="#fcd752";
    }
    window.scroll(0,0);
    return(
        <div className="page">
            <div style={{backgroundColor:theme,height:"8vh",width:"100%",position:"fixed",zIndex:"2"}}><Navbar/></div>
            <div className="home" style={{height:"auto"}}>
                <div className="filter" style={{height:"auto"}}>
                    <FilterItems/>
                </div>
                <div className={FilterSlide} style={{height:"auto"}}>
                    <FilterItems/>
                </div>
                <span className="farrow" onClick={() => setFilterVisibility((visible) => !visible)}>
                    <i className={slidearrow}></i>
                </span>
                <div className="categorycontent">
                    <Products category={category} type={type}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Category;