import Service from "../../components/Service";
const data={uname:window.localStorage.getItem("fashion-e-store-user")};
Service.getMyOrders(data).then((resp) =>{
      if (resp.data.response !== 0 && resp.data.response !== undefined && resp.data.response !== null) {
        const values=resp.data.response;
        // eslint-disable-next-line
        const myorderitems=values.map((myorderitems)=>{
            MyOrdersList.push(myorderitems);
            return myorderitems;
          });
      }else{
        alert("Error");
      }
  });  
export const MyOrdersList=[];