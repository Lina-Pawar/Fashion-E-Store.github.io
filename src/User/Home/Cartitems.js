import Service from "../../components/Service";

Service.getCart().then((resp) =>{
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
export const Cartitems=[]