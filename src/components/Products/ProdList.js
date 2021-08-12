import Service from "../Service";
Service.products().then((resp) =>{
    if (resp.data.response !== 0 && resp.data.response !== undefined && resp.data.response !== null) {
        const values=resp.data.response;
        // eslint-disable-next-line
        const productsdetails=values.map((productsdetails)=>{
            ProdList.push(productsdetails);             
            return productsdetails;
          });
    } else {
        alert("Error");
    }
});
export const ProdList=[];