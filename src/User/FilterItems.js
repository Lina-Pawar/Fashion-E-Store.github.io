import "./FilterItems.css";
import { clothing,accessories,footwear } from "./CategoryItems";
function FilterItems(){
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
  const Other = sub.map((x)=>{
    var s=category+" "+type;
    if(x.toLowerCase()!==s){
      return(
        <li key={x}>&nbsp;&nbsp;<a href="/">{x}</a></li>
      );
    }
  });
    return(
        <div className="filteritems">
        <h2 style={{textAlign:"center",textDecoration:"none",paddingLeft:"0"}}>Filter <i className="fas fa-filter"></i></h2>
        <h3>Price Range</h3>
        <hr /><br/>
        <input type="range" min="100" max="3000" defaultValue="100" step="10" id="slider"/>
        <br/><label>Rs.100</label><label style={{float:"right"}}>max</label>
        <h3>Colors&nbsp;<i className="fas fa-plus-circle"></i></h3>
        <hr/>
        <br />
        <ul id="colors">{Colorsavailable}</ul>
        <br />
        <h3>Categories&nbsp;<i className="fas fa-plus-circle"></i></h3>
        <hr />
        <br />
        <ul id="subcategories">{Subcategories}</ul>
        <h3>Other categories</h3>
        <hr />
        <br />
        {Other}
        </div>
    )
}
export default FilterItems;