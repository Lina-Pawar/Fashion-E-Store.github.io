import { Link } from "react-router-dom";
import demo1 from "../../imgs/c1.png";
import demo2 from "../../imgs/c2.png";
import demo3 from "../../imgs/c3.png";
import demo4 from "../../imgs/c4.png";
import Navbar from "../../components/Navbar";
import "./Cart.css";
function Cart(){
    const CartItem = [
        {
            id:0,
            image:demo1,
            image2:demo2,
            name:'Men Shirt',
            price:500,
            size: "S M L XL",
            itemdet: "Loren Epsum sdasd sadas asdasd adasd",
            quantity:3
        },
        {
            id:1,
            image:demo2,
            image2:demo1,
            name:'Men T-Shirt',
            price:300,
            size: "S M L XL",
            itemdet: "Loren Epsum sdasd sadas asdasd adasd",
            quantity:1
        },
        {
            id:2,
            image:demo3,
            image2:demo2,
            name:'Men Shoe',
            price:200,
            size: "S M L XL",
            itemdet: "Loren Epsum sdasd sadas asdasd adasd",
            quantity:2
        },
        {
            id:3,
            image:demo4,
            image2:demo2,
            name:'Women Shoe',
            price:600,
            size: "S M L XL",
            itemdet: "Loren Epsum sdasd sadas asdasd adasd",
            quantity:2
        },
    ]
    const FinalPrice=[]
for(const key in CartItem){
  FinalPrice.push({id:CartItem[key].id,price:CartItem[key].price*CartItem[key].quantity})
}
    function increase(pid,pname){
        var x=document.getElementById(pid);
        var y=CartItem[pid].price;
        if(x.value<10){
          x.value=parseInt(x.value)+1;
          var st= x.value*y;
          document.getElementById(pname).innerHTML=st;
          const index=FinalPrice.findIndex(x=>x.id===pid);
            FinalPrice[index].price=st;
            document.getElementById("totalp").innerHTML=FinalPrice.reduce((cnt,o)=>{ return cnt + o.price; }, 0);;
        }
      }
      function decrease(pid,pname){
        var x=document.getElementById(pid);
        var y=CartItem[pid].price;
        if(x.value>1){
          x.value=parseInt(x.value)-1;
          var st= x.value*y;
          document.getElementById(pname).innerHTML=st;
          const index=FinalPrice.findIndex(x=>x.id===pid);
          FinalPrice[index].price=st;
          document.getElementById("totalp").innerHTML=FinalPrice.reduce((cnt,o)=>{ return cnt + o.price; }, 0);
        }
      }
    //   payment
    
    var options = {
        "key": "rzp_test_dO928nWzZAVW6J", // Enter the Key ID generated from the Dashboard
        "amount": FinalPrice.reduce((cnt,o)=>{ return cnt + o.price; }, 0)*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Style Zone-Fashion E-Store",
        "description": "Test Transaction",
        "image": demo1,
        "handler": function (response){
            alert(response.razorpay_payment_id);
            alert("Payment Successful!")
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
    //
      
      
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
            <div style={{paddingTop:"9vh",backgroundColor:"white",height:"auto",paddingBottom:"3vh"}}>
                <h2 style={{textAlign:"center"}}>Cart</h2>
        <ul className="">
      {CartItem.map((item) => {
        var linkto = "/product?name="+item.name;
        return (
            <li className="cartbox" key={item.name}>
                <div className="cartimg">
                    <img src={item.image} alt="cartimage"/>
                </div>
                <div className="cartcontent">
                    <table>
                    <tbody>
                    <colgroup>
                            <col style={{width:"65%"}}/>
                            <col style={{width:"35%"}}/>
                    </colgroup>
                        <tr>
                            <th style={{fontSize:"20px"}}>{item.name}</th>
                            <th><button className="cartbtn">Remove</button></th>
                        </tr>
                        <tr>
                            <td>Quantity: 
                                &nbsp;&nbsp;
                                <button style={{ width: "40px", height: "40px", fontSize: "16px" }} onClick={()=>decrease(item.id,item.name)}>-</button>
                                <input style={{width: "40px",height: "40px",fontSize: "16px",textAlign:"center"}} id={item.id} value={item.quantity}  />
                                <button style={{ width: "40px", height: "40px", fontSize: "16px" }} onClick={()=>increase(item.id,item.name)}>+</button> <br />
                                Price: Rs. <span id={item.name}>{item.price*item.quantity}</span>
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
    <button className="cartbtn" id="rzp-button1" onClick={function(e){
        rzp1.open();
        e.preventDefault();
    }}>Pay Now Rs. <span id="totalp">{FinalPrice.reduce((cnt,o)=>{ return cnt + o.price; }, 0)}</span> </button>
    </div>
    </div>

    )
}
export default Cart;