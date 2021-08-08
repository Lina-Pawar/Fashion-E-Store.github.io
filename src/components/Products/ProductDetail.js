import {ProdList} from "./ProdList";
function ProductDetail() {
    let para = new URLSearchParams(window.location.search);
    let itemID= para.get("id");
    return(
<div>
    <img src={ProdList[itemID].image} alt="item"/>
    <h1>{ProdList[itemID].name}</h1>
    </div>
    );
}
export default ProductDetail;