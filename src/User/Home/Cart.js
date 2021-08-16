import { Link } from "react-router-dom";
import demo1 from "../../imgs/c1.png";
import demo2 from "../../imgs/c2.png";
import demo3 from "../../imgs/c3.png";
import demo4 from "../../imgs/c4.png";
import Navbar from "../../components/Navbar";
import "./Cart.css";
import { useState } from "react/cjs/react.development";
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
    function increase(){
        var x=document.getElementById("quantity");
        if(x.value<10){
          x.value=parseInt(x.value)+1;
        }
      }
      function decrease(){
        var x=document.getElementById("quantity");
        if(x.value>1){
          x.value=parseInt(x.value)-1;
        }
      }
      
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
                <h1 style={{textAlign:"center"}}>CART</h1>
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
                                <button style={{ width: "40px", height: "40px", fontSize: "16px" }} onClick={decrease}>-</button>
                                <input style={{width: "40px",height: "40px",fontSize: "16px",textAlign:"center"}} id="quantity" value={item.quantity} />
                                <button style={{ width: "40px", height: "40px", fontSize: "16px" }} onClick={increase}>+</button> <br />
                                Price: Rs. {item.price*item.quantity}
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
    </div>

    )
}
export default Cart;