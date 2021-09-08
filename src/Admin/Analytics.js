import { Chart } from "react-google-charts";
import Service from "../components/Service";


function Analytics(){
    const options ={ title:"Top 5 products",legend:'none',hAxis:{direction:-1,slantedText:true,slantedTextAngle:30} };
    const data=[];
    Service.analytics(data).then((resp) =>{
        if (resp.data.response !== 0 && resp.data.response !== undefined && resp.data.response !== null) {
            const values=resp.data.response;
            // eslint-disable-next-line
            const vals=values.map((val)=>{
                data.push([val[0],val[1]]);
                return val;
            });
        }
    });
    return(
        <div>
            <br/><br/><br/>
            <Chart chartType="ColumnChart" rows={data} columns={[{type: "string",label: "Product"},{type: "number",label: "Quantity"}]} width="400px" height="400px" options={options} legendToggle/>
        </div>
    );
}
export default Analytics;