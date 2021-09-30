import { Chart } from "react-google-charts";
import Service from "../components/Service";

function Analytics(){
    const top5=[];
    const pie=[['Category', 'Percent']];
    const graph=[['Month', 'Sales']];
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
    Service.linegraph().then((resp) =>{
        if (resp.data.response !== 0 && resp.data.response !== undefined && resp.data.response !== null) {
            const values=resp.data.response;
            // eslint-disable-next-line
            const vals=values.map((val)=>{
                graph.push([val[0],val[1]]);
                return val;
            });
        }
    });
    return(
            <><br /><br /><br />
            <div style={{ display: 'grid',gridTemplateColumns:"repeat(3,auto)" }}>
            <Chart width="400px" height="350px" chartType="ColumnChart" rows={top5} columns={[{ type: "string", label: "Product" }, { type: "number", label: "Quantity" }]}
                options={{ title: "Top 5 products", legend: 'none', hAxis: { direction: -1, slantedText: true, slantedTextAngle: 30 } }} legendToggle />
            <Chart width="400px" height="400px" chartType="PieChart" data={pie} options={{ title: 'Category-vise Analysis', }} />
            <Chart width="400px" height="350px" chartType="LineChart" data={graph} options={{ title: 'Monthly Analysis',hAxis: {title: 'Month',},vAxis: {title: 'Sales',},}} />
            </div></>
    );
}
export default Analytics;