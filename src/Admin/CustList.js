import Service from "../components/Service";
Service.customers().then((resp) =>{
    if (resp.data.response !== 0 && resp.data.response !== undefined && resp.data.response !== null) {
        const values=resp.data.response;
        // eslint-disable-next-line
        const customersdetails=values.map((customersdetails)=>{
            CustList.push(customersdetails);             
            return customersdetails;
          });
    } else {
        alert("Error");
    }
});
export const CustList=[];