import Service from "../components/Service";
Service.orderDetails().then((resp) =>{
    if (resp.data.response !== 0 && resp.data.response !== undefined && resp.data.response !== null) {
        const values=resp.data.response;
        // eslint-disable-next-line
        const ordersdetails=values.map((ordersdetails)=>{
            OrderList.push(ordersdetails);             
            return ordersdetails;
          });
    } else {
        alert("Error");
    }
});
export const OrderList=[];