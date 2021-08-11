
import "../ListStyle.css";
function KidsFilList(){
  let para = new URLSearchParams(window.location.search);
  let cattype=para.get("cat");
 
  if (cattype==="clothing"){
    return(
      <div>
          <table align="center" style={{width:"95%",marginLeft:"10%",textAlign:"left"}}>
          <tr>
            <td><h3><input type="checkbox" name="boys" />&nbsp;&nbsp;<label>Boys</label></h3></td>
            <td><h3><input type="checkbox" name="girls" />&nbsp;&nbsp;<label>Girls</label></h3></td>
          </tr>
          <tr>
            <td><h3><input type="checkbox" name="tshirt" />&nbsp;&nbsp;<label>T-Shirts</label></h3></td>
            <td><h3><input type="checkbox" name="tops" />&nbsp;&nbsp;<label>Tops</label></h3></td>
          </tr>
          <tr>
          <td><h3><input type="checkbox" name="shorts" />&nbsp;&nbsp;<label>Shorts</label></h3></td>
          <td><h3><input type="checkbox" name="jeans" />&nbsp;&nbsp;<label>Jeans</label></h3></td>    
          </tr>
          <tr>
          <td><h3><input type="checkbox" name="trousers" />&nbsp;&nbsp;<label>Trousers</label></h3></td>
          <td><h3><input type="checkbox" name="dress" />&nbsp;&nbsp;<label>Dress</label></h3></td>
          </tr>
          <tr>
              <td colSpan="2"><h3><input type="checkbox" name="showall" />&nbsp;&nbsp;<label>Show All..</label></h3></td>
          </tr>
      </table>
      <br />
      <div className="othercat">
      <h2>Other Categories</h2>
      <hr />
      <br />
    <a href="/kids?cat=accessories"><h3>Kids Accessories</h3></a>
    <a href="/kids?cat=footwear"><h3>Kids Footwear</h3></a>
    <a href="/men?cat=clothing"><h3>Men Clothing</h3></a>
    <a href="/men?cat=accessories"><h3>Men Accessories</h3></a>
    <a href="/men?cat=footwear"><h3>Men Footwear</h3></a>
    <a href="/women?cat=clothing"><h3>Women Clothing</h3></a>
    <a href="/women?cat=accessories"><h3>Women Accessories</h3></a>
    <a href="/women?cat=footwear"><h3>Women Footwear</h3></a>
      </div>
      </div> 
  )
  }
  if (cattype==="accessories") {
    return(
      <div>
          <table align="center" style={{width:"95%",marginLeft:"10%",textAlign:"left"}}>
          <tr>
            <td><h3><input type="checkbox" name="boys" />&nbsp;&nbsp;<label>Boys</label></h3></td>
            <td><h3><input type="checkbox" name="girls" />&nbsp;&nbsp;<label>Girls</label></h3></td>
          </tr>
          <tr>
            <td><h3><input type="checkbox" name="cap" />&nbsp;&nbsp;<label>Caps</label></h3></td>
            <td><h3><input type="checkbox" name="watch" />&nbsp;&nbsp;<label>Watches</label></h3></td>
          </tr>
          <tr>
          <td><h3><input type="checkbox" name="mask" />&nbsp;&nbsp;<label>Masks</label></h3></td>
          <td><h3><input type="checkbox" name="sunglass" />&nbsp;&nbsp;<label>Sunglasses</label></h3></td>    
          </tr>
          <tr>
              <td colSpan="2"><h3><input type="checkbox" name="showall" />&nbsp;&nbsp;<label>Show All..</label></h3></td>
          </tr>
      </table>
      <br />
      <div className="othercat">
      <h2>Other Categories</h2>
      <hr />
      <br />
      <a href="/kids?cat=clothing"><h3>Kids Clothing</h3></a>
    <a href="/kids?cat=footwear"><h3>Kids Footwear</h3></a>
    <a href="/men?cat=clothing"><h3>Men Clothing</h3></a>
    <a href="/men?cat=accessories"><h3>Men Accessories</h3></a>
    <a href="/men?cat=footwear"><h3>Men Footwear</h3></a>
    <a href="/women?cat=clothing"><h3>Women Clothing</h3></a>
    <a href="/women?cat=accessories"><h3>Women Accessories</h3></a>
    <a href="/women?cat=footwear"><h3>Women Footwear</h3></a>
      </div>
      </div> 
  )
  } 
 if (cattype==="footwear"){
  return(
    <div>
        <table align="center" style={{width:"95%",marginLeft:"10%",textAlign:"left"}}>
        <tr>
          <td><h3><input type="checkbox" name="boys" />&nbsp;&nbsp;<label>Boys</label></h3></td>
          <td><h3><input type="checkbox" name="girls" />&nbsp;&nbsp;<label>Girls</label></h3></td>
        </tr>
        <tr>
          <td><h3><input type="checkbox" name="sandal" />&nbsp;&nbsp;<label>Sandals</label></h3></td>
          <td><h3><input type="checkbox" name="shoes" />&nbsp;&nbsp;<label>Shoes</label></h3></td>
        </tr>
        <tr>
        <td><h3><input type="checkbox" name="sneakers" />&nbsp;&nbsp;<label>Sneakers</label></h3></td>
        <td><h3><input type="checkbox" name="sandals" />&nbsp;&nbsp;<label>Sandals</label></h3></td>    
        </tr>
        <tr>
        <td><h3><input type="checkbox" name="crocs" />&nbsp;&nbsp;<label>Crocs</label></h3></td>
        <td><h3><input type="checkbox" name="heels" />&nbsp;&nbsp;<label>Heels</label></h3></td>
        </tr>
        <tr>
            <td colSpan="2"><h3><input type="checkbox" name="showall" />&nbsp;&nbsp;<label>Show All..</label></h3></td>
        </tr>
    </table>
    <br />
    <div className="othercat">
    <h2>Other Categories</h2>
    <hr />
    <br />
    <a href="/kids?cat=clothing"><h3>Kids Clothing</h3></a>
    <a href="/kids?cat=accessories"><h3>Kids Accessories</h3></a>
    <a href="/men?cat=clothing"><h3>Men Clothing</h3></a>
    <a href="/men?cat=accessories"><h3>Men Accessories</h3></a>
    <a href="/men?cat=footwear"><h3>Men Footwear</h3></a>
    <a href="/women?cat=clothing"><h3>Women Clothing</h3></a>
    <a href="/women?cat=accessories"><h3>Women Accessories</h3></a>
    <a href="/women?cat=footwear"><h3>Women Footwear</h3></a>
    </div>
    </div> 
)
 }
}
export default KidsFilList;