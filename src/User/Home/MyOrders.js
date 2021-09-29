import ReactDOM from 'react-dom';
import { MyOrdersList } from './MyOrdersList';
import './MyOrders.css';
import Navbar from '../../components/Navbar';

function MyOrders(){
    window.scroll(0,0);
    var x=setInterval(function(){
    if(MyOrdersList.length>0){
        clearInterval(x);
        const MOItem=()=>{
            return(
                <ul>
                {MyOrdersList.map((order) => {
                return (
                <ul className="ordergroup">
                <h3>Order id: {order[0].o_id}</h3>
                <i style={{color:"rgb(13, 199, 13)"}}>{order[0].status==="Yes"?"Delivered":""}</i>
                <i style={{color:"blue"}}>{order[0].status==="Yes"?"":"In process"}</i>
                <span style={{float:"right",color:"gray"}}>{order[0].date}</span> <br/> <hr/><br/>
                {order.map((item) => {
                    return (
                        <div>
                        <li key={item.pname}>
                            <p>{item.pname} &nbsp;(Size:{item.size})  
                            <span id="rightqp"><label>x {item.quantity}</label>&nbsp;&nbsp;Rs. {item.quantity*item.price}</span>
                            </p>
                        </li>
                        </div>
                    );
                    })}
                    </ul>
                );
                })}
                </ul>
            );
        };
        ReactDOM.render(<MOItem/>, document.getElementById("myorders"));
        }
    },500);
    return(
        <div style={{display:"block"}}>
            <div style={{background:
            "-webkit-gradient(linear,left top, right top,from(#d4af37),color-stop(30%,#f9f095),color-stop(40%,#d4af37),color-stop(80%,#f9f095),color-stop(90%,#d4af37))",
          height: "8vh",
          width: "100%",
          position: "fixed",
          zIndex: "10",}}>
            <Navbar />
            </div>
            <div id="myorders">
            <div className="spinner"></div>
            </div>
        </div>
        
    );
}
export default MyOrders;