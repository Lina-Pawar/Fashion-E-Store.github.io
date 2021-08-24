import Products from "../components/Products/Products";
function Productslist(){
    return(
        <div style={{marginTop:"9vh"}}>
            <h1 style={{textAlign:"center"}}>Products</h1>
            <Products n={180}/>
        </div>
    );
}
export default Productslist;