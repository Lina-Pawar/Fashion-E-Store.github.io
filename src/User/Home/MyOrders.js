//import Service from "../../components/Service";
import ReactDOM from 'react-dom';
var MyOrderitems=[];
function MyOrders(){
    window.scroll(0,0);
    var x=setInterval(function(){
    if(MyOrderitems.length>0){
        clearInterval(x);
        const MOItem=()=>{
            return(
                <ul>
                {MyOrderitems.map((item) => {
                    return (
                        <li className="cartbox" key={item.name}>
                            <p>{item.name} &nbsp; {item.size} &nbsp; {item.quantity}</p>
                        </li>
        )
        })}
        </ul>
        );
        };
        ReactDOM.render(<MOItem/>, document.getElementById("cart-items"));
    }
},500);
}
export default MyOrders;