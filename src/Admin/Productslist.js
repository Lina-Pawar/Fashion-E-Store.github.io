import Products from "../components/Products/Products";
import "./Productslist.css";
import Service from "../components/Service";
import {useState} from "react";

function Productslist(){
    const [isVisible, setVisibility] = useState(false);
    const displayAPBox = isVisible ? "showAPBox" : "hideAPBox";
    const [prodname, setprodname] = useState("");
    const [proddet, setproddet] = useState("");
    const [prodfilter, setprodfilter] = useState("");
    const [prodprice, setprodprice] = useState("");
    const [prodqty, setprodqty] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
          var product = {prodname:prodname,proddet:proddet,prodfilter:prodfilter,prodprice:prodprice,prodqty:prodqty,pic1:document.getElementById("image1").value,pic2:document.getElementById("image2").value};
          Service.addproduct(product).then((resp) => {
            if (resp.data.response !== 0 && resp.data.response !== undefined && resp.data.response !== null) {
              alert("Product Added successfully!");
              setVisibility((visible) => !visible);
              document.getElementById("prodname").value='';
              document.getElementById("proddet").value='';
              document.getElementById("prodfilter").value='';
              document.getElementById("prodprice").value='';
              document.getElementById("prodqty").value='';
              document.getElementById("image1").value='';
              document.getElementById("image2").value='';
            } else {
              alert("Some Error Occurred!!");
            };
          });
      };
    return(
        <div style={{marginTop:"8vh"}}>
            <div className="adminprodhead">
                <div style={{width:"70%"}}><h2 style={{textAlign:"center"}}>PRODUCTS</h2></div>
                <div style={{width:"30%"}}>
                <button className="viewbtn fas fa-plus" onClick={() => setVisibility((visible) => !visible)} style={{width:"150px"}}> Add product</button>
                </div>
            </div>
            <div style={{paddingTop:"6vh"}}>
                <div style={{display:"flex"}}>
                <span style={{display:"block",backgroundColor:"yellow",width:"20px",height:"20px",margin:"15px"}}></span>
                <span style={{margin:"15px 0"}}>Low stock</span>
                <span style={{display:"block",backgroundColor:"red",width:"20px",height:"20px",margin:"15px"}}></span>
                <span style={{margin:"15px 0"}}>Out of stock</span>
                </div>
                <Products n={185}/>
            </div>
            <div className={displayAPBox}>
                <span className="aptitle"><p>ADD PRODUCT</p></span>
                <span className="closeAP" onClick={()=> setVisibility((visible) => !visible)}><i className="fas fa-times"></i></span>
                <form onSubmit={handleSubmit}>
                    <div className="apForm">
                        <div className="apFormImg">
                            <input type="text" id="image1" placeholder="Paste the location of you image file" required/>
                        </div>
                        <div className="apFormImg">
                            <input type="text" id="image2" placeholder="Paste the location of you image file"/>
                        </div>
                        <div className="apFormInput">
                            <input placeholder="Enter Product name" id="prodname" onChange={(e) => setprodname(e.target.value)} required/><br/><br/>
                            <textarea placeholder="Enter Product details" id="proddet" onChange={(e) => setproddet(e.target.value)} required></textarea><br/><br/>
                            <input placeholder="Enter Filter Options" id="prodfilter" onChange={(e) => setprodfilter(e.target.value)} required/><br/><br/>
                            <input placeholder="Enter Price" id="prodprice" onChange={(e) => setprodprice(e.target.value)} style={{width:"45%"}} required/>&nbsp;&nbsp;&nbsp;
                            <input type="number" min="1" max="100" placeholder="Enter Quantity" id="prodqty" onChange={(e) => setprodqty(e.target.value)} style={{width:"44%"}} required/><br/><br/>
                            <button type="submit">Add Product</button>
                        </div>
                    </div>        
                </form>
                
            </div>
            
        </div>
    );
}
export default Productslist;