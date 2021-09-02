import Products from "../components/Products/Products";
import "./Productslist.css";
import Service from "../components/Service";
import {useState} from "react";
//
import image1 from "../imgs/category/kids.JPG";
import image2 from "../imgs/category/menacc.JPG";
//
import PropTypes from "prop-types";
function Productslist({ setToken }){
    const [isVisible, setVisibility] = useState(false);
    const displayAPBox = isVisible ? "showAPBox" : "hideAPBox";
    //
    const [prodname, setprodname] = useState("");
  const [proddet, setproddet] = useState("");
  const [prodfilter, setprodfilter] = useState("");
  const [prodprice, setprodprice] = useState("");
  const [prodqty, setprodqty] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
          var product = {prodname:prodname,proddet:proddet,prodfilter:prodfilter,prodprice:prodprice,prodqty:prodqty};
    
          Service.addproduct(product).then((resp) => {
           
             
                if (
                  resp.data.response !== 0 &&
                  resp.data.response !== undefined &&
                  resp.data.response !== null
                ) {
                  window.localStorage.setItem("fashion-e-store-user",product.prodname);
                  setToken(resp.data.response);
                  alert("Product Added successfully!")
                } else {
                  alert("Some Error Occurred!!");
                };
        
          });
      };
    //
    return(
        <div style={{marginTop:"8vh"}}>
            <div className="adminprodhead">
                <div style={{width:"70%"}}><h2 style={{textAlign:"center"}}>PRODUCTS</h2></div>
                <div style={{width:"30%"}}><button className="viewbtn" onClick={() => setVisibility((visible) => !visible)}>Add New Product</button></div>
            </div>
            <div style={{paddingTop:"6vh"}}>
            <Products n={180}/>
            </div>
            <div className={displayAPBox}>
                <span className="aptitle"><p>ADD PRODUCT</p></span>
                <span className="closeAP" onClick={()=> setVisibility((visible) => !visible)}><i className="fas fa-times"></i></span>
                <form onSubmit={handleSubmit}>
                    <div className="apForm">
                        <div className="apFormImg">
                            <img src={image1} alt="pic1" /><br />
                            <button>Add Image 1</button>
                        </div>
                        <div className="apFormImg">
                            <img src={image2} alt="pic2" /><br />
                            <button>Add Image 2</button>
                        </div>
                        <div className="apFormInput">
                            <input placeholder="Enter Product name" id="prodname" onChange={(e) => setprodname(e.target.value)}></input><br /><br />
                            <textarea placeholder="Enter Product details" id="proddet" onChange={(e) => setproddet(e.target.value)}></textarea><br /><br />
                            <input placeholder="Enter Filter Options" id="prodfilter" onChange={(e) => setprodfilter(e.target.value)}></input><br /><br />
                            <input placeholder="Enter Price" id="prodprice" onChange={(e) => setprodprice(e.target.value)} style={{width:"45%"}}></input>&nbsp;&nbsp;&nbsp;
                            <input placeholder="Enter Quantity" id="prodqty" onChange={(e) => setprodqty(e.target.value)} style={{width:"44%"}}></input><br /><br />
                            <button type="submit">Add Product</button>
                        </div>
                    </div>        
                </form>
                
            </div>
            
        </div>
    );
}
Productslist.propTypes = {
    setToken: PropTypes.func.isRequired,
  };
export default Productslist;