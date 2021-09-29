import ReactDOM from 'react-dom';
import { MyOrdersList } from './MyOrdersList';

function MyOrders(){
    window.scroll(0,0);
    var x=setInterval(function(){
    if(MyOrdersList.length>0){
        clearInterval(x);
        const MOItem=()=>{
            return(
                <ul>
                {MyOrdersList.map((item) => {
                    return (
                        <li className="cartbox" key={item.date}>
                            <p>{item.name} &nbsp; {item.size} &nbsp; {item.quantity}</p>
                        </li>
        )
        })}
        </ul>
        );
        };
        ReactDOM.render(<MOItem/>, document.getElementById("myorders"));
        }
    },500);
    return(
        <div id="myorders">
            <div className="spinner"></div>
        </div>
    );
}
export default MyOrders;