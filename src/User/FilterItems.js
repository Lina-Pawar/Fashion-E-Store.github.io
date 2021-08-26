import { useState } from "react";
import "./FilterItems.css";
import { clothing,accessories,footwear } from "./CategoryItems";
function FilterItems(){
  //
  const [isVisible1, setVisibility1] = useState(false);
  const [isVisible2, setVisibility2] = useState(false);
  const COLORS = isVisible1 ? "showcolor" : "hidecolor";
  const plusminus1 = isVisible1 ? "fas fa-minus-circle" : "fas fa-plus-circle" ;
  const SUBCATEGORIES = isVisible2 ? "showsc" : "hidesc";
  const plusminus2 = isVisible2 ? "fas fa-minus-circle" : "fas fa-plus-circle" ;
  //
  const[sclink,setscLink]=useState(" ");
  let para = new URLSearchParams(window.location.search);
  let category=para.get("category");
  let type=para.get("type");
  var Colorsavailable="";
  var Subcategories="";
  var myArr1=[];
  var myArr2=[];
  if(type==="clothing"){
    myArr1=[]
    myArr2=[]
    // eslint-disable-next-line
    clothing.map((each)=>{
      if(each.type===category){
        myArr1=each.colors.split(" ");
        myArr2=each.categories.split(" ");
      }
    });
    Colorsavailable=myArr1.map((colour)=>{
        return(
          <li key={colour}><input type="checkbox" name={colour} />&nbsp;&nbsp;{colour}</li>
      );
    });
    Subcategories=myArr2.map((subcategory)=>{
      return(
        <li key={subcategory}><input type="checkbox" name={subcategory} />&nbsp;&nbsp;{subcategory}</li>
    );
  });
  }
  else if(type==="accessories"){
    myArr1=[]
    myArr2=[]
    // eslint-disable-next-line
    accessories.map((each)=>{
      if(each.type===category){
        myArr1=each.colors.split(" ");
        myArr2=each.categories.split(" ");
      }
    });
    Colorsavailable=myArr1.map((colour)=>{
        return(
          <li key={colour}><input type="checkbox" name={colour} />&nbsp;&nbsp;{colour}</li>
      );
    });
    Subcategories=myArr2.map((subcategory)=>{
      return(
        <li key={subcategory}><input type="checkbox" name={subcategory} />&nbsp;&nbsp;{subcategory}</li>
    );
  });
  }
  else{
    myArr1=[]
    myArr2=[]
    // eslint-disable-next-line
    footwear.map((each)=>{
      if(each.type===category){
        myArr1=each.colors.split(" ");
        myArr2=each.categories.split(" ");
      }
    });
    Colorsavailable=myArr1.map((colour)=>{
        return(
          <li key={colour}><input type="checkbox" name={colour} />&nbsp;&nbsp;{colour}</li>
      );
    });
    Subcategories=myArr2.map((subcategory)=>{
      return(
        <li key={subcategory}><input type="checkbox" name={subcategory} />&nbsp;&nbsp;{subcategory}</li>
    );
  });
  }
  var sub=["Men clothing","Women clothing","Kids clothing",
  "Men accessories","Women accessories","Kids accessories",
  "Men footwear","Women footwear","Kids footwear"];
  const handler = function(e){
    var linkto =e.currentTarget.dataset.index;
    var nl = linkto.split(' '); 
    var scatlink="/category?category="+nl[0].toLowerCase()+"&type="+nl[1].toLowerCase();
    setscLink(scatlink);
};
  const Other = sub.map((x)=>{
    var s=category+" "+type;
    if(x.toLowerCase()!==s){
      return(
        <li key={x} data-index={x} onClick={handler}>&nbsp;&nbsp;<a href={sclink}>{x}</a></li>
      );
    }
    return '';
  });
  function Cost(){
    var cost=document.getElementById("slider").value;
    var prices=document.getElementsByClassName("productprice");
    var items=document.getElementsByClassName("list-item");
    // eslint-disable-next-line
    if(cost==3000){
      document.getElementById("pricefilter").innerHTML="max";
    }else{
      document.getElementById("pricefilter").innerHTML=cost;
    }
    for(var i=0;i<prices.length;i++){
      var c=parseInt(prices[i].innerHTML.slice(4,));
      if(c>cost){
        items[i].style.display="none";
      }else{
        items[i].style.display="block";
      }
    }
  };
    return(
        <div className="filteritems">
        <h2 style={{textAlign:"center",textDecoration:"none",paddingLeft:"0"}}>Filter <i className="fas fa-filter"></i></h2>
        <h3>Price Range</h3>
        <hr /><br/>
        <input type="range" min="100" max="3000" defaultValue="3000" step="10" id="slider" onChange={Cost}/>
        <br/><label>Rs. 100</label><label style={{float:"right"}} id="pricefilter">max</label>
        <br /><br />
        <h3>Colors&nbsp;<i className={plusminus1} onClick={() => setVisibility1((visible) => !visible)}></i></h3>
        <hr/>
        <br />
        <div className={COLORS}>
        <ul>{Colorsavailable}</ul>
        </div>
        <br />
        <h3>Categories&nbsp;<i className={plusminus2} onClick={() => setVisibility2((visible) => !visible)}></i></h3>
        <hr />
        <br />
        <div className={SUBCATEGORIES}>
        <ul>{Subcategories}</ul>
        </div>
        <br />
        <h3>Other categories</h3>
        <hr />
        <br />
        {Other}
        </div>
    )
}
export default FilterItems;