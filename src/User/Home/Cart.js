import { Link } from "react-router-dom";
import image from "../../imgs/logo.png";
import Navbar from "../../components/Navbar";
import "./Cart.css";
import {Cartitems} from "../../components/Products/ProductDetail";

function Cart(){
    const FinalPrice=[]
    for(const key in Cartitems){
        FinalPrice.push({name:Cartitems[key].name,price:Cartitems[key].price*Cartitems[key].quantity})
    }
    var tp=FinalPrice.reduce((cnt,o)=>{ return cnt + o.price; }, 0);
    var gst= (tp*18)/100;
    var tot=tp + gst;
    function increase(pname,pphoto){
        var x=document.getElementById(pname);
        var z=Cartitems.findIndex(x=>x.name===pname);
        var y=Cartitems[z].price;
        if(x.value<10){
          x.value=parseInt(x.value)+1;
          var st= x.value*y;
          document.getElementById(pphoto).innerHTML=st;
          const index=FinalPrice.findIndex(x=>x.name===pname);
          FinalPrice[index].price=st;
          tp=FinalPrice.reduce((cnt,o)=>{ return cnt + o.price; }, 0);
          gst= (tp*18)/100;
          tot = tp + gst;
          document.getElementById("fp").innerHTML=tp;
          document.getElementById("gstax").innerHTML=gst;
          document.getElementById("totalp1").innerHTML=tot;
          document.getElementById("totalp").innerHTML=tot;
        }
      }
      function decrease(pname,pphoto){
        var x=document.getElementById(pname);
        var z=Cartitems.findIndex(x=>x.name===pname);
        var y=Cartitems[z].price;
        if(x.value>1){
          x.value=parseInt(x.value)-1;
          var st= x.value*y;
          document.getElementById(pphoto).innerHTML=st;
          const index=FinalPrice.findIndex(x=>x.name===pname);
          FinalPrice[index].price=st;
          tp=FinalPrice.reduce((cnt,o)=>{ return cnt + o.price; }, 0);
          gst= (tp*18)/100;
          tot = tp + gst;
          document.getElementById("fp").innerHTML=tp;
          document.getElementById("gstax").innerHTML=gst;
          document.getElementById("totalp1").innerHTML=tot;
          document.getElementById("totalp").innerHTML=tot;
        }
      }
    //   payment
    
    //
      
    // var tp=FinalPrice.reduce((cnt,o)=>{ return cnt + o.price; }, 0);
    // var gst= (tp*18)/100;
    // var tot = tp + gst;

    var options = {
        "key": "rzp_test_dO928nWzZAVW6J", // Enter the Key ID generated from the Dashboard
        "amount": tot*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "StyleZone-Fashion Store",
        "description": "Test Transaction",
        "image": image,
        "handler": function (response){
            alert("Payment Successful!\n"+"Payment id:"+response.razorpay_payment_id);
            window.location.href="/home";
        },
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9999999999"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response){
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
    });
      
    return(
        <div>
            <div style={{background:
            "-webkit-gradient(linear,left top, right top,from(#d4af37),color-stop(30%,#f9f095),color-stop(40%,#d4af37),color-stop(80%,#f9f095),color-stop(90%,#d4af37))",
          height: "8vh",
          width: "100%",
          position: "fixed",
          zIndex: "10",}}>
            <Navbar />
            </div>
            <div className="cartcontent">
            <div style={{paddingTop:"9vh",backgroundColor:"white",height:"auto",paddingBottom:"3vh"}} className="cartlists">
            <h1 style={{textAlign:"center"}}>Cart</h1>
            <ul className="">
            {Cartitems.map((item) => {
            var linkto = "/product?name="+item.name;
            return (
            <li className="cartbox" key={item.name}>
                <div className="cartimg">
                    <img src={item.photo} alt="cartimage"/>
                </div>
                <div className="cartboxcontent">
                    <table>
                    <colgroup>
                            <col style={{width:"6%"}}/>
                            <col style={{width:"3%"}}/>
                    </colgroup>
                    <tbody>
                   
                        <tr>
                            <th style={{fontSize:"18px"}}>{item.name} &nbsp; (Size: L)</th>
                            <th><button className="cartbtn">Remove</button></th>
                        </tr>
                        <tr>
                            <td>Quantity: 
                                &nbsp;&nbsp;
                                <button style={{ width: "40px", height: "40px", fontSize: "16px" }} onClick={()=>decrease(item.name,item.photo)}>-</button>
                                <input style={{width: "40px",height: "40px",fontSize: "16px",textAlign:"center"}} id={item.name} defaultValue={item.quantity}  />
                                <button style={{ width: "40px", height: "40px", fontSize: "16px" }} onClick={()=>increase(item.name,item.photo)}>+</button> <br />
                                Price: Rs. <span id={item.photo}>{item.price*item.quantity}</span>
                            </td>
                            <td>
                                <Link to={linkto}><button className="cartbtn">View Details</button></Link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </li>
        )
    })}
    </ul>
    </div>
    <div className="placeorder">
    <button className="cartbtn2">Save Changes</button>
    <br /><br />
    <hr />
    <br />
    <textarea placeholder="Address"></textarea>
    <br />
    <input type="number" placeholder="Pincode" min="100000" max="999999"></input>
    <br /><br />
    <hr />
    <br />
    <table style={{width:"80%",marginLeft:"10%"}}>
        <tr>
            <td style={{textAlign:"left"}}><h3>Price:</h3></td>
            <td style={{textAlign:"right"}}><h3 id="fp">{tp}</h3></td>
        </tr>
        <tr>
            <td style={{textAlign:"left",paddingBottom:"8px",borderBottom:"2px solid white",borderStyle:"dotted"}}><h3>GST(18%):</h3></td>
            <td style={{textAlign:"right",paddingBottom:"8px",borderBottom:"2px solid white",borderStyle:"dotted"}}><h3 id="gstax">{gst}</h3></td>
        </tr>
        <tr>
            <td style={{textAlign:"left"}}><h3>Total:</h3></td>
            <td style={{textAlign:"right"}}><h2 id="totalp1">{tot}</h2></td>
        </tr>
    </table>
    <br />
    <hr />
    <br />
    <button className="cartbtn2" id="rzp-button1" onClick={function(e){
        rzp1.open();
        e.preventDefault();
    }}>Pay Now Rs. <span id="totalp">{tot} </span> </button>
    </div>
    </div>
    </div>

    );
    
}
export default Cart;