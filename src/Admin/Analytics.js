import { Chart } from "react-google-charts";
import Service from "../components/Service";


function Analytics(){
    const options ={ title:"Top 5 products",legend:'none',hAxis:{direction:-1,slantedText:true,slantedTextAngle:30} };
    const top5=[];
    const pie=[['Category', 'Percent']];
    Service.topProducts().then((resp) =>{
        if (resp.data.response !== 0 && resp.data.response !== undefined && resp.data.response !== null) {
            const values=resp.data.response;
            // eslint-disable-next-line
            const vals=values.map((val)=>{
                top5.push([val[0],val[1]]);
                return val;
            });
        }
    });
    Service.pie().then((resp) =>{
        if (resp.data.response !== 0 && resp.data.response !== undefined && resp.data.response !== null) {
            const values=resp.data.response;
            // eslint-disable-next-line
            const vals=values.map((val)=>{
                pie.push([val[0],val[1]]);
                return val;
            });
        }
    });
    return(
        <div>
            <br/><br/><br/>
            <Chart chartType="ColumnChart" rows={top5} columns={[{type: "string",label: "Product"},{type: "number",label: "Quantity"}]} width="400px" height="400px" options={options} legendToggle/>
            <br/>
            <Chart chartType="PieChart" data={pie}/>
        </div>
    );
}
export default Analytics;