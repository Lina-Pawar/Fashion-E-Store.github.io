import { Link } from "react-router-dom";
import image from "../../imgs/logo.png";
import Navbar from "../../components/Navbar";
import "./Cart.css";
import {Cartitems} from "../../components/Products/ProductDetail";

function Cart(){
    window.scroll(0,0);
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
            <Navbar/>
            </div>
            <div className="cartcontent">
            <div style={{paddingTop:"9vh",backgroundColor:"white",height:"auto",paddingBottom:"3vh"}} className="cartlists">
            <ul className="">
            {Cartitems.map((item) => {
            var linkto = "/product?name="+item.name;
            return (
            <li className="cartbox" key={item.name}>
                <div className="cartboxcontent">
                    <table width="100%">
                    <tbody>
                        <tr>
                            <td rowspan="4" width="40%" className="cartimg"><img src={item.photo} alt="cartimage"/></td>
                        </tr>                   
                        <tr>
                            <th style={{fontSize:"18px"}} colspan="3">{item.name} &nbsp; (Size: {item.size})</th>
                        </tr>
                        <tr>
                            <td colspan="3">Quantity: 
                                &nbsp;&nbsp;
                                <button className="cartquantity" onClick={()=>decrease(item.name,item.photo)}>-</button>
                                <input style={{textAlign:"center"}} className="cartquantity" id={item.name} defaultValue={item.quantity} />
                                <button className="cartquantity" onClick={()=>increase(item.name,item.photo)}>+</button>
                            </td>
                        </tr>
                        <tr>
                            <td width="60%">Price: Rs. <span id={item.photo}>{item.price*item.quantity}</span></td>
                            <td style={{fontSize:"18px"}} width="10%"><span className="fas fa-trash">&nbsp;&nbsp;</span></td>
                            <td width="10%"><Link to={linkto}><button className="cartbtn">View Details</button></Link></td>
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
    <hr/>
    <br/>
    <table style={{width:"80%",marginLeft:"10%"}}>
        <tr>
            <td style={{textAlign:"left"}}>Price:</td>
            <td style={{textAlign:"right"}} id="fp">{tp}</td>
        </tr>
        <tr>
            <td style={{textAlign:"left"}}>GST(18%):</td>
            <td style={{textAlign:"right"}} id="gstax">{gst}</td>
        </tr>
        <tr>
            <td style={{textAlign:"left"}}>Total:</td>
            <td style={{textAlign:"right"}} id="totalp1"><b>Rs. {tot}</b></td>
        </tr>
    </table>
    <br/>
    <hr/>
    <br/>
    <form onSubmit={function(e){
        rzp1.open();
        e.preventDefault();
    }}>
    <textarea placeholder="Address" minlength="15" required></textarea>
    <br/>
    <input name="pincode" type="text" pattern="[0-9]*" minlength="6" maxlength="6" placeholder="6-digit Pincode" required/>
    <br/><br/>
    <button className="cartbtn2" id="rzp-button1" type="submit">Pay Now</button></form>
    <br/>
    <hr/>
    </div>
    </div>
    </div>

    );
    
}
export default Cart;