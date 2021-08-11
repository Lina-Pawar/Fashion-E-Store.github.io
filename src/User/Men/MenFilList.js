import "../ListStyle.css";
function MenFilList(){
  let para = new URLSearchParams(window.location.search);
  let cattype=para.get("cat");
 
  if (cattype==="clothing"){
    return(
      <div>
          <table align="center" style={{width:"95%",marginLeft:"10%",textAlign:"left"}}>
          <tr>
            <td><h3><input type="checkbox" name="tshirt" />&nbsp;&nbsp;<label>T-Shirt</label></h3></td>
            <td><h3><input type="checkbox" name="shirt" />&nbsp;&nbsp;<label>Shirt</label></h3></td>
          </tr>
          <tr>
            <td><h3><input type="checkbox" name="blazers" />&nbsp;&nbsp;<label>Blazers</label></h3></td>
            <td><h3><input type="checkbox" name="jacket" />&nbsp;&nbsp;<label>Jackets</label></h3></td>
          </tr>
          <tr>
          <td><h3><input type="checkbox" name="casual" />&nbsp;&nbsp;<label>Casuals</label></h3></td>
          <td><h3><input type="checkbox" name="pant" />&nbsp;&nbsp;<label>Pants</label></h3></td>    
          </tr>
          <tr>
          <td><h3><input type="checkbox" name="kurta" />&nbsp;&nbsp;<label>Kurtas</label></h3></td>
          <td><h3><input type="checkbox" name="sherwani" />&nbsp;&nbsp;<label>Sherwanis</label></h3></td>
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
      <a href="/men?cat=accessories"><h3>Men Accessories</h3></a>
      <a href="/men?cat=footwear"><h3>Men Footwear</h3></a>
      <a href="/women?cat=clothing"><h3>Women Clothing</h3></a>
      <a href="/women?cat=accessories"><h3>Women Accessories</h3></a>
      <a href="/women?cat=footwear"><h3>Women Footwear</h3></a>
      <a href="/kids?cat=clothing"><h3>Kids Clothing</h3></a>
      <a href="/kids?cat=accessories"><h3>Kids Accessories</h3></a>
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
            <td><h3><input type="checkbox" name="tshirt" />&nbsp;&nbsp;<label>T-Shirt</label></h3></td>
            <td><h3><input type="checkbox" name="shirt" />&nbsp;&nbsp;<label>Shirt</label></h3></td>
          </tr>
          <tr>
            <td><h3><input type="checkbox" name="blazers" />&nbsp;&nbsp;<label>Blazers</label></h3></td>
            <td><h3><input type="checkbox" name="jacket" />&nbsp;&nbsp;<label>Jackets</label></h3></td>
          </tr>
          <tr>
          <td><h3><input type="checkbox" name="casual" />&nbsp;&nbsp;<label>Casuals</label></h3></td>
          <td><h3><input type="checkbox" name="pant" />&nbsp;&nbsp;<label>Pants</label></h3></td>    
          </tr>
          <tr>
          <td><h3><input type="checkbox" name="kurta" />&nbsp;&nbsp;<label>Kurtas</label></h3></td>
          <td><h3><input type="checkbox" name="sherwani" />&nbsp;&nbsp;<label>Sherwanis</label></h3></td>
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
      <a href="/men?cat=clothing"><h3>Men Clothing</h3></a>
      <a href="/men?cat=footwear"><h3>Men Footwear</h3></a>
      <a href="/women?cat=clothing"><h3>Women Clothing</h3></a>
      <a href="/women?cat=accessories"><h3>Women Accessories</h3></a>
      <a href="/women?cat=footwear"><h3>Women Footwear</h3></a>
      <a href="/kids?cat=clothing"><h3>Kids Clothing</h3></a>
      <a href="/kids?cat=accessories"><h3>Kids Accessories</h3></a>
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
          <td><h3><input type="checkbox" name="tshirt" />&nbsp;&nbsp;<label>T-Shirt</label></h3></td>
          <td><h3><input type="checkbox" name="shirt" />&nbsp;&nbsp;<label>Shirt</label></h3></td>
        </tr>
        <tr>
          <td><h3><input type="checkbox" name="blazers" />&nbsp;&nbsp;<label>Blazers</label></h3></td>
          <td><h3><input type="checkbox" name="jacket" />&nbsp;&nbsp;<label>Jackets</label></h3></td>
        </tr>
        <tr>
        <td><h3><input type="checkbox" name="casual" />&nbsp;&nbsp;<label>Casuals</label></h3></td>
        <td><h3><input type="checkbox" name="pant" />&nbsp;&nbsp;<label>Pants</label></h3></td>    
        </tr>
        <tr>
        <td><h3><input type="checkbox" name="kurta" />&nbsp;&nbsp;<label>Kurtas</label></h3></td>
        <td><h3><input type="checkbox" name="sherwani" />&nbsp;&nbsp;<label>Sherwanis</label></h3></td>
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
    <a href="/men?cat=clothing"><h3>Men Clothing</h3></a>
    <a href="/men?cat=accessories"><h3>Men Accessories</h3></a>
    <a href="/women?cat=clothing"><h3>Women Clothing</h3></a>
    <a href="/women?cat=accessories"><h3>Women Accessories</h3></a>
    <a href="/women?cat=footwear"><h3>Women Footwear</h3></a>
    <a href="/kids?cat=clothing"><h3>Kids Clothing</h3></a>
    <a href="/kids?cat=accessories"><h3>Kids Accessories</h3></a>
    <a href="/kids?cat=footwear"><h3>Kids Footwear</h3></a>
    </div>
    </div> 
)
 }
}
export default MenFilList;