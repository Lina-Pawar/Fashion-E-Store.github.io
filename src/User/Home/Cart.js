import image from "../../imgs/logo.png";
import Navbar from "../../components/Navbar";
import Service from "../../components/Service";
import ReactDOM from 'react-dom';
import "./Cart.css";

var Cartitems=[];
function Cart(){
    window.scroll(0,0);
    var x=setInterval(function(){
    if(Cartitems.length>0){
        clearInterval(x);
        const CartItem=()=>{
        return(
            <ul>
            {Cartitems.map((item) => {
            var linkto = "/product?name="+item.name;
            var cartimg='data:image/JPEG;base64,'+item.photo;
            return (
            <li className="cartbox" key={item.name}>
                <div className="cartboxcontent">
                    <table width="100%">
                    <tbody>
                        <tr>
                            <td rowSpan="4" width="40%" className="cartimg"><img src={cartimg} alt="cartimage"/></td>
                        </tr>                   
                        <tr>
                            <th style={{fontSize:"18px"}} colSpan="3">{item.name} &nbsp; (Size: {item.size})</th>
                        </tr>
                        <tr>
                            <td colSpan="3">Quantity: 
                                &nbsp;&nbsp;
                                <button className="cartquantity" onClick={()=>qty('-',item.name,cartimg)}>-</button>
                                <input style={{textAlign:"center",backgroundColor:"white",color:"black"}} className="cartquantity" id={item.name} defaultValue={item.quantity} disabled/>
                                <button className="cartquantity" onClick={()=>qty('+',item.name,cartimg)}>+</button>
                            </td>
                        </tr>
                        <tr>
                            <td width="60%">Price: Rs. <span id={cartimg}>{Number.parseFloat(item.price*item.quantity).toFixed(2)}</span></td>
                            <td style={{fontSize:"18px"}} width="10%"><span className="fas fa-trash" onClick={()=>deletecart(item.name)}>&nbsp;&nbsp;</span></td>
                            <td width="10%"><button className="cartbtn" onClick={()=>window.location.href=linkto}>View Details</button></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </li>
        )
        })}
        </ul>
        );
        };
        ReactDOM.render(<CartItem/>, document.getElementById("cart-items"));
        for(const key in Cartitems){
            FinalPrice.push({name:Cartitems[key].name,price:Cartitems[key].price*Cartitems[key].quantity})
        }
        tp=FinalPrice.reduce((cnt,o)=>{ return cnt + o.price; }, 0);
        gst= (tp*18)/100;
        tot=tp + gst;
        tp=Number.parseFloat(tp).toFixed(2);
        gst=Number.parseFloat(gst).toFixed(2);
        tot=Number.parseFloat(tot).toFixed(2);
        document.getElementById("fp").innerHTML=tp;
        document.getElementById("gstax").innerHTML=gst;
        document.getElementById("totalp1").style.fontWeight="bold";
        document.getElementById("totalp1").innerHTML=tot;
        options['amount']=tot*100;
    }
    },500);
    setTimeout(function(){
        clearInterval(x);
        if(document.getElementsByClassName("cartbox")[0]===undefined){
            document.getElementById("cart-items").innerHTML="<h2 align='center'>Cart is empty.<h2>";
        }
    }, 4000);
    const data={uname:window.localStorage.getItem("fashion-e-store-user")};
    Service.getCart(data).then((resp) =>{
        Cartitems=[];
        if (resp.data.response !== 0 && resp.data.response !== undefined && resp.data.response !== null) {
            const values=resp.data.response;
            // eslint-disable-next-line
            const cartitems=values.map((cartitems)=>{
                Cartitems.push({photo:cartitems['photo'],name:cartitems['name'],size:cartitems['size'],quantity:cartitems['quantity'],price:cartitems['price']});
                return cartitems;
            });
        }else{
            alert("Error");
        }
    });  
    const FinalPrice=[];
    var tp,gst,tot=0;
    
    function qty(change,pname,pphoto){
        var x=document.getElementById(pname);
        var z=Cartitems.findIndex(x=>x.name===pname);
        var y=Cartitems[z].price;
        if(x.value<10 && change==='+'){
          x.value=parseInt(x.value)+1;
        }
        else if(x.value>1 && change==='-'){
          x.value=parseInt(x.value)-1;
        }
        var st= x.value*y;
        document.getElementById(pphoto).innerHTML=Number.parseFloat(st).toFixed(2);
        const index=FinalPrice.findIndex(x=>x.name===pname);
        FinalPrice[index].price=st;
        tp=FinalPrice.reduce((cnt,o)=>{ return cnt + o.price; }, 0);
        gst= (tp*18)/100;
        tot = tp + gst;
        tp=Number.parseFloat(tp).toFixed(2);
        gst=Number.parseFloat(gst).toFixed(2);
        tot=Number.parseFloat(tot).toFixed(2);
        document.getElementById("fp").innerHTML=tp;
        document.getElementById("gstax").innerHTML=gst;
        document.getElementById("totalp1").style.fontWeight="bold";
        document.getElementById("totalp1").innerHTML=tot;
        options['amount']=tot*100;
        const data={username:window.localStorage.getItem("fashion-e-store-user"),product:pname,quantity:x.value};
        Service.updateQty(data).then((resp) =>{
            if (resp.data.response !== 0 && resp.data.response !== undefined && resp.data.response !== null) {
            }
            });
      }
    function deletecart(pname){
        const data={uname:window.localStorage.getItem("fashion-e-store-user"),product:pname};
        Service.DeleteCart(data).then((resp) =>{
            if (resp.data.response !== 0 && resp.data.response !== undefined && resp.data.response !== null) {
                alert("Item removed!");
                window.location.reload();
            }
        });
    }
    var options = {
        "key": "rzp_test_dO928nWzZAVW6J", // Enter the Key ID generated from the Dashboard
        "amount": tot*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "StyleZone-Fashion Store",
        "description": "Test Transaction",
        "image": image,
        "handler": function (response){
            // eslint-disable-next-line
            const data={username:window.localStorage.getItem("fashion-e-store-user"),address:document.getElementById("address").value,pincode:document.getElementById("pincode").value};
            Service.Order(data).then((resp) =>{
                if (resp.data.response !== 0 && resp.data.response !== undefined && resp.data.response !== null) {
                    // eslint-disable-next-line
                    alert("Order placed successfully!\n"+"Payment id:"+response.razorpay_payment_id);
                    window.location.href="/home";
                }else{
                    alert("Retry!");
                }
            });
           
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
            <div style={{paddingTop:"9vh",backgroundColor:"white",height:"auto",paddingBottom:"3vh"}} className="cartlists" id="cart-items">
                <div className="spinner"></div>
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
        rzp1.open();
        e.preventDefault();
    }}>
    <textarea placeholder="Address" minLength="15" required id="address"></textarea>
    <br/>
    <input id="pincode" type="text" pattern="[0-9]*" minLength="6" maxLength="6" placeholder="6-digit Pincode" required/>
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