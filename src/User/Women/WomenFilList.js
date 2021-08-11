import "../ListStyle.css";
function WomenFilList(){
  let para = new URLSearchParams(window.location.search);
  let cattype=para.get("cat");
 
  if (cattype==="clothing"){
    return(
      <div>
          <table align="center" style={{width:"95%",marginLeft:"10%",textAlign:"left"}}>
          <tr>
            <td><h3><input type="checkbox" name="top" />&nbsp;&nbsp;<label>Tops</label></h3></td>
            <td><h3><input type="checkbox" name="skirts" />&nbsp;&nbsp;<label>Skirts</label></h3></td>
          </tr>
          <tr>
            <td><h3><input type="checkbox" name="jeans" />&nbsp;&nbsp;<label>Jeans</label></h3></td>
            <td><h3><input type="checkbox" name="shorts" />&nbsp;&nbsp;<label>shorts</label></h3></td>
          </tr>
          <tr>
          <td><h3><input type="checkbox" name="lehenga" />&nbsp;&nbsp;<label>Lehengas</label></h3></td>
          <td><h3><input type="checkbox" name="dresses" />&nbsp;&nbsp;<label>Dresses</label></h3></td>    
          </tr>
          <tr>
          <td><h3><input type="checkbox" name="ethnic" />&nbsp;&nbsp;<label>Ethnics</label></h3></td>
          <td><h3><input type="checkbox" name="saree" />&nbsp;&nbsp;<label>Sarees</label></h3></td>    
          </tr>
          <tr>
          <td><h3><input type="checkbox" name="nightwear" />&nbsp;&nbsp;<label>Nightwear</label></h3></td>
          <td><h3><input type="checkbox" name="jumpsuit" />&nbsp;&nbsp;<label>Jumpsuits</label></h3></td>
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
      <a href="/women?cat=accesories"><h3>Women Accessories</h3></a>
      <a href="/women?cat=footwear"><h3>Women Footwear</h3></a>
      <a href="/men?cat=clothing"><h3>Men Clothing</h3></a>
      <a href="/men?cat=accessories"><h3>Men Accessories</h3></a>
      <a href="/men?cat=footwear"><h3>Men Footwear</h3></a>
      <a href="/kids?cat=clothing"><h3>Kids Clothing</h3></a>
      <a href="/kids?cat=accesories"><h3>Kids Accessories</h3></a>
      <a href="/kids?cat=footwear"><h3>Kids Footwear</h3></a>
      </div>
      </div> 
  )
  }
  if (cattype==="accessories") {
    return(
      <div>
          <table align="center" style={{width:"95%",marginLeft:"10%",textAlign:"left"}}>
          <tr>
            <td><h3><input type="checkbox" name="jewellery" />&nbsp;&nbsp;<label>Jewellery</label></h3></td>
            <td><h3><input type="checkbox" name="mask" />&nbsp;&nbsp;<label>Masks</label></h3></td>
          </tr>
          <tr>
            <td><h3><input type="checkbox" name="watches" />&nbsp;&nbsp;<label>Watches</label></h3></td>
            <td><h3><input type="checkbox" name="sunglass" />&nbsp;&nbsp;<label>Sunglasses</label></h3></td>
          </tr>
          <tr>
          <td><h3><input type="checkbox" name="scarf" />&nbsp;&nbsp;<label>Scarf</label></h3></td>
          <td><h3><input type="checkbox" name="hat" />&nbsp;&nbsp;<label>Hats</label></h3></td>    
          </tr>
          <tr>
          <td><h3><input type="checkbox" name="belt" />&nbsp;&nbsp;<label>Belts</label></h3></td>
          <td><h3><input type="checkbox" name="gloves" />&nbsp;&nbsp;<label>Gloves</label></h3></td>
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
      <a href="/women?cat=clothing"><h3>Women Clothing</h3></a>
      <a href="/women?cat=footwear"><h3>Women Footwear</h3></a>
      <a href="/men?cat=clothing"><h3>Men Clothing</h3></a>
      <a href="/men?cat=accessories"><h3>Men Accessories</h3></a>
      <a href="/men?cat=footwear"><h3>Men Footwear</h3></a>
      <a href="/kids?cat=clothing"><h3>Kids Clothing</h3></a>
      <a href="/kids?cat=accesories"><h3>Kids Accessories</h3></a>
      <a href="/kids?cat=footwear"><h3>Kids Footwear</h3></a>
      </div>
      </div> 
  )
  } 
 if (cattype==="footwear"){
  return(
    <div>
        <table align="center" style={{width:"95%",marginLeft:"10%",textAlign:"left"}}>
        <tr>
          <td><h3><input type="checkbox" name="shoes" />&nbsp;&nbsp;<label>Shoes</label></h3></td>
          <td><h3><input type="checkbox" name="heels" />&nbsp;&nbsp;<label>Heels</label></h3></td>
        </tr>
        <tr>
          <td><h3><input type="checkbox" name="sneakers" />&nbsp;&nbsp;<label>Sneakers</label></h3></td>
          <td><h3><input type="checkbox" name="boots" />&nbsp;&nbsp;<label>Boots</label></h3></td>
        </tr>
        <tr>
        <td><h3><input type="checkbox" name="flats" />&nbsp;&nbsp;<label>Flats</label></h3></td>
        <td><h3><input type="checkbox" name="wedges" />&nbsp;&nbsp;<label>Wedges</label></h3></td>    
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
    <a href="/women?cat=clothing"><h3>Women Clothing</h3></a>
      <a href="/women?cat=accessories"><h3>Women Accessories</h3></a>
      <a href="/men?cat=clothing"><h3>Men Clothing</h3></a>
      <a href="/men?cat=accessories"><h3>Men Accessories</h3></a>
      <a href="/men?cat=footwear"><h3>Men Footwear</h3></a>
      <a href="/kids?cat=clothing"><h3>Kids Clothing</h3></a>
      <a href="/kids?cat=accesories"><h3>Kids Accessories</h3></a>
      <a href="/kids?cat=footwear"><h3>Kids Footwear</h3></a>
    </div>
    </div> 
)
 }
}
export default WomenFilList;