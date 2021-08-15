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
        var itemprice=(item.price) * (item.quantity);
        return (
            <li className="cartbox" key={item.name}>
                <div className="cartimg">
                    <img src={item.image} alt="cartimage"/>
                </div>
                <div className="cartcontent">
                    <table>
                        <tr>
                        <th style={{textAlign:"left"}}><h1><b>{item.name}</b></h1></th>
                        </tr>
                        <tr>
                        <td style={{textAlign:"left"}}><h3>Quantity: <input type="number" style={{width:"50px"}} placeholder={item.quantity} min="0"/></h3>
                        <h3>Price: {itemprice}</h3></td>                            
                        </tr>
                        <tr  style={{textAlign:"right"}}>
                            <td>
                                <button className="cartbtn">Remove</button>&nbsp;&nbsp;&nbsp;
                                <Link to={linkto}><button className="cartbtn">View Details</button></Link>
                            </td>
                        </tr>
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